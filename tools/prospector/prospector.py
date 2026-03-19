import os
import requests
import json
import argparse
import time
import csv
import re
from google import genai
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# Cargar variables desde el archivo .env si existe
load_dotenv()

def detect_tech_stack(html_content, url):
    """Detecta la tecnología subyacente de la página web mediante firmas en el HTML."""
    html_lower = html_content.lower()
    
    if "linktr.ee" in url.lower() or "linktr.ee" in html_lower:
        return "Linktree"
    if "wix.com website builder" in html_lower or "wixsite.com" in html_lower or "wix-image" in html_lower:
        return "Wix"
    if "static1.squarespace.com" in html_lower or "squarespace" in html_lower:
        return "Squarespace"
    if "cdn.shopify.com" in html_lower or "shopify" in html_lower:
        return "Shopify"
    if "wp-content" in html_lower or "wordpress" in html_lower:
        return "WordPress"
    
    return "Custom / Unknown"

def scrape_website_meta(url):
    """Extrae información básica y detecta el tech stack de un sitio web."""
    try:
        # User agent de Chrome para evitar bloqueos básicos
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        response = requests.get(url, timeout=10, headers=headers)
        
        if response.status_code != 200:
            return {"Title": "Error", "Description": f"Status {response.status_code}", "Tech Stack": "N/A", "Snippet": ""}
            
        soup = BeautifulSoup(response.text, 'lxml')
        title = soup.title.string.strip() if soup.title and soup.title.string else "N/A"
        
        meta_desc = ""
        desc_tag = soup.find("meta", attrs={"name": "description"})
        if desc_tag and desc_tag.get("content"):
            meta_desc = desc_tag.get("content").strip()
            
        stack = detect_tech_stack(response.text, url)
        
        # Tomar los primeros 300 caracteres del texto visible para contexto de IA
        text_content = soup.get_text(separator=' ', strip=True)[:300]
        
        return {
            "Title": title,
            "Description": meta_desc,
            "Tech Stack": stack,
            "Snippet": text_content
        }
    except Exception as e:
        return {"Title": "Connection Error", "Description": str(e), "Tech Stack": "N/A", "Snippet": ""}

def search_businesses(api_key, target_query, locations, audit_mode=True, min_reviews=50, min_rating=4.5):
    """Busca negocios iterando sobre múltiples ubicaciones y audita sus webs."""
    
    all_prospects = {}
    url = "https://places.googleapis.com/v1/places:searchText"
    
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.websiteUri,places.rating,places.userRatingCount,places.googleMapsUri,places.nationalPhoneNumber"
    }
    
    for location in locations:
        full_query = f"{target_query} in {location}"
        print(f"\n--- 🔍 Buscando: '{full_query}' ---")
        
        data = {
            "textQuery": full_query,
            "languageCode": "en",
            "maxResultCount": 20
        }
        
        try:
            res = requests.post(url, headers=headers, json=data).json()
            
            if 'places' in res:
                print(f"   [API] Encontrados {len(res['places'])} resultados en {location}.")
                for p in res['places']:
                    place_id = p.get('id')
                    if place_id in all_prospects:
                        continue
                    
                    rating = p.get('rating', 0)
                    reviews = p.get('userRatingCount', 0)
                    
                    # FILTRO DE FLUJO DE CAJA Y REPUTACIÓN
                    if reviews < min_reviews or rating < min_rating:
                        continue

                    name = p.get('displayName', {}).get('text', 'N/A')
                    website = p.get('websiteUri', '')
                    has_website = bool(website)
                    
                    if has_website and not audit_mode:
                        continue
                        
                    score = round((reviews / 10) * max(1, rating - 3), 1)
                    
                    tech_stack = "NO WEBSITE"
                    
                    if not has_website:
                        print(f"[HOT] {name} | Score: {score} | Sin web")
                        status = "HOT_NO_WEBSITE"
                        details = {"Title": "N/A", "Description": "N/A", "Tech Stack": "NO WEBSITE", "Snippet": "N/A"}
                    else:
                        print(f"[AUDIT] {name} | Analizando web...")
                        details = scrape_website_meta(website)
                        tech_stack = details["Tech Stack"]
                        
                        if tech_stack in ["Wix", "Squarespace", "Linktree", "WordPress"]:
                            status = f"HOT_{tech_stack.upper()}"
                            print(f"  └── 🎯 TARGET ENCONTRADO: Usa {tech_stack}")
                        else:
                            status = "CUSTOM_OR_UNKNOWN"
                    
                    all_prospects[place_id] = {
                        "Name": name,
                        "Location": location,
                        "Status": status,
                        "Tech Stack": tech_stack,
                        "Website": website,
                        "Phone": p.get('nationalPhoneNumber', 'N/A'),
                        "Score": score,
                        "Rating": rating,
                        "Reviews": reviews,
                        "Meta Title": details["Title"],
                        "Maps URL": p.get('googleMapsUri', '')
                    }
            else:
                print(f"   [API] Sin resultados para {location}.")
                
        except Exception as e:
            print(f"   [ERROR] Fallo en la comunicación: {str(e)}")
            
    # Ordenar por Score (reputación)
    sorted_prospects = sorted(all_prospects.values(), key=lambda x: x['Score'], reverse=True)
    return sorted_prospects

def generate_cold_emails(prospects, api_key):
    """Usa Google Gemini para redactar cold emails ultra-personalizados."""
    
    # Filtrar solo los HOT leads
    hot_leads = [p for p in prospects if "HOT" in p["Status"]][:10]
    
    if not hot_leads:
        print("\nNo se encontraron HOT leads suficientes para generar emails.")
        return None
        
    print("\n🧠 Generando Cold Emails con Gemini AI para los top 10 HOT leads...")
    client = genai.Client(api_key=api_key)
    
    prompt = """
    You are Martin el Cheikh, a highly skilled Software Architect.
    I will provide you with a list of target businesses. Based on their 'Tech Stack' and location, write a highly personalized Cold Email for each.
    
    CORE MESSAGE to adapt:
    "I saw your reviews and the service you offer on Google Maps—the photos, the clients, your location—it all looks great, but your current website service ({Tech Stack}) isn't at the same level. We can optimize it to generate a better image, stronger web presence, and higher client retention. Recently, I worked for Mikka Tattoo, a top studio in Melbourne that participates in major expos. We optimized a site similar to yours by building a fully custom one, improving customer navigation (mobile-first), and streamlining bookings and product sales. It's fully integrated with your phone, your calendar, your preferred payment platform, and includes an /admin section for you to manage everything. I'd love for you to take a look."

    RULES FOR THE EMAILS:
    - Language: Write in English for locations in the US, Australia, UK, etc. Write in Spanish for Latin America or Spain.
    - Personalization: Mention their specific name, high rating, and the generic tech stack they use (e.g., Wix, Squarespace, Linktree). Make it sound natural.
    - Links: Include a link to the case study: mikkatattoo.com and your portfolio: elcheikh.me
    - Pricing: Do NOT mention an exact price. If price comes up, suggest a "Custom quote based on your needs" (or "Precio a medida").
    - Tone: Keep it natural, direct, and professional. Not overly salesy. Sound like a peer/expert reaching out.
    - Sign off as "Martin el Cheikh | Software Architect | elcheikh.me"

    PROSPECTS:
    """
    
    for i, p in enumerate(hot_leads):
        prompt += f"\n\n--- PROSPECT {i+1} ---\nName: {p['Name']}\nLocation: {p['Location']}\nTech Stack: {p['Tech Stack']}\nRating: {p['Rating']} ({p['Reviews']} reviews)"

    try:
        response = client.models.generate_content(model='gemini-2.5-flash', contents=prompt)
        return response.text
    except Exception as e:
        return f"Error en análisis IA: {str(e)}"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Martin el Cheikh - Global SaaS Prospector")
    parser.add_argument("--target", type=str, default="Tattoo Studio", help="Nicho a buscar (ej. 'Tattoo Studio', 'Barber Shop')")
    parser.add_argument("--locations", type=str, required=True, help="Ciudades separadas por coma (ej. 'Melbourne AUS, Miami USA')")
    parser.add_argument("--output", type=str, default="hot_leads.csv", help="Archivo CSV de salida")
    parser.add_argument("--min-reviews", type=int, default=50, help="Mínimo de reseñas para asegurar flujo de caja")
    parser.add_argument("--min-rating", type=float, default=4.5, help="Mínimo rating para asegurar calidad del negocio")
    parser.add_argument("--no-ai", action="store_true", help="Desactivar la generación de Cold Emails con Gemini")
    
    args = parser.parse_args()
    api_key = os.environ.get("GOOGLE_MAPS_API_KEY")
    ai_key = os.environ.get("GOOGLE_AI_STUDIO_KEY")
    
    if not api_key:
        print("ERROR: Configura GOOGLE_MAPS_API_KEY en el archivo .env")
        exit(1)
        
    location_list = [loc.strip() for loc in args.locations.split(',')]
    
    print(f"🚀 Iniciando Arquitecto Prospector...")
    print(f"🎯 Target: {args.target}")
    print(f"🌍 Ubicaciones: {len(location_list)}")
    print(f"💰 Filtros de Calidad: >{args.min_reviews} Reviews, >{args.min_rating} Estrellas")
    
    results = search_businesses(api_key, args.target, location_list, audit_mode=True, min_reviews=args.min_reviews, min_rating=args.min_rating)
    
    if results:
        output_path = os.path.join("output", args.output)
        keys = results[0].keys()
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            dict_writer = csv.DictWriter(f, fieldnames=keys)
            dict_writer.writeheader()
            dict_writer.writerows(results)
            
        print(f"\n✅ Proceso completado.")
        print(f"📊 Se guardaron {len(results)} prospectos en {output_path}")

        if not args.no_ai and ai_key:
            ai_emails = generate_cold_emails(results, ai_key)
            if ai_emails:
                report_file = output_path.replace('.csv', '_EMAILS.md')
                with open(report_file, 'w', encoding='utf-8') as f:
                    f.write(f"# Cold Email Pipeline - {args.target}\n\n")
                    f.write(ai_emails)
                print(f"✉️ Correos generados en: {report_file}")
        elif not ai_key and not args.no_ai:
            print("⚠️ No se generaron correos: GOOGLE_AI_STUDIO_KEY no configurada.")
    else:
        print("\nNo se encontraron prospectos.")

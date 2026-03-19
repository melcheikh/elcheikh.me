import os
import csv
from google import genai
from dotenv import load_dotenv

# Cargar variables desde el archivo .env si existe
load_dotenv()

def generate_cold_emails_from_csv(csv_filepath, api_key):
    """Lee un CSV existente y usa Google Gemini para redactar cold emails."""
    
    if not os.path.exists(csv_filepath):
        print(f"❌ Error: No se encontró el archivo {csv_filepath}")
        return
        
    prospects = []
    with open(csv_filepath, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            prospects.append(row)
            
    # Filtrar solo los HOT leads
    hot_leads = [p for p in prospects if "HOT" in p.get("Status", "")]
    
    if not hot_leads:
        print("\n❌ No se encontraron prospectos marcados como 'HOT' en el CSV.")
        return
        
    print(f"\n🧠 Generando Cold Emails con Gemini AI para {len(hot_leads)} prospectos HOT...")
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
        
        output_file = csv_filepath.replace('.csv', '_DRAFT_EMAILS.md')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"# Borradores de Cold Email\n\n")
            f.write(response.text)
            
        print(f"✅ ¡Éxito! Se generaron los borradores en: {output_file}")
        
    except Exception as e:
        print(f"❌ Error en análisis IA: {str(e)}")

if __name__ == "__main__":
    ai_key = os.environ.get("GOOGLE_AI_STUDIO_KEY")
    
    if not ai_key:
        print("ERROR: Configura GOOGLE_AI_STUDIO_KEY en el archivo .env")
        exit(1)
        
    csv_file = "output/med_spa_hot_leads.csv"
    print(f"Leyendo prospectos desde: {csv_file}")
    generate_cold_emails_from_csv(csv_file, ai_key)

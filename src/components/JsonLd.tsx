export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ocean Web Solutions',
    description:
      'Custom web design, development, and SEO for local businesses in Geelong, Ocean Grove & the Surf Coast.',
    url: 'https://oceanwebsolutions.com.au',
    telephone: '+61 4XX XXX XXX',
    email: 'hello@oceanwebsolutions.com.au',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ocean Grove',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -38.2667,
      longitude: 144.5167,
    },
    areaServed: [
      { '@type': 'City', name: 'Geelong' },
      { '@type': 'City', name: 'Ocean Grove' },
      { '@type': 'AdministrativeArea', name: 'Surf Coast Shire' },
    ],
    serviceType: [
      'Web Design',
      'Web Development',
      'E-Commerce Development',
      'Search Engine Optimization',
      'Custom Web Applications',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/ocean-web-solutions',
      'https://www.instagram.com/oceanwebsolutions',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Anwaltskanzlei Gür Law Firm",
    description: "Expert legal counsel in traffic and criminal law matters",
    url: "https://anwaltskanzlei.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Hamburg",
      postalCode: "Your Postal Code",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.551086",
      longitude: "9.993682",
    },
    telephone: "+49 40 300 300 300",
    email: "info@anwaltskanzlei.de",
    areaServed: "Hamburg",
    serviceType: ["Traffic Law", "Criminal Law"],
    priceRange: "€€",
    openingHours: "Mo-Fr 09:00-18:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

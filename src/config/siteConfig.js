export const siteConfig = {
  name: 'AN SURVEY CONSULTANT',
  tagline: 'Measure with confidence. Build with clarity.',
  email: 'info@ansurvey.in',
  whatsappDisplay: '+91 7499440969',
  whatsappNumber: '917499440969',
  instagram: 'https://www.instagram.com/ansurvey.in/',
  serviceArea: 'Nagpur, Maharashtra, India',
  map: { lat: 21.1458, lng: 79.0882, zoom: 12 },
  copyright: '© 2026 AN Survey Consultant. All Rights Reserved.',
  credit: 'Developed & Managed by Shubham Ajbale'
}
export const whatsappLink = (message = 'Hello AN Survey Consultant, I would like to discuss a survey project.') =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

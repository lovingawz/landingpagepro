export function calculateKeywordDensity(content: string, keyword: string): number {
  const words = content.toLowerCase().split(/\s+/);
  const keywordCount = words.filter(word => word === keyword.toLowerCase()).length;
  return (keywordCount / words.length) * 100;
}

export function generateMetaTags(seo: any, lang: string) {
  return {
    title: seo[lang].title,
    description: seo[lang].description,
    keywords: seo[lang].keywords.join(', '),
    'og:title': seo[lang].title,
    'og:description': seo[lang].description,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': seo[lang].title,
    'twitter:description': seo[lang].description,
  };
}
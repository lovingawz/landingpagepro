'use client';

import { useLanguage } from '@/lib/useLanguage';
import { siteConfig } from '@/lib/config';

interface Testimonial {
  text: string;
  author: string;
}

export default function Feedback() {
  const { language } = useLanguage();
  const content = siteConfig.pages.home.components[1].content[language as keyof typeof siteConfig.languages];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Feedback from '@/components/Feedback';
import Wishlist from '@/components/Wishlist';
import { siteConfig } from '@/lib/config';
import { generateMetaTags } from '@/lib/seo';
import { useLanguage } from '@/lib/useLanguage';

export const metadata: Metadata = {
  title: 'Home | Our Amazing Site',
  description: 'Discover our products and services',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feedback />
      <Wishlist />
    </main>
  );
}

import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Method } from '@/components/sections/Method';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/layout/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Method />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
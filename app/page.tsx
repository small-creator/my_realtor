import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import StorySection from '@/components/sections/StorySection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <CredentialsSection />
      <StorySection />
      <ServiceAreaSection />
      <ReviewsSection />
      <CTASection />
      <FAQSection />

      <Footer />
    </main>
  );
}

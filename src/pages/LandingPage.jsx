import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import KeyBenefits from '../components/KeyBenefits';
import FeaturedBrands from '../components/FeaturedBrands';
import UserTestimonials from '../components/UserTestimonials';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const LandingPage = () => (
  <>
    <Header />
    <main className="pt-20">
      <HeroSection />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="key-benefits">
        <KeyBenefits />
      </section>
      <section id="featured-brands">
        <FeaturedBrands />
      </section>
      <section id="testimonials">
        <UserTestimonials />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  </>
);

export default LandingPage;

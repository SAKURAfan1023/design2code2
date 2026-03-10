import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesDemo from "@/components/FeaturesDemo";
import Capabilities from "@/components/Capabilities";
import UseCases from "@/components/UseCases";
import RelatedProducts from "@/components/RelatedProducts";
import Integration from "@/components/Integration";
import CustomersTrust from "@/components/CustomersTrust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-w-[1440px]">
      <Header />
      <main className="pt-20">
        <Hero />
        <FeaturesDemo />
        <Capabilities />
        <UseCases />
        <RelatedProducts />
        <Integration />
        <CustomersTrust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

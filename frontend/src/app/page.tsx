import Hero from "@/components/home/Hero";
import NearbyVehicles from "@/components/home/NearbyVehicles";
import TrustStrip from "@/components/home/TrustStrip";
import BrowseByCategory from "@/components/home/browsebycategory";
import HowItWorks from "@/components/home/howitworks";
import TrustAndSafety from "@/components/home/trustandsafety";
import WhyTheWheelDeal from "@/components/home/whythewheeldeal";
import OwnerCTA from "@/components/home/ownercta";
import LocalDiscovery from "@/components/home/localdiscovery";
import FAQ from "@/components/home/faq"
import FinalCTA from "@/components/home/finalcta";
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <NearbyVehicles />
      <TrustStrip />
      <BrowseByCategory />
      <HowItWorks />
      <TrustAndSafety />
      <WhyTheWheelDeal />
      <OwnerCTA />
      <LocalDiscovery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
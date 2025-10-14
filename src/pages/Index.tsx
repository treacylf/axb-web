import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DistrictGrid } from "@/components/DistrictGrid";
import { BuildingGrid } from "@/components/BuildingGrid";
import { ServiceSection } from "@/components/ServiceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <DistrictGrid />
        <BuildingGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

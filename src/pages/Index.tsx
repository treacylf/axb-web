import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SearchBox } from "@/components/SearchBox";
import { FilterBar } from "@/components/FilterBar";
import { DistrictGrid } from "@/components/DistrictGrid";
import { BuildingGrid } from "@/components/BuildingGrid";
import { CoworkingGrid } from "@/components/CoworkingGrid";
import { CreativeParkGrid } from "@/components/CreativeParkGrid";
import { ServiceSection } from "@/components/ServiceSection";
import { Footer } from "@/components/Footer";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const Index = () => {
  const carouselImages = [
    { src: heroSlide1, href: "#buildings", alt: "上海写字楼出租" },
    { src: heroSlide2, href: "#creative", alt: "创意园区" },
    { src: heroSlide3, href: "#coworking", alt: "共享办公" },
    { src: heroSlide4, href: "#headquarters", alt: "总部独栋" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Carousel with Search */}
        <div className="relative">
          <HeroCarousel images={carouselImages} />
          <SearchBox />
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Service Section */}
        <ServiceSection />

        {/* Districts */}
        <DistrictGrid />

        {/* Buildings */}
        <BuildingGrid />

        {/* Coworking Spaces */}
        <CoworkingGrid />

        {/* Creative Parks */}
        <CreativeParkGrid />
      </main>
      <Footer />
      
      {/* Floating Sidebar */}
      <FloatingSidebar />
    </div>
  );
};

export default Index;

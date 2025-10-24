import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SearchBox } from "@/components/SearchBox";
import { FilterBar } from "@/components/FilterBar";
import { DistrictGrid } from "@/components/DistrictGrid";
import { BuildingGrid } from "@/components/BuildingGrid";
import { CoworkingGrid } from "@/components/CoworkingGrid";
import { CreativeParkGrid } from "@/components/CreativeParkGrid";
import { HeadquartersGrid } from "@/components/HeadquartersGrid";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import heroSlide1 from "@/assets/carousel-1.jpg";
import heroSlide2 from "@/assets/carousel-2.jpg";
import heroSlide3 from "@/assets/carousel-3.jpg";
import heroSlide4 from "@/assets/carousel-4.jpg";

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

        {/* Districts */}
        <DistrictGrid />

        {/* Buildings */}
        <BuildingGrid />

        {/* Coworking Spaces */}
        <CoworkingGrid />

        {/* Creative Parks */}
        <CreativeParkGrid />

        {/* Headquarters */}
        <HeadquartersGrid />

        {/* Consultation CTA */}
        <ConsultationCTA />

        {/* News Section */}
        <NewsSection />
      </main>
      <Footer />
      
      {/* Floating Sidebar */}
      <FloatingSidebar />
    </div>
  );
};

export default Index;

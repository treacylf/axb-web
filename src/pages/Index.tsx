import { useState, useEffect, useCallback } from "react";
import { ResponsiveNav } from "@/components/ResponsiveNav";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SearchBox } from "@/components/SearchBox";
import { FilterBar } from "@/components/FilterBar";
import { MobileFilterDrawer } from "@/components/MobileFilterDrawer";
import { DistrictGrid } from "@/components/DistrictGrid";
import { BuildingGrid } from "@/components/BuildingGrid";
import { CoworkingGrid } from "@/components/CoworkingGrid";
import { CreativeParkGrid } from "@/components/CreativeParkGrid";
import { HeadquartersGrid } from "@/components/HeadquartersGrid";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import heroSlide1 from "@/assets/carousel-1.jpg";
import heroSlide2 from "@/assets/carousel-2.jpg";
import heroSlide3 from "@/assets/carousel-3.jpg";
import heroSlide4 from "@/assets/carousel-4.jpg";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const carouselImages = [
    { src: heroSlide1, href: "#buildings", alt: "上海写字楼出租" },
    { src: heroSlide2, href: "#creative", alt: "创意园区" },
    { src: heroSlide3, href: "#coworking", alt: "共享办公" },
    { src: heroSlide4, href: "#headquarters", alt: "总部独栋" },
  ];

  // 监听滚动，显示/隐藏返回顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      <ResponsiveNav />
      <main>
        {/* Hero Carousel with Search */}
        <div className="relative">
          <HeroCarousel images={carouselImages} />
          <SearchBox />
        </div>

        {/* Filter Bar */}
        <div className="hidden lg:block">
          <FilterBar />
        </div>
        <div className="lg:hidden">
          <MobileFilterDrawer />
        </div>

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
      
      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-fade-in hover-scale"
          aria-label="返回顶部"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;

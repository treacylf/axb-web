import { Card } from "@/components/ui/card";
import { MapPin, Building2 } from "lucide-react";
import vankeCenter from "@/assets/buildings/vanke-center.jpg";
import exhibitionHub from "@/assets/buildings/exhibition-hub.jpg";
import hongqiaoHui from "@/assets/buildings/hongqiao-hui.jpg";
import sohoTianshan from "@/assets/buildings/soho-tianshan.jpg";
import hongqiaoTiandi from "@/assets/buildings/hongqiao-tiandi.jpg";
import worldCenter from "@/assets/buildings/world-center.jpg";

interface Building {
  name: string;
  location: string;
  image: string;
}

export const BuildingGrid = () => {
  const buildings: Building[] = [
    { name: "虹桥万科中心", location: "虹桥商务区", image: vankeCenter },
    { name: "虹桥国际展汇", location: "虹桥商务区", image: exhibitionHub },
    { name: "虹桥汇", location: "虹桥商务区", image: hongqiaoHui },
    { name: "SOHO天山广场", location: "长宁区", image: sohoTianshan },
    { name: "虹桥天地", location: "闵行区", image: hongqiaoTiandi },
    { name: "虹桥世界中心", location: "闵行区", image: worldCenter },
    { name: "虹桥万科中心", location: "虹桥商务区", image: vankeCenter },
    { name: "虹桥国际展汇", location: "虹桥商务区", image: exhibitionHub },
  ];

  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            精选写字楼
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buildings.map((building, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: "var(--card-shadow)",
              }}
            >
              <a href="#" className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={building.image}
                    alt={building.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {building.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{building.location}</span>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

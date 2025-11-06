import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import vankeCenter from "@/assets/buildings/vanke-center.jpg";
import exhibitionHub from "@/assets/buildings/exhibition-hub.jpg";
import hongqiaoHui from "@/assets/buildings/hongqiao-hui.jpg";
import sohoTianshan from "@/assets/buildings/soho-tianshan.jpg";
import hongqiaoTiandi from "@/assets/buildings/hongqiao-tiandi.jpg";
import worldCenter from "@/assets/buildings/world-center.jpg";

interface Building {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const BuildingGrid = () => {
  const buildings: Building[] = [
    { id: 1, name: "虹桥万科中心", location: "虹桥商务区", image: vankeCenter },
    { id: 2, name: "虹桥国际展汇", location: "虹桥商务区", image: exhibitionHub },
    { id: 3, name: "虹桥汇", location: "虹桥商务区", image: hongqiaoHui },
    { id: 4, name: "SOHO天山广场", location: "长宁区", image: sohoTianshan },
    { id: 5, name: "虹桥天地", location: "闵行区", image: hongqiaoTiandi },
    { id: 6, name: "虹桥世界中心", location: "闵行区", image: worldCenter },
    { id: 1, name: "虹桥万科中心", location: "虹桥商务区", image: vankeCenter },
    { id: 2, name: "虹桥国际展汇", location: "虹桥商务区", image: exhibitionHub },
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
              <Link to={`/building/${building.id}`} className="block">
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
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/search?nav_id=1">
            <Button size="lg" variant="outline">
              更多上海写字楼出租
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";
import { MapPin, Building2 } from "lucide-react";
import buildingImage from "@/assets/building-placeholder.jpg";

interface Building {
  name: string;
  location: string;
  image: string;
}

export const BuildingGrid = () => {
  const buildings: Building[] = [
    { name: "虹桥万科中心", location: "虹桥商务区", image: buildingImage },
    { name: "虹桥国际展汇", location: "虹桥商务区", image: buildingImage },
    { name: "中信泰富广场", location: "南京西路", image: buildingImage },
    { name: "环球金融中心", location: "陆家嘴", image: buildingImage },
    { name: "长风大悦城", location: "长风商务区", image: buildingImage },
    { name: "仲盛世界商城", location: "莘庄", image: buildingImage },
    { name: "正大广场", location: "陆家嘴", image: buildingImage },
    { name: "协信星光广场", location: "徐泾", image: buildingImage },
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

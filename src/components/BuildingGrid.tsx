import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { buildingData } from "@/data/buildingsData";
import { OptimizedImage } from "@/components/OptimizedImage";

export const BuildingGrid = () => {
  // 获取写字楼数据 (ID: 1-11)
  const buildings = Object.values(buildingData)
    .filter(building => building.id >= 1 && building.id <= 11)
    .slice(0, 12);

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
          {buildings.map((building) => (
            <Card
              key={building.id}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: "var(--card-shadow)",
              }}
            >
              <Link to={`/building/${building.id}`} className="block">
                <OptimizedImage
                  src={building.images[0]}
                  alt={building.name}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {building.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{building.district}</span>
                  </div>
                  <p className="text-sm font-medium text-accent">
                    {building.price} {building.priceRange}
                  </p>
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

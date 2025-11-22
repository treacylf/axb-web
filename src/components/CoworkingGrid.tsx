import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { buildingData } from "@/data/buildingsData";
import { OptimizedImage } from "@/components/OptimizedImage";

export const CoworkingGrid = () => {
  // 获取联合办公数据 (ID: 101-114)
  const coworkings = Object.values(buildingData)
    .filter(building => building.id >= 101 && building.id <= 114)
    .slice(0, 12);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            精选联合办公
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coworkings.map((coworking) => (
            <Card
              key={coworking.id}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Link to={`/building/${coworking.id}`} className="block">
                <OptimizedImage
                  src={coworking.images[0]}
                  alt={coworking.name}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {coworking.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{coworking.district}</span>
                  </div>
                  <p className="text-sm font-medium text-accent">
                    {coworking.price} {coworking.priceRange}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/search?nav_id=3">
            <Button size="lg" variant="outline">
              更多联合办公
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

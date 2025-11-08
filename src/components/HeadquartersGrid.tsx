import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { buildingData } from "@/data/buildingsData";

export const HeadquartersGrid = () => {
  // 获取总部独栋数据 (ID: 301-312)
  const headquarters = Object.values(buildingData)
    .filter(building => building.id >= 301 && building.id <= 312)
    .slice(0, 12);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            精选总部独栋
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            为企业总部提供专属独立办公大楼
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {headquarters.map((hq) => (
            <Card
              key={hq.id}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: "var(--card-shadow)",
              }}
            >
              <Link to={`/building/${hq.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hq.images[0]}
                    alt={hq.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {hq.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{hq.district}</span>
                  </div>
                  <p className="text-sm font-medium text-accent">
                    {hq.price} {hq.priceRange}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/search?nav_id=4">
            <Button size="lg" variant="outline">
              更多上海独栋写字楼
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

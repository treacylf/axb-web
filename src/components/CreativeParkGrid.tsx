import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { buildingData } from "@/data/buildingsData";

export const CreativeParkGrid = () => {
  // 获取创意园区数据 (ID: 201-208)
  const creativeParks = Object.values(buildingData)
    .filter(building => building.id >= 201 && building.id <= 208)
    .slice(0, 8);

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            精选创意园区
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {creativeParks.map((park) => (
            <Card
              key={park.id}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Link to={`/building/${park.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={park.images[0]}
                    alt={park.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {park.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {park.district}
                  </p>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {park.price} {park.priceRange}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/search?nav_id=2">
            <Button size="lg" variant="outline">
              更多创意园区
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
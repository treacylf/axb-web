import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import show800 from "@/assets/creative/800show.jpg";
import anken from "@/assets/creative/anken.jpg";
import bridge8 from "@/assets/creative/bridge8.jpg";

interface CreativePark {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const CreativeParkGrid = () => {
  const parks: CreativePark[] = [
    { id: 201, name: "800秀创意园", location: "静安", image: show800 },
    { id: 202, name: "安垦汇智创意园", location: "静安", image: anken },
    { id: 203, name: "八号桥Ⅳ期", location: "闸北", image: bridge8 },
    { id: 204, name: "大宁德必易园", location: "静安", image: show800 },
    { id: 205, name: "复地四季广场", location: "静安", image: anken },
    { id: 206, name: "老码头创意园", location: "黄浦", image: bridge8 },
    { id: 207, name: "幸福里创意园", location: "浦东", image: show800 },
    { id: 208, name: "越界·世博园", location: "浦东", image: anken },
  ];

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
          {parks.map((park, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <a href={`/building/${park.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={park.image}
                    alt={park.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {park.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{park.location}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/search?nav_id=2">
            <Button size="lg" variant="outline">
              更多创意园区
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

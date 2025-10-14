import { Card } from "@/components/ui/card";
import creativeImage from "@/assets/creative-placeholder.jpg";

interface CreativePark {
  name: string;
  location: string;
  image: string;
}

export const CreativeParkGrid = () => {
  const parks: CreativePark[] = [
    { name: "虹桥德必易园", location: "闵行", image: creativeImage },
    { name: "X2创意空间", location: "徐汇", image: creativeImage },
    { name: "越界智造局", location: "静安", image: creativeImage },
    { name: "锦和越界文创园", location: "浦东", image: creativeImage },
    { name: "德必易园800秀", location: "长宁", image: creativeImage },
    { name: "上海国际时尚中心", location: "杨浦", image: creativeImage },
    { name: "M50创意园", location: "普陀", image: creativeImage },
    { name: "8号桥创意园", location: "黄浦", image: creativeImage },
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
              <a href="#" className="block">
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
          <a
            href="#"
            className="inline-block rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            更多创意园区
          </a>
        </div>
      </div>
    </section>
  );
};

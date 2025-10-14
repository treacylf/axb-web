import { Card } from "@/components/ui/card";
import coworkingImage from "@/assets/coworking-placeholder.jpg";

interface Coworking {
  name: string;
  location: string;
  image: string;
}

export const CoworkingGrid = () => {
  const coworkings: Coworking[] = [
    { name: "WIZWORK（环球港）", location: "普陀", image: coworkingImage },
    { name: "艾克商务中心（外滩金融中心）", location: "黄浦", image: coworkingImage },
    { name: "大树下办公空间（龙湖虹桥天街）", location: "长宁", image: coworkingImage },
    { name: "德事商务中心（静安嘉里中心）", location: "静安", image: coworkingImage },
    { name: "寰图办公空间（上海白玉兰广场）", location: "虹口", image: coworkingImage },
    { name: "氪空间KrSpace（虹桥绿谷社区）", location: "青浦", image: coworkingImage },
    { name: "快易名商（虹桥万通中心）", location: "长宁", image: coworkingImage },
    { name: "雷格斯商务中心（1788国际中心）", location: "浦东", image: coworkingImage },
  ];

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
          {coworkings.map((coworking, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <a href="#" className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={coworking.image}
                    alt={coworking.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {coworking.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{coworking.location}</p>
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
            更多上海热门联合办公
          </a>
        </div>
      </div>
    </section>
  );
};

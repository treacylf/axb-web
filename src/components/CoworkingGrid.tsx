import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import distrii1 from "@/assets/coworking/distrii-1.jpg";
import umon1 from "@/assets/coworking/umon-1.jpg";
import wework1 from "@/assets/coworking/wework-1.jpg";

interface Coworking {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const CoworkingGrid = () => {
  const coworkings: Coworking[] = [
    { id: 101, name: "Distrii办伴（冠捷大厦）", location: "长宁", image: distrii1 },
    { id: 102, name: "Umon优盟（虹桥丽宝广场）", location: "闵行", image: umon1 },
    { id: 103, name: "WeWork（虹桥天地）", location: "闵行", image: wework1 },
    { id: 104, name: "WIZWORK（环球港）", location: "普陀", image: distrii1 },
    { id: 105, name: "艾克商务中心（外滩金融中心）", location: "黄浦", image: umon1 },
    { id: 106, name: "大树下办公空间（龙湖虹桥天街）", location: "闵行", image: wework1 },
    { id: 107, name: "德事商务中心（静安嘉里中心）", location: "静安", image: distrii1 },
    { id: 108, name: "寰图办公空间（上海白玉兰广场）", location: "黄浦", image: umon1 },
    { id: 109, name: "氪空间KrSpace（虹桥绿谷社区）", location: "闵行", image: wework1 },
    { id: 110, name: "快易名商（虹桥万通中心）", location: "闵行", image: distrii1 },
    { id: 111, name: "雷格斯商务中心（1788国际中心）", location: "浦东", image: umon1 },
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
              <a href={`/building/${coworking.id}`} className="block">
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
          <a href="/search?nav_id=3">
            <Button size="lg" variant="outline">
              更多联合办公
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

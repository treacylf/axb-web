import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import distriiGuanjie from "@/assets/coworking/distrii-guanjie.jpg";
import umonHongqiao from "@/assets/coworking/umon-hongqiao.jpg";
import weworkTiandi from "@/assets/coworking/wework-tiandi.jpg";
import wizworkHuanqiugang from "@/assets/coworking/wizwork-huanqiugang.jpg";
import aikeWaitan from "@/assets/coworking/aike-waitan.jpg";
import dashuxiaTianjie from "@/assets/coworking/dashuxia-tianjie.jpg";
import deshiKerry from "@/assets/coworking/deshi-kerry.jpg";
import huantuBaiyulan from "@/assets/coworking/huantu-baiyulan.jpg";
import krspaceLvgu from "@/assets/coworking/krspace-lvgu.jpg";
import kuaiyiWantong from "@/assets/coworking/kuaiyi-wantong.jpg";
import regus1788 from "@/assets/coworking/regus-1788.jpg";

interface Coworking {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const CoworkingGrid = () => {
  const coworkings: Coworking[] = [
    { id: 1627, name: "Distrii办伴（冠捷大厦）", location: "长宁", image: distriiGuanjie },
    { id: 1632, name: "Umon优盟（虹桥丽宝广场）", location: "闵行", image: umonHongqiao },
    { id: 1638, name: "WeWork（虹桥天地）", location: "闵行", image: weworkTiandi },
    { id: 1642, name: "WIZWORK（环球港）", location: "普陀", image: wizworkHuanqiugang },
    { id: 1644, name: "艾克商务中心（外滩金融中心）", location: "黄浦", image: aikeWaitan },
    { id: 1668, name: "大树下办公空间（龙湖虹桥天街）", location: "闵行", image: dashuxiaTianjie },
    { id: 1671, name: "德事商务中心（静安嘉里中心）", location: "静安", image: deshiKerry },
    { id: 1672, name: "寰图办公空间（上海白玉兰广场）", location: "黄浦", image: huantuBaiyulan },
    { id: 1679, name: "氪空间KrSpace（虹桥绿谷社区）", location: "闵行", image: krspaceLvgu },
    { id: 1684, name: "快易名商（虹桥万通中心）", location: "闵行", image: kuaiyiWantong },
    { id: 1685, name: "雷格斯商务中心（1788国际中心）", location: "浦东", image: regus1788 },
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
              <Link to={`/building/${coworking.id}`} className="block">
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

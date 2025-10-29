import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hongqiaoBu from "@/assets/headquarters/hongqiao-bu.jpg";
import liboReeb from "@/assets/headquarters/libo-reeb.jpg";
import tianlinFang from "@/assets/headquarters/tianlin-fang.jpg";
import zhongjunPlaza from "@/assets/headquarters/zhongjun-plaza.jpg";
import hongqiaoZhengrong from "@/assets/headquarters/hongqiao-zhengrong.jpg";
import maxTech from "@/assets/headquarters/max-tech.jpg";
import pingjinCenter from "@/assets/headquarters/pingjin-center.jpg";
import rongdaCenter from "@/assets/headquarters/rongda-center.jpg";

interface Headquarters {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const HeadquartersGrid = () => {
  const headquarters: Headquarters[] = [
    { id: 301, name: "虹桥BU中心（独栋）", location: "长宁区", image: hongqiaoBu },
    { id: 302, name: "力波REEB1987（独栋）", location: "普陀区", image: liboReeb },
    { id: 303, name: "田林坊（独栋）", location: "徐汇区", image: tianlinFang },
    { id: 304, name: "中骏广场（独栋）", location: "长宁区", image: zhongjunPlaza },
    { id: 305, name: "虹桥正荣中心（独栋）", location: "闵行区", image: hongqiaoZhengrong },
    { id: 306, name: "MAX科技园（独栋）", location: "闵行区", image: maxTech },
    { id: 307, name: "平金中心（独栋）", location: "浦东新区", image: pingjinCenter },
    { id: 308, name: "容大中心（独栋）", location: "闵行区", image: rongdaCenter },
  ];

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
          {headquarters.map((hq, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <a href={`/building/${hq.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hq.image}
                    alt={hq.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {hq.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{hq.location}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/search?nav_id=4">
            <Button size="lg" variant="outline">
              更多上海独栋写字楼
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

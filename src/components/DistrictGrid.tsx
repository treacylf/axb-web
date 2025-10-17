import { Card } from "@/components/ui/card";
import hongqiaoBusiness from "@/assets/districts/hongqiao-business.jpg";
import hongqiaoAirport from "@/assets/districts/hongqiao-airport.jpg";
import gubei from "@/assets/districts/gubei.jpg";
import renminSquare from "@/assets/districts/renmin-square.jpg";
import changfeng from "@/assets/districts/changfeng.jpg";
import xinzhuang from "@/assets/districts/xinzhuang.jpg";
import lujiazui from "@/assets/districts/lujiazui.jpg";
import districtPlaceholder from "@/assets/district-placeholder.jpg";

interface District {
  name: string;
  image: string;
}

export const DistrictGrid = () => {
  const districts: District[] = [
    { name: "虹桥商务区", image: hongqiaoBusiness },
    { name: "徐泾/西虹桥", image: districtPlaceholder },
    { name: "虹桥临空经济区", image: hongqiaoAirport },
    { name: "虹桥古北开发区", image: gubei },
    { name: "人民广场", image: renminSquare },
    { name: "长风商务区", image: changfeng },
    { name: "莘庄商务区", image: xinzhuang },
    { name: "陆家嘴", image: lujiazui },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            上海热门商圈
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-accent"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {districts.map((district, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <a href="#" className="block">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={district.image}
                    alt={district.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {district.name}
                  </h3>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

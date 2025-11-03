import { Phone, MapPin, Building2, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SearchSidebar = () => {
  const hotDistricts = [
    { name: "虹桥商务区", link: "#" },
    { name: "陆家嘴", link: "#" },
    { name: "人民广场", link: "#" },
    { name: "徐家汇", link: "#" },
    { name: "五角场", link: "#" },
    { name: "张江高科", link: "#" },
    { name: "静安寺", link: "#" },
    { name: "南京西路", link: "#" },
  ];

  const hotBuildings = [
    { name: "虹桥万科中心", price: "4.3元/m²/天", link: "#" },
    { name: "虹桥世界中心", price: "6.5元/m²/天", link: "#" },
    { name: "虹桥国际展汇", price: "2.5元/m²/天", link: "#" },
    { name: "SOHO天山广场", price: "5.8元/m²/天", link: "#" },
    { name: "虹桥天地", price: "5.5元/m²/天", link: "#" },
  ];

  const news = [
    { title: "2024年上海写字楼市场趋势分析", date: "2024-01-15", link: "#" },
    { title: "虹桥商务区新增高端写字楼", date: "2024-01-10", link: "#" },
    { title: "共享办公空间持续升温", date: "2024-01-05", link: "#" },
    { title: "写字楼租金价格走势报告", date: "2024-01-01", link: "#" },
  ];

  return (
    <div className="space-y-4">
      {/* 立即预约 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">立即预约</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center py-4 bg-muted/30 rounded">
            <Phone className="h-12 w-12 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground mb-1">专业顾问为您服务</p>
            <p className="text-lg font-bold text-primary">16651188000</p>
          </div>
          <a
            href="tel:16651188000"
            className="block w-full text-center py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            免费电话预约
          </a>
        </CardContent>
      </Card>

      {/* 热门商圈 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            热门商圈
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {hotDistricts.map((district, index) => (
              <a
                key={index}
                href={district.link}
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {district.name}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 热门楼盘 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            热门楼盘
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {hotBuildings.map((building, index) => (
            <a
              key={index}
              href={building.link}
              className="block group"
            >
              <div className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                <span className="text-sm group-hover:text-primary transition-colors truncate">
                  {building.name}
                </span>
                <span className="text-xs text-primary whitespace-nowrap ml-2">
                  {building.price}
                </span>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>

      {/* 热门资讯 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            热门资讯
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block group"
            >
              <div className="pb-3 border-b border-border last:border-0">
                <p className="text-sm group-hover:text-primary transition-colors mb-1 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

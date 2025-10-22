import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

interface PropertyItem {
  id: number;
  name: string;
  price: string;
  unit: string;
  location: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1350,
    title: '虹桥新天地焕新出发，升级"上海第一站"体验',
    date: "2025-09-25 11:16",
    excerpt: '枢纽"新天地"，焕彩"第一站"。作为虹桥国际中央商务区核心区的重要商业地标之一，"虹桥天地"正式焕新升级更名为"虹桥新天地"，以文旅商体展融合发展的新姿态，助力虹桥深入推进国际级消费集聚区建设。',
    image: "/placeholder.svg",
    category: "industry"
  },
  {
    id: 1349,
    title: "上海写字楼市场2024年第三季度报告",
    date: "2024-09-20 14:30",
    excerpt: "第三季度上海核心商圈写字楼租金保持稳定，空置率小幅下降。陆家嘴金融城和虹桥商务区表现尤为突出，优质资源供不应求。",
    image: "/placeholder.svg",
    category: "industry"
  },
  {
    id: 1348,
    title: "共享办公空间需求持续增长",
    date: "2024-09-15 10:00",
    excerpt: "随着灵活办公模式的普及，上海联合办公空间的需求量持续攀升，WeWork、DISTRII等品牌纷纷扩张新店。",
    image: "/placeholder.svg",
    category: "finding"
  },
  {
    id: 1347,
    title: "创意园区改造升级成趋势",
    date: "2024-09-10 16:45",
    excerpt: "多个老工业厂房经过改造升级，转型为现代化创意园区，为中小企业和创业团队提供特色办公环境。",
    image: "/placeholder.svg",
    category: "property"
  },
  {
    id: 1346,
    title: "2024年办公楼租赁政策解读",
    date: "2024-09-05 09:20",
    excerpt: "本文详细解读2024年上海市关于办公楼租赁的最新政策，以及企业可享受的税务优惠措施。",
    image: "/placeholder.svg",
    category: "decoration"
  }
];

const hotProperties: PropertyItem[] = [
  { id: 982, name: "桂箐园", price: "2.2", unit: "元/m²/天 起", location: "徐汇区 - 漕河泾开发区", image: "/placeholder.svg" },
  { id: 1358, name: "合生财富广场", price: "4.2", unit: "元/m²/天 起", location: "虹口区 - 临平/和平公园", image: "/placeholder.svg" },
  { id: 490, name: "泓毅大厦", price: "4.0", unit: "元/m²/天 起", location: "闵行区 - 龙柏/虹桥镇", image: "/placeholder.svg" },
  { id: 794, name: "华侨城中意国际", price: "2.2", unit: "元/m²/天 起", location: "闵行区 - 浦江镇", image: "/placeholder.svg" },
  { id: 1672, name: "寰图办公空间（上海白玉兰广场）", price: "2200.0", unit: "元/月 起", location: "虹口区 - 北外滩", image: "/placeholder.svg" },
  { id: 2192, name: "上海智能制造科技创业中心", price: "6.0", unit: "元/m²/天 起", location: "徐汇区 - 漕河泾开发区", image: "/placeholder.svg" },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "全部", count: 1314 },
    { value: "industry", label: "行业新闻", count: 352 },
    { value: "finding", label: "找房攻略", count: 307 },
    { value: "property", label: "楼盘百科", count: 341 },
    { value: "decoration", label: "装修攻略", count: 314 },
  ];

  const filteredNews = activeCategory === "all" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Categories & Hot Properties */}
            <aside className="w-full lg:w-1/4 space-y-6">
              {/* Categories */}
              <Card>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setActiveCategory(category.value)}
                        className={`px-4 py-3 text-left border-b last:border-b-0 transition-colors ${
                          activeCategory === category.value
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        {category.label} ({category.count})
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Hot Properties */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">热门楼盘</h3>
                    <a href="/search?nav_id=0" className="text-sm text-primary hover:underline">
                      更多 &gt;&gt;&gt;
                    </a>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
                    {hotProperties.map((property) => (
                      <a
                        key={property.id}
                        href={`/search?nav_id=1&id=${property.id}`}
                        className="block group"
                      >
                        <div className="aspect-video bg-muted rounded overflow-hidden mb-2">
                          <img 
                            src={property.image} 
                            alt={property.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h4 className="font-medium text-sm mb-1 truncate group-hover:text-primary">
                          {property.name}
                        </h4>
                        <p className="text-primary font-semibold text-sm mb-1">
                          {property.price} <span className="text-xs font-normal">{property.unit}</span>
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{property.location}</p>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Right Content - News List */}
            <div className="flex-1">
              <div className="space-y-0">
                {filteredNews.map((news, index) => (
                  <div key={news.id}>
                    {index > 0 && <hr className="border-border" />}
                    <a 
                      href={`/news/${news.id}`}
                      className="block group"
                    >
                      <div className="flex flex-col md:flex-row gap-4 py-4">
                        <div className="w-full md:w-48 flex-shrink-0">
                          <div className="aspect-video bg-muted rounded overflow-hidden">
                            <img 
                              src={news.image} 
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                              {news.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{news.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{news.date}</span>
                            <span className="text-primary group-hover:underline">
                              了解详情 &gt;
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <hr className="border-border" />
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center gap-2 flex-wrap">
                <Button variant="outline" size="sm">上一页</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">4</Button>
                <Button variant="outline" size="sm">5</Button>
                <Button variant="outline" size="sm">下一页</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

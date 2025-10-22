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

import list1360 from "@/assets/news/list_1360.jpg";
import list1359 from "@/assets/news/list_1359.jpg";
import list1358 from "@/assets/news/list_1358.jpg";
import list1357 from "@/assets/news/list_1357.jpg";
import list1356 from "@/assets/news/list_1356.jpg";
import list1355 from "@/assets/news/list_1355.jpg";
import list1354 from "@/assets/news/list_1354.jpg";
import list1353 from "@/assets/news/list_1353.jpg";
import list1352 from "@/assets/news/list_1352.jpg";
import house2162 from "@/assets/properties/house_2162.jpg";
import house2070 from "@/assets/properties/house_2070.jpg";
import house895 from "@/assets/properties/house_895.jpg";
import house170 from "@/assets/properties/house_170.jpg";
import house2303 from "@/assets/properties/house_2303.jpg";
import house1928 from "@/assets/properties/house_1928.jpg";

const newsData: NewsItem[] = [
  {
    id: 1360,
    title: '公司办公选址在风水方面有哪些讲究',
    date: "2025-10-21 11:17",
    excerpt: '企业办公选址都很慎重，希望在新的办公环境中可以迎来事业发展，公司规模扩大。谁都不能否认一个好的办公室对企业发展的重要性',
    image: list1360,
    category: "finding"
  },
  {
    id: 1359,
    title: "办公室装修如何有效进行空间布置？",
    date: "2025-10-20 10:54",
    excerpt: "办公室装修设计空间布置",
    image: list1359,
    category: "decoration"
  },
  {
    id: 1358,
    title: '"绿地中央广场"系大型商务综合体：静安绿地中央广场',
    date: "2025-10-17 13:18",
    excerpt: '静安绿地中央广场，位于上海市静安区江场路与寿阳路交汇处、走马塘南岸，落址静安市北高新园区，毗邻大宁商圈，是世界500强绿地集团、旭辉集团、市北高新集团联手打造的"绿地中央广场"系大型商务综合体。',
    image: list1358,
    category: "property"
  },
  {
    id: 1357,
    title: "全域！虹桥国际中央商务区纳入上海自贸试验区联动创新区",
    date: "2025-10-16 10:57",
    excerpt: "10月15日上午，中国（上海）自由贸易试验区推进工作领导小组发布《第二批上海自贸试验区联动创新区建设方案》，《建设方案》明确增设虹桥国际中央商务区、上海国际旅游度假区、静安、长宁、普陀、青浦、嘉定、金山等8个重点区域。",
    image: list1357,
    category: "industry"
  },
  {
    id: 1356,
    title: "办公室怎么选址风水好",
    date: "2025-10-15 16:46",
    excerpt: "选择一个合适的办公室位置对于公司的未来发展和员工的工作质量都具有重要的影响。",
    image: list1356,
    category: "finding"
  },
  {
    id: 1355,
    title: "办公室装修之设计十大要点",
    date: "2025-10-14 14:55",
    excerpt: "一个别具一格的办公室装修设计，需要在室内划分、平面布局、界面处理、采光及照明、色彩的选择、氛围的营造等方面考虑。",
    image: list1355,
    category: "decoration"
  },
  {
    id: 1354,
    title: "中铁中环时代广场",
    date: "2025-10-13 11:38",
    excerpt: "中铁中环时代广场位于江场西路，项目由7幢塔楼、开放的商业街区、主题广场和主题绿化公园组成，是一个集精装SOHO、百变LOFT、甲级办公、星级酒店、休闲娱乐于一体的大型城市综合体。",
    image: list1354,
    category: "property"
  },
  {
    id: 1353,
    title: "今年年底正式启幕，虹桥前湾印象城MEGA首发阵容曝光！",
    date: "2025-10-11 11:18",
    excerpt: '近日，作为定位大虹桥"国际化社交度假漫游湾"的商业新地标，虹桥前湾印象城MEGA公布首轮招商成果，官宣签约品牌逾200家。项目落位于虹桥前湾核心区域，将于今年年底正式启幕。',
    image: list1353,
    category: "industry"
  },
  {
    id: 1352,
    title: "办公室选址技巧有哪些？",
    date: "2025-10-10 16:31",
    excerpt: "办公室环境，在一定程度上影响员工的工作质量。虽然租办公室要花费大量成本，但这种花费是值得的。舒适的办公室环境不但会提高品牌形象、还会提高员工的工作效率。",
    image: list1352,
    category: "finding"
  }
];

const hotProperties: PropertyItem[] = [
  { id: 2162, name: "众原企业天地", price: "1.8", unit: "元/m²/天 起", location: "浦东区 - 外高桥", image: house2162 },
  { id: 2070, name: "高维大厦", price: "6.3", unit: "元/m²/天 起", location: "浦东区 - 竹园商贸区", image: house2070 },
  { id: 895, name: "嘉宁国际大厦", price: "7.0", unit: "元/m²/天 起", location: "长宁区 - 中山公园", image: house895 },
  { id: 170, name: "宝业中心", price: "2.3", unit: "元/m²/天 起", location: "长宁区 - 虹桥火车站", image: house170 },
  { id: 2303, name: "氪空间（来福士广场）", price: "4000.0", unit: "元/月 起", location: "黄浦区 - 人民广场", image: house2303 },
  { id: 1928, name: "金桥151", price: "2.2", unit: "元/m²/天 起", location: "浦东区 - 金桥", image: house1928 },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "全部", count: 1324 },
    { value: "industry", label: "行业新闻", count: 354 },
    { value: "finding", label: "找房攻略", count: 310 },
    { value: "property", label: "楼盘百科", count: 343 },
    { value: "decoration", label: "装修攻略", count: 317 },
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

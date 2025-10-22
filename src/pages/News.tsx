import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Eye } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  views: number;
  category: string;
  excerpt: string;
  image?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "上海写字楼市场2024年第一季度报告：租金稳中有升",
    date: "2024-03-15",
    views: 1234,
    category: "market",
    excerpt: "据最新市场数据显示，上海核心商圈写字楼租金在2024年第一季度保持稳定增长态势，平均租金环比上涨2.3%...",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "虹桥商务区新地标建筑即将竣工，预计提供5万平米优质办公空间",
    date: "2024-03-12",
    views: 982,
    category: "building",
    excerpt: "位于虹桥商务区核心位置的新地标写字楼项目即将竣工，该项目总建筑面积达到5万平方米...",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "共享办公成趋势：上海联合办公空间需求持续增长",
    date: "2024-03-10",
    views: 856,
    category: "coworking",
    excerpt: "随着灵活办公模式的普及，上海联合办公空间的需求量持续攀升，预计2024年市场规模将增长25%...",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "陆家嘴金融城写字楼空置率创新低，优质资源供不应求",
    date: "2024-03-08",
    views: 1567,
    category: "market",
    excerpt: "作为上海最重要的金融商务区，陆家嘴的优质写字楼空置率降至5%以下，创近三年新低...",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "创意园区改造升级：老厂房变身时尚办公空间",
    date: "2024-03-05",
    views: 723,
    category: "creative",
    excerpt: "多个老工业厂房经过改造升级，转型为现代化创意园区，为中小企业提供特色办公环境...",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "2024年上海办公楼租赁政策解读及税务优惠指南",
    date: "2024-03-01",
    views: 1445,
    category: "policy",
    excerpt: "本文详细解读2024年上海市关于办公楼租赁的最新政策，以及企业可享受的税务优惠措施...",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "浦东新区新增3座甲级写字楼，总面积超10万平米",
    date: "2024-02-28",
    views: 991,
    category: "building",
    excerpt: "浦东新区今年将新增3座甲级写字楼项目，预计总建筑面积超过10万平方米，进一步丰富区域办公资源...",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "联合办公品牌扩张加速，WeWork、DISTRII纷纷开设新店",
    date: "2024-02-25",
    views: 678,
    category: "coworking",
    excerpt: "知名联合办公品牌加快在上海的布局步伐，多个新空间即将开业，为创业者提供更多选择...",
    image: "/placeholder.svg"
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "全部资讯" },
    { value: "market", label: "市场动态" },
    { value: "building", label: "楼宇资讯" },
    { value: "coworking", label: "联合办公" },
    { value: "creative", label: "创意园区" },
    { value: "policy", label: "政策解读" },
  ];

  const filteredNews = activeCategory === "all" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              资讯中心
            </h1>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              了解上海办公楼市场最新动态，掌握行业前沿资讯
            </p>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/50 p-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{news.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="sm">上一页</Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">下一页</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

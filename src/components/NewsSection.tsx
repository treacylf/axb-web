import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "上海写字楼市场2024年Q1报告：虹桥商务区租金稳中有升",
      date: "2024-03-15",
      category: "市场动态",
      excerpt: "根据最新数据显示，虹桥商务区甲级写字楼平均租金达到6.5元/平米/天，环比上涨3.2%，空置率持续下降...",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "共享办公成趋势：灵活办公空间需求持续增长",
      date: "2024-03-10",
      category: "行业资讯",
      excerpt: "随着企业对灵活办公的需求不断增加，共享办公空间在上海市场占比已达15%，预计2024年将继续保持增长态势...",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "创意园区改造升级：老厂房焕发新生机",
      date: "2024-03-05",
      category: "园区动态",
      excerpt: "上海多个创意园区启动升级改造计划，通过引入现代化设施和智能化管理，吸引更多创意企业入驻...",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "办公选址指南：如何选择适合企业的写字楼",
      date: "2024-02-28",
      category: "选址攻略",
      excerpt: "专业选址顾问分享企业办公选址的关键要素，包括交通便利性、周边配套、租金预算等多个维度的考量...",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "2024年上海重点商务区租赁政策解读",
      date: "2024-02-20",
      category: "政策解读",
      excerpt: "针对企业关心的税收优惠、租金补贴等政策进行详细解读，帮助企业更好地了解各区域的优惠政策...",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "绿色办公成新趋势：LEED认证写字楼受青睐",
      date: "2024-02-15",
      category: "行业趋势",
      excerpt: "越来越多企业关注办公环境的可持续性，LEED认证的绿色建筑成为企业选址的优先考虑对象...",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="news" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">资讯中心</h2>
          <p className="text-muted-foreground text-lg">
            掌握市场动态，洞察行业趋势
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  查看详情
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            查看更多资讯
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

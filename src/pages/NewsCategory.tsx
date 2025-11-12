import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { newsData, newsCategories } from "@/data/newsData";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const NewsCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const catId = parseInt(categoryId || "0");
  
  const category = newsCategories.find(cat => cat.id === catId);
  const articles = newsData.filter(article => article.categoryId === catId);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-center">分类不存在</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/news" className="hover:text-primary">资讯中心</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{category.name}</span>
          </div>

          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
            <p className="text-muted-foreground">共 {articles.length} 篇文章</p>
          </div>

          {/* 文章列表 */}
          <div className="grid gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/news/article/${article.id}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-80 h-48 overflow-hidden shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 p-6 md:p-8 md:pl-0">
                        <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                          <span className="text-primary text-sm hover:underline">阅读更多 →</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* 分页（占位） */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border rounded hover:bg-accent">上一页</button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded">1</button>
              <button className="px-4 py-2 border rounded hover:bg-accent">2</button>
              <button className="px-4 py-2 border rounded hover:bg-accent">3</button>
              <button className="px-4 py-2 border rounded hover:bg-accent">下一页</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsCategory;

import { useParams, Link } from "react-router-dom";
import { ResponsiveNav } from "@/components/ResponsiveNav";
import { Footer } from "@/components/Footer";
import { newsData, newsCategories } from "@/data/newsData";
import { Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || "0");
  
  const article = newsData.find(a => a.id === articleId);
  const relatedArticles = article 
    ? newsData.filter(a => a.categoryId === article.categoryId && a.id !== article.id).slice(0, 4)
    : [];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <ResponsiveNav />
        <main className="flex-1 container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-center">文章不存在</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const category = newsCategories.find(cat => cat.id === article.categoryId);

  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNav />
      
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* 面包屑导航 */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">首页</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/news">资讯中心</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/news?category=${category?.slug}`}>{category?.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 文章主体 */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {/* 文章头部 */}
                  <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                  </div>

                  {/* 文章图片 */}
                  <div className="mb-8">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full rounded-lg"
                    />
                  </div>

                  {/* 文章内容 */}
                  <div className="prose prose-slate max-w-none">
                    <div className="text-lg text-muted-foreground mb-6 font-medium">
                      {article.excerpt}
                    </div>
                    <div className="whitespace-pre-line leading-relaxed">
                      {article.content}
                    </div>
                  </div>

                  {/* 文章底部 */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        标签：
                        <span className="text-primary ml-2">{article.category}</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 侧边栏 */}
            <div className="space-y-6">
              {/* 分类导航 */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">文章分类</h3>
                  <div className="space-y-2">
                    {newsCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`block px-4 py-2 rounded ${
                          cat.id === article.categoryId ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 相关文章 */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">相关文章</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          to={`/news/article/${related.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors mb-1">
                                {related.title}
                              </h4>
                              <span className="text-xs text-muted-foreground">{related.date}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;

import { Link } from "react-router-dom";
import { newsData } from "@/data/newsData";

export const NewsSection = () => {
  // Group news by category
  const getCategoryNews = (categoryId: number) => {
    return newsData
      .filter(news => news.categoryId === categoryId)
      .slice(0, 10)
      .map(news => ({
        id: news.id,
        title: news.title,
        date: news.date,
      }));
  };

  const newsCategories = [
    {
      title: "楼盘百科",
      cateId: 7,
      items: getCategoryNews(7),
    },
    {
      title: "找房攻略",
      cateId: 6,
      items: getCategoryNews(6),
    },
    {
      title: "行业新闻",
      cateId: 5,
      items: getCategoryNews(5),
    },
    {
      title: "装修攻略",
      cateId: 8,
      items: getCategoryNews(8),
    },
  ];

  return (
    <section id="news" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="border-b pb-8 mb-8">
          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {newsCategories.slice(0, 2).map((category) => (
              <div key={category.cateId} className="news-items">
                <h4 className="text-lg font-semibold mb-4 pb-2 border-b flex items-center justify-between">
                  {category.title}
                  <Link
                    to="/news"
                    className="text-sm text-primary hover:underline font-normal"
                  >
                    更多 &gt;&gt;
                  </Link>
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`/news/article/${item.id}`}
                        className="text-sm hover:text-primary transition-colors flex items-start justify-between gap-2"
                      >
                        <span className="flex items-start gap-1 flex-1 line-clamp-1">
                          <span className="text-primary shrink-0">·</span>
                          <span className="text-muted-foreground hover:text-primary">
                            {item.title}
                          </span>
                        </span>
                        <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Second Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsCategories.slice(2, 4).map((category) => (
              <div key={category.cateId} className="news-items">
                <h4 className="text-lg font-semibold mb-4 pb-2 border-b flex items-center justify-between">
                  {category.title}
                  <Link
                    to="/news"
                    className="text-sm text-primary hover:underline font-normal"
                  >
                    更多 &gt;&gt;
                  </Link>
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`/news/article/${item.id}`}
                        className="text-sm hover:text-primary transition-colors flex items-start justify-between gap-2"
                      >
                        <span className="flex items-start gap-1 flex-1 line-clamp-1">
                          <span className="text-primary shrink-0">·</span>
                          <span className="text-muted-foreground hover:text-primary">
                            {item.title}
                          </span>
                        </span>
                        <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

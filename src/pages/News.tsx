import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ResponsiveNav } from "@/components/ResponsiveNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { newsData, newsCategories } from "@/data/newsData";

interface PropertyItem {
  id: number;
  name: string;
  price: string;
  unit: string;
  location: string;
  image: string;
}

import house2162 from "@/assets/properties/house_2162.jpg";
import house2070 from "@/assets/properties/house_2070.jpg";
import house895 from "@/assets/properties/house_895.jpg";
import house170 from "@/assets/properties/house_170.jpg";
import house2303 from "@/assets/properties/house_2303.jpg";
import house1928 from "@/assets/properties/house_1928.jpg";

const hotProperties: PropertyItem[] = [
  { id: 2162, name: "众原企业天地", price: "1.8", unit: "元/m²/天 起", location: "浦东区 - 外高桥", image: house2162 },
  { id: 2070, name: "高维大厦", price: "6.3", unit: "元/m²/天 起", location: "浦东区 - 竹园商贸区", image: house2070 },
  { id: 895, name: "嘉宁国际大厦", price: "7.0", unit: "元/m²/天 起", location: "长宁区 - 中山公园", image: house895 },
  { id: 170, name: "宝业中心", price: "2.3", unit: "元/m²/天 起", location: "长宁区 - 虹桥火车站", image: house170 },
  { id: 2303, name: "氪空间（来福士广场）", price: "4000.0", unit: "元/月 起", location: "黄浦区 - 人民广场", image: house2303 },
  { id: 1928, name: "金桥151", price: "2.2", unit: "元/m²/天 起", location: "浦东区 - 金桥", image: house1928 },
];


export default function News() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Read category from URL on mount
  useEffect(() => {
    const categorySlug = searchParams.get('category');
    if (categorySlug) {
      const category = newsCategories.find(cat => cat.slug === categorySlug);
      if (category) {
        setActiveCategory(category.id);
      }
    }
  }, [searchParams]);

  const categories = [
    { id: null, name: "全部", count: newsData.length },
    ...newsCategories.map(cat => ({
      ...cat,
      count: newsData.filter(n => n.categoryId === cat.id).length
    }))
  ];

  const filteredNews = activeCategory === null
    ? newsData 
    : newsData.filter(item => item.categoryId === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const handleCategoryChange = (categoryId: number | null) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ResponsiveNav />
      
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
                        key={category.id ?? 'all'}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`px-4 py-3 text-left border-b last:border-b-0 transition-colors ${
                          activeCategory === category.id
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        {category.name} ({category.count})
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
                {currentNews.map((news, index) => (
                  <div key={news.id}>
                    {index > 0 && <hr className="border-border" />}
                    <Link 
                      to={`/news/article/${news.id}`}
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
                    </Link>
                  </div>
                ))}
                <hr className="border-border" />
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                      
                      {getPageNumbers().map((page, index) => (
                        <PaginationItem key={index}>
                          {page === 'ellipsis' ? (
                            <PaginationEllipsis />
                          ) : (
                            <PaginationLink
                              onClick={() => handlePageChange(page as number)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          )}
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

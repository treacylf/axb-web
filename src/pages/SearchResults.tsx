import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
import { SearchSidebar } from "@/components/SearchSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Building2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Building {
  id: number;
  name: string;
  district: string;
  subway: string;
  area: string;
  price: string;
  image: string;
  tags: string[];
  description: string;
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  
  const itemsPerPage = 6;
  const totalPages = 5; // 总共5页示例数据

  // 真实数据 - 来自GitHub项目
  const allBuildings: Building[] = [
    {
      id: 1,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "500-1000m²",
      price: "4.3元/m²/天 起",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["198m²", "350m²", "456m²", "600m²", "820m²", "1053m²", "2352m²"],
      description: "上海市闵行区申长路988弄"
    },
    {
      id: 2,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线,10号线,虹桥2号航站楼",
      area: "200-800m²",
      price: "2.5元/m²/天 起",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["188m²", "300m²", "450m²", "642m²", "850m²", "980m²", "1350m²", "1853m²"],
      description: "上海市闵行区申昆路2377号"
    },
    {
      id: 3,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["120m²", "200m²", "280m²", "350m²"],
      description: "上海市闵行区虹桥商务区核心"
    },
    {
      id: 4,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5.8元/m²/天 起",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["100m²", "150m²", "180m²", "220m²"],
      description: "上海市长宁区天山路"
    },
    {
      id: 5,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["200m²", "300m²", "400m²", "500m²"],
      description: "上海市长宁区虹桥商务区"
    },
    {
      id: 6,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线,10号线",
      area: "300-1000m²",
      price: "6.5元/m²/天 起",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["300m²", "500m²", "800m²", "1000m²", "1500m²"],
      description: "上海市长宁区虹桥核心区域"
    },
    {
      id: 7,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5.6元/m²/天 起",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["300m²", "450m²", "600m²", "800m²"],
      description: "上海市长宁区核心商务区"
    },
    {
      id: 8,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5.2元/m²/天 起",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["500m²", "800m²", "1000m²", "1200m²", "1500m²"],
      description: "上海市闵行区虹桥商务区"
    },
    {
      id: 9,
      name: "远东国际广场",
      district: "长宁",
      subway: "2号线,10号线",
      area: "200-600m²",
      price: "6.2元/m²/天 起",
      image: "/src/assets/buildings/yuandong-plaza.jpg",
      tags: ["200m²", "350m²", "480m²", "600m²"],
      description: "上海市长宁区虹桥核心区域"
    },
    {
      id: 10,
      name: "维璟中心",
      district: "长宁",
      subway: "10号线",
      area: "300-800m²",
      price: "5.4元/m²/天 起",
      image: "/src/assets/buildings/weijing-center.jpg",
      tags: ["300m²", "450m²", "600m²", "800m²"],
      description: "上海市长宁区地铁站旁"
    },
    {
      id: 11,
      name: "尚嘉中心",
      district: "长宁",
      subway: "2号线",
      area: "200-500m²",
      price: "5.8元/m²/天 起",
      image: "/src/assets/buildings/shangjia-center.jpg",
      tags: ["200m²", "300m²", "400m²", "500m²"],
      description: "上海市长宁区商业配套齐全"
    },
    // 重复数据以模拟更多页面
    {
      id: 12,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "500-1000m²",
      price: "4.3元/m²/天 起",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["198m²", "350m²", "456m²", "600m²", "820m²"],
      description: "上海市闵行区申长路988弄"
    },
    {
      id: 13,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线,10号线,虹桥2号航站楼",
      area: "200-800m²",
      price: "2.5元/m²/天 起",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["188m²", "300m²", "450m²", "642m²", "850m²"],
      description: "上海市闵行区申昆路2377号"
    },
    {
      id: 14,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["120m²", "200m²", "280m²", "350m²"],
      description: "上海市闵行区虹桥商务区核心"
    },
    {
      id: 15,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5.8元/m²/天 起",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["100m²", "150m²", "180m²", "220m²"],
      description: "上海市长宁区天山路"
    },
    {
      id: 16,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["200m²", "300m²", "400m²", "500m²"],
      description: "上海市长宁区虹桥商务区"
    },
    {
      id: 17,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线,10号线",
      area: "300-1000m²",
      price: "6.5元/m²/天 起",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["300m²", "500m²", "800m²", "1000m²"],
      description: "上海市长宁区虹桥核心区域"
    },
    {
      id: 18,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5.6元/m²/天 起",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["300m²", "450m²", "600m²", "800m²"],
      description: "上海市长宁区核心商务区"
    },
    {
      id: 19,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5.2元/m²/天 起",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["500m²", "800m²", "1000m²", "1200m²"],
      description: "上海市闵行区虹桥商务区"
    },
    {
      id: 20,
      name: "远东国际广场",
      district: "长宁",
      subway: "2号线,10号线",
      area: "200-600m²",
      price: "6.2元/m²/天 起",
      image: "/src/assets/buildings/yuandong-plaza.jpg",
      tags: ["200m²", "350m²", "480m²", "600m²"],
      description: "上海市长宁区虹桥核心区域"
    },
    {
      id: 21,
      name: "维璟中心",
      district: "长宁",
      subway: "10号线",
      area: "300-800m²",
      price: "5.4元/m²/天 起",
      image: "/src/assets/buildings/weijing-center.jpg",
      tags: ["300m²", "450m²", "600m²", "800m²"],
      description: "上海市长宁区地铁站旁"
    },
    {
      id: 22,
      name: "尚嘉中心",
      district: "长宁",
      subway: "2号线",
      area: "200-500m²",
      price: "5.8元/m²/天 起",
      image: "/src/assets/buildings/shangjia-center.jpg",
      tags: ["200m²", "300m²", "400m²", "500m²"],
      description: "上海市长宁区商业配套齐全"
    },
    {
      id: 23,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "500-1000m²",
      price: "4.3元/m²/天 起",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["198m²", "350m²", "456m²", "600m²"],
      description: "上海市闵行区申长路988弄"
    },
    {
      id: 24,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线,10号线,虹桥2号航站楼",
      area: "200-800m²",
      price: "2.5元/m²/天 起",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["188m²", "300m²", "450m²", "642m²"],
      description: "上海市闵行区申昆路2377号"
    },
    {
      id: 25,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["120m²", "200m²", "280m²"],
      description: "上海市闵行区虹桥商务区核心"
    },
    {
      id: 26,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5.8元/m²/天 起",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["100m²", "150m²", "180m²"],
      description: "上海市长宁区天山路"
    },
    {
      id: 27,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5.5元/m²/天 起",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["200m²", "300m²", "400m²"],
      description: "上海市长宁区虹桥商务区"
    },
    {
      id: 28,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线,10号线",
      area: "300-1000m²",
      price: "6.5元/m²/天 起",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["300m²", "500m²", "800m²"],
      description: "上海市长宁区虹桥核心区域"
    },
    {
      id: 29,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5.6元/m²/天 起",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["300m²", "450m²", "600m²"],
      description: "上海市长宁区核心商务区"
    },
    {
      id: 30,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5.2元/m²/天 起",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["500m²", "800m²", "1000m²"],
      description: "上海市闵行区虹桥商务区"
    }
  ];

  // 计算当前页显示的数据
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const buildings = allBuildings.slice(startIndex, endIndex);

  // 页面导航函数
  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    navigate(`/search?${newParams.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* 面包屑导航 */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">首页</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">搜索结果</span>
          </div>
        </div>
      </div>

      {/* 筛选栏 */}
      <FilterBar />

      {/* 搜索结果主体 */}
      <div className="bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* 左侧列表 */}
            <div className="flex-1">
              {/* 排序和结果数量 */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b bg-card px-4 py-3">
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-primary font-medium">综合排序</a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">价格排序</a>
                </div>
                <p className="text-sm text-muted-foreground">已为您找到了2738条相关信息</p>
              </div>

          {/* 建筑列表 */}
          <div className="space-y-0">
            {buildings.map((building, index) => (
              <div key={building.id}>
                <div className="bg-card p-4 hover:bg-accent/5 transition-colors">
                  <div className="flex gap-4">
                    {/* 图片 */}
                    <div className="w-64 h-48 flex-shrink-0">
                      <a href={`#building-${building.id}`}>
                        <img
                          src={building.image}
                          alt={building.name}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 flex flex-col" style={{ width: '79%' }}>
                      {/* 标题和价格 */}
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-lg font-bold">
                          <a href={`#building-${building.id}`} className="hover:text-primary">
                            {building.name}
                          </a>
                        </h4>
                        <div className="text-right">
                          <span className="text-primary font-bold text-xl">{building.price.split('元')[0]}</span>
                          <span className="text-sm">元/m²/天 起</span>
                        </div>
                      </div>

                      {/* 地址信息 */}
                      <p className="text-sm text-muted-foreground py-0.5">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        {building.description}
                      </p>
                      <p className="text-sm text-muted-foreground py-0.5 mb-3">
                        距离地铁：{building.subway}站步行约5分钟
                      </p>

                      {/* 下方区域 - 可用面积和查看详情按钮 */}
                      <div className="flex mt-auto">
                        {/* 可用面积标签 */}
                        <div className="flex-1 overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', height: '68px' }}>
                          <div className="flex flex-wrap gap-2">
                            {building.tags.map((tag, tagIndex) => (
                              <a
                                key={tagIndex}
                                href="#"
                                className="px-3 py-1.5 text-sm border border-border rounded hover:border-primary hover:text-primary transition-colors inline-block"
                              >
                                {tag}
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        {/* 查看详情按钮 */}
                        <div className="ml-4">
                          <a
                            href={`#building-${building.id}`}
                            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm"
                          >
                            查看详情
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < buildings.length - 1 && (
                  <div className="border-b border-border"></div>
                )}
              </div>
            ))}
          </div>

              {/* 分页 */}
              <div className="mt-6 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {currentPage > 2 && (
                      <PaginationItem>
                        <PaginationLink onClick={() => goToPage(1)} className="cursor-pointer">
                          1
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    
                    {currentPage > 3 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationLink onClick={() => goToPage(currentPage - 1)} className="cursor-pointer">
                          {currentPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    
                    <PaginationItem>
                      <PaginationLink isActive>
                        {currentPage}
                      </PaginationLink>
                    </PaginationItem>
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationLink onClick={() => goToPage(currentPage + 1)} className="cursor-pointer">
                          {currentPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    
                    {currentPage < totalPages - 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                
                {currentPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => goToPage(totalPages)} className="cursor-pointer">
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* 右侧边栏 */}
            <div className="w-80 flex-shrink-0">
              <SearchSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

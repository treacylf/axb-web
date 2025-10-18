import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
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
      subway: "10号线",
      area: "500-1000m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["万科品牌", "大面积", "配套齐全"],
      description: "虹桥万科中心位于虹桥商务区南片区，提供高品质的办公环境，周边配套完善。"
    },
    {
      id: 2,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线/17号线",
      area: "200-800m²",
      price: "3-5元/天/㎡",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["国家会展中心", "交通枢纽", "性价比高"],
      description: "虹桥国际展汇毗邻国家会展中心，是商务办公的理想选择。"
    },
    {
      id: 3,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["近地铁", "停车便利", "品牌入驻"],
      description: "虹桥汇商务中心，位于虹桥核心区域，适合各类企业办公需求。"
    },
    {
      id: 4,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["SOHO品牌", "小面积", "灵活租期"],
      description: "SOHO天山广场提供灵活的办公空间，适合中小型企业和创业团队。"
    },
    {
      id: 5,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["地铁直达", "精装修", "配套完善"],
      description: "虹桥天地位于上海市长宁区，紧邻虹桥商务区核心，交通便利，周边配套齐全。"
    },
    {
      id: 6,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线/10号线",
      area: "300-1000m²",
      price: "6-8元/天/㎡",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["双地铁", "甲级写字楼", "景观好"],
      description: "虹桥世界中心是虹桥地区标志性建筑，享有优越的地理位置和一流的办公环境。"
    },
    {
      id: 7,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["品牌楼盘", "交通便利", "精装修"],
      description: "中骏广场二期位于长宁核心商务区，办公环境优越。"
    },
    {
      id: 8,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5-8元/天/㎡",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["阿里入驻", "大面积", "科技园区"],
      description: "虹桥阿里中心，高科技企业聚集地，提供现代化办公环境。"
    },
    {
      id: 9,
      name: "远东国际广场",
      district: "长宁",
      subway: "2号线/10号线",
      area: "200-600m²",
      price: "6-8元/天/㎡",
      image: "/src/assets/buildings/yuandong-plaza.jpg",
      tags: ["双地铁", "国际化", "甲级写字楼"],
      description: "远东国际广场位于虹桥核心区域，国际化办公环境。"
    },
    {
      id: 10,
      name: "维璟中心",
      district: "长宁",
      subway: "10号线",
      area: "300-800m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/weijing-center.jpg",
      tags: ["地铁直达", "精装修", "配套齐全"],
      description: "维璟中心紧邻地铁站，办公便利，配套设施完善。"
    },
    {
      id: 11,
      name: "尚嘉中心",
      district: "长宁",
      subway: "2号线",
      area: "200-500m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/shangjia-center.jpg",
      tags: ["商业配套", "精装修", "交通便利"],
      description: "尚嘉中心集办公、商业于一体，配套设施齐全。"
    },
    // 重复数据以模拟更多页面
    {
      id: 12,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1000m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["万科品牌", "大面积", "配套齐全"],
      description: "虹桥万科中心位于虹桥商务区南片区，提供高品质的办公环境。"
    },
    {
      id: 13,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线/17号线",
      area: "200-800m²",
      price: "3-5元/天/㎡",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["国家会展中心", "交通枢纽", "性价比高"],
      description: "虹桥国际展汇毗邻国家会展中心，是商务办公的理想选择。"
    },
    {
      id: 14,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["近地铁", "停车便利", "品牌入驻"],
      description: "虹桥汇商务中心，位于虹桥核心区域，适合各类企业办公需求。"
    },
    {
      id: 15,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["SOHO品牌", "小面积", "灵活租期"],
      description: "SOHO天山广场提供灵活的办公空间，适合中小型企业和创业团队。"
    },
    {
      id: 16,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["地铁直达", "精装修", "配套完善"],
      description: "虹桥天地位于上海市长宁区，紧邻虹桥商务区核心，交通便利。"
    },
    {
      id: 17,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线/10号线",
      area: "300-1000m²",
      price: "6-8元/天/㎡",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["双地铁", "甲级写字楼", "景观好"],
      description: "虹桥世界中心是虹桥地区标志性建筑，享有优越的地理位置。"
    },
    {
      id: 18,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["品牌楼盘", "交通便利", "精装修"],
      description: "中骏广场二期位于长宁核心商务区，办公环境优越。"
    },
    {
      id: 19,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5-8元/天/㎡",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["阿里入驻", "大面积", "科技园区"],
      description: "虹桥阿里中心，高科技企业聚集地，提供现代化办公环境。"
    },
    {
      id: 20,
      name: "远东国际广场",
      district: "长宁",
      subway: "2号线/10号线",
      area: "200-600m²",
      price: "6-8元/天/㎡",
      image: "/src/assets/buildings/yuandong-plaza.jpg",
      tags: ["双地铁", "国际化", "甲级写字楼"],
      description: "远东国际广场位于虹桥核心区域，国际化办公环境。"
    },
    {
      id: 21,
      name: "维璟中心",
      district: "长宁",
      subway: "10号线",
      area: "300-800m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/weijing-center.jpg",
      tags: ["地铁直达", "精装修", "配套齐全"],
      description: "维璟中心紧邻地铁站，办公便利，配套设施完善。"
    },
    {
      id: 22,
      name: "尚嘉中心",
      district: "长宁",
      subway: "2号线",
      area: "200-500m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/shangjia-center.jpg",
      tags: ["商业配套", "精装修", "交通便利"],
      description: "尚嘉中心集办公、商业于一体，配套设施齐全。"
    },
    {
      id: 23,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1000m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/vanke-center-real.jpg",
      tags: ["万科品牌", "大面积", "配套齐全"],
      description: "虹桥万科中心位于虹桥商务区南片区，提供高品质的办公环境。"
    },
    {
      id: 24,
      name: "虹桥国际展汇",
      district: "青浦",
      subway: "2号线/17号线",
      area: "200-800m²",
      price: "3-5元/天/㎡",
      image: "/src/assets/buildings/exhibition-hub-real.jpg",
      tags: ["国家会展中心", "交通枢纽", "性价比高"],
      description: "虹桥国际展汇毗邻国家会展中心，是商务办公的理想选择。"
    },
    {
      id: 25,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线",
      area: "100-300m²",
      price: "4-6元/天/㎡",
      image: "/src/assets/buildings/hongqiao-hui-real.jpg",
      tags: ["近地铁", "停车便利", "品牌入驻"],
      description: "虹桥汇商务中心，位于虹桥核心区域，适合各类企业办公需求。"
    },
    {
      id: 26,
      name: "SOHO天山广场",
      district: "长宁",
      subway: "2号线",
      area: "100-200m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/soho-tianshan-real.jpg",
      tags: ["SOHO品牌", "小面积", "灵活租期"],
      description: "SOHO天山广场提供灵活的办公空间，适合中小型企业和创业团队。"
    },
    {
      id: 27,
      name: "虹桥天地",
      district: "长宁",
      subway: "10号线",
      area: "200-500m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/hongqiao-tiandi-real.jpg",
      tags: ["地铁直达", "精装修", "配套完善"],
      description: "虹桥天地位于上海市长宁区，紧邻虹桥商务区核心，交通便利。"
    },
    {
      id: 28,
      name: "虹桥世界中心",
      district: "长宁",
      subway: "2号线/10号线",
      area: "300-1000m²",
      price: "6-8元/天/㎡",
      image: "/src/assets/buildings/world-center-real.jpg",
      tags: ["双地铁", "甲级写字楼", "景观好"],
      description: "虹桥世界中心是虹桥地区标志性建筑，享有优越的地理位置。"
    },
    {
      id: 29,
      name: "中骏广场二期",
      district: "长宁",
      subway: "2号线",
      area: "300-800m²",
      price: "5-7元/天/㎡",
      image: "/src/assets/buildings/zhongjun-plaza.png",
      tags: ["品牌楼盘", "交通便利", "精装修"],
      description: "中骏广场二期位于长宁核心商务区，办公环境优越。"
    },
    {
      id: 30,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "10号线",
      area: "500-1500m²",
      price: "5-8元/天/㎡",
      image: "/src/assets/buildings/ali-center.jpg",
      tags: ["阿里入驻", "大面积", "科技园区"],
      description: "虹桥阿里中心，高科技企业聚集地，提供现代化办公环境。"
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
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">首页</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">搜索结果</span>
            {query && (
              <>
                <span className="mx-2">/</span>
                <span className="text-foreground">"{query}"</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 筛选栏 */}
      <FilterBar />

      {/* 搜索结果 */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            找到 <span className="text-primary">{buildings.length}</span> 个结果
            {query && <span className="ml-2">- "{query}"</span>}
          </h1>
        </div>

        <div className="grid gap-6">
          {buildings.map((building) => (
            <Card key={building.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  {/* 图片 */}
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img
                      src={building.image}
                      alt={building.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* 信息 */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        {building.name}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {building.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {building.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {building.district}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {building.subway}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">面积：</span>
                        <span className="font-medium">{building.area}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-primary font-bold text-lg">
                          {building.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`tel:021-64202027`}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        立即咨询
                      </a>
                      <a
                        href={`#building-${building.id}`}
                        className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-sm"
                      >
                        查看详情
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 分页 */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {/* 第一页 */}
              {currentPage > 2 && (
                <PaginationItem>
                  <PaginationLink onClick={() => goToPage(1)} className="cursor-pointer">
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              
              {/* 省略号 */}
              {currentPage > 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              
              {/* 当前页前一页 */}
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationLink onClick={() => goToPage(currentPage - 1)} className="cursor-pointer">
                    {currentPage - 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              
              {/* 当前页 */}
              <PaginationItem>
                <PaginationLink isActive>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              
              {/* 当前页后一页 */}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationLink onClick={() => goToPage(currentPage + 1)} className="cursor-pointer">
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              
              {/* 省略号 */}
              {currentPage < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              
              {/* 最后一页 */}
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

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
import { SearchSidebar } from "@/components/SearchSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Phone, Building2, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildingData } from "@/data/buildingsData";
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
  businessArea?: string;
}

// 将buildingData转换为搜索列表格式
function convertBuildingDataToSearchFormat(): Building[] {
  return Object.values(buildingData).map(building => {
    // 从district中提取区域名称 (例如 "闵行 - 虹桥商务区" -> "闵行")
    const districtName = building.district.split(" - ")[0];
    // 提取商圈 (例如 "闵行 - 虹桥商务区" -> "虹桥商务区")
    const businessAreaName = building.district.split(" - ")[1] || "";
    
    // 从price中提取起始价格
    const startPrice = building.price.split("~")[0];
    
    // 从availableRooms生成tags
    const tags = building.availableRooms.map(room => room.area);
    
    return {
      id: building.id,
      name: building.name,
      district: districtName,
      subway: building.subway,
      area: building.availableArea,
      price: `${startPrice}元/m²/天 起`,
      image: building.images[0],
      tags: tags,
      description: building.address,
      businessArea: businessAreaName
    };
  });
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const query = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  
  const itemsPerPage = 6;

  // 模拟加载效果
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  // 使用共享的buildingData
  const allBuildings: Building[] = convertBuildingDataToSearchFormat();

  // 获取筛选参数
  const navId = searchParams.get("nav_id") || "0";
  const district = searchParams.get("district") || "";
  const subway = searchParams.get("subway") || "";
  const businessArea = searchParams.get("area") || ""; // 商圈 (aid)
  const size = searchParams.get("size") || ""; // 面积
  const price = searchParams.get("price") || "";

  // 地铁线路映射
  const subwayMapping: { [key: string]: string } = {
    "line1": "1号线",
    "line2": "2号线",
    "line3": "3号线",
    "line4": "4号线",
    "line5": "5号线",
    "line6": "6号线",
    "line7": "7号线",
    "line8": "8号线",
    "line9": "9号线",
    "line10": "10号线",
    "line11": "11号线",
    "line12": "12号线",
    "line13": "13号线",
    "line14": "14号线",
    "line15": "15号线",
    "line16": "16号线",
    "line17": "17号线",
    "line18": "18号线",
    "line19": "19号线",
    "line20": "20号线",
  };

  // 区域映射
  const districtMapping: { [key: string]: string } = {
    "pudong": "浦东",
    "huangpu": "黄浦",
    "jingan": "静安",
    "xuhui": "徐汇",
    "changning": "长宁",
    "putuo": "普陀",
    "minhang": "闵行",
    "qingpu": "青浦",
    "hongkou": "虹口",
    "yangpu": "杨浦",
    "jiading": "嘉定",
    "baoshan": "宝山",
    "songjiang": "松江",
    "fengxian": "奉贤",
    "jinshan": "金山",
  };

  // 商圈ID映射 - 匹配 FilterBar 中的定义
  const businessAreaMapping: { [key: string]: string[] } = {
    "99": ["虹桥商务区"],
    "100": ["七宝商务区"],
    "101": ["莘庄商务区"],
    "102": ["七莘路"],
    "103": ["龙柏", "虹桥镇"],
    "104": ["颛桥", "春申"],
    "105": ["华漕"],
    "106": ["南方商城"],
    "107": ["浦江镇"],
    "108": ["徐泾", "西虹桥"],
    "86": ["虹桥临空经济区"],
    "87": ["虹桥古北开发区"],
    "63": ["人民广场"],
    "91": ["长风商务区"],
    "48": ["陆家嘴"]
  };

  // 根据筛选条件过滤数据
  const filteredBuildings = allBuildings.filter((building) => {
    // 名称搜索
    if (query && !building.name.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    // 区域筛选 - 使用映射
    if (district) {
      const districtName = districtMapping[district] || district;
      if (building.district !== districtName) {
        return false;
      }
    }

    // 地铁筛选 - 使用映射
    if (subway) {
      const subwayName = subwayMapping[subway] || subway;
      if (!building.subway.includes(subwayName)) {
        return false;
      }
    }

    // 商圈筛选（根据 aid）
    if (businessArea && businessAreaMapping[businessArea]) {
      const keywords = businessAreaMapping[businessArea];
      const matchesBusinessArea = keywords.some(keyword => 
        building.businessArea?.includes(keyword) || 
        building.description.includes(keyword) ||
        building.name.includes(keyword) ||
        building.district.includes(keyword)
      );
      if (!matchesBusinessArea) {
        return false;
      }
    }

    // 面积筛选
    if (size) {
      const [minSize, maxSize] = size.split("-").map(s => parseInt(s));
      const [buildingMin, buildingMax] = building.area.split("-").map(a => parseInt(a));
      
      if (maxSize) {
        if (buildingMax < minSize || buildingMin > maxSize) {
          return false;
        }
      } else if (buildingMax < minSize) {
        return false;
      }
    }

    // 价格筛选
    if (price) {
      const [minPrice, maxPrice] = price.split("-").map(p => parseFloat(p));
      const buildingPrice = parseFloat(building.price);
      
      if (maxPrice) {
        if (buildingPrice < minPrice || buildingPrice > maxPrice) {
          return false;
        }
      } else if (buildingPrice < minPrice) {
        return false;
      }
    }

    return true;
  });

  // 分页处理
  const totalPages = Math.ceil(filteredBuildings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBuildings = filteredBuildings.slice(startIndex, endIndex);

  // 跳转到指定页
  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    navigate(`/search?${newParams.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gray-50">
        {/* 筛选栏 */}
        <FilterBar />

        <div className="container mx-auto px-4 py-6">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-primary">首页</a>
            <span>/</span>
            <span>搜索结果</span>
          </div>

          {/* 顶部导航标签 */}
          <Tabs value={navId} className="mb-6">
            <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 w-full justify-start">
              <TabsTrigger 
                value="0"
                onClick={() => navigate("/search?nav_id=0")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
              >
                租办公室
              </TabsTrigger>
              <TabsTrigger 
                value="1"
                onClick={() => navigate("/search?nav_id=1")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
              >
                写字楼
              </TabsTrigger>
              <TabsTrigger 
                value="2"
                onClick={() => navigate("/search?nav_id=2")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
              >
                创意园区
              </TabsTrigger>
              <TabsTrigger 
                value="3"
                onClick={() => navigate("/search?nav_id=3")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
              >
                共享办公
              </TabsTrigger>
              <TabsTrigger 
                value="4"
                onClick={() => navigate("/search?nav_id=4")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
              >
                总部独栋
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-6">
            {/* 主内容区 */}
            <div className="flex-1">
              {/* 排序和统计 */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-primary text-white rounded">
                    综合排序
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
                    价格排序
                  </button>
                </div>
                <div className="text-gray-600">
                  已为您找到了 <span className="text-primary font-semibold">{filteredBuildings.length}</span> 条相关信息
                </div>
              </div>

              {/* 楼盘列表 */}
              <div className="space-y-6">
                {isLoading ? (
                  // 加载骨架屏
                  Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          <Skeleton className="w-80 h-60 flex-shrink-0 rounded-none" />
                          <div className="flex-1 p-6 space-y-4">
                            <div className="flex justify-between">
                              <Skeleton className="h-8 w-48" />
                              <Skeleton className="h-8 w-32" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <div className="flex gap-2">
                              <Skeleton className="h-6 w-20" />
                              <Skeleton className="h-6 w-20" />
                              <Skeleton className="h-6 w-20" />
                            </div>
                            <div className="flex justify-between items-center pt-4">
                              <Skeleton className="h-10 w-32" />
                              <Skeleton className="h-10 w-24" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : filteredBuildings.length === 0 ? (
                  // 空状态
                  <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="w-32 h-32 mb-6 rounded-full bg-muted flex items-center justify-center">
                      <Search className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      未找到相关房源
                    </h3>
                    <p className="text-muted-foreground text-center mb-8 max-w-md">
                      抱歉，没有找到符合您筛选条件的房源。试试调整筛选条件或浏览其他类别吧。
                    </p>
                    <div className="flex gap-4">
                      <Button 
                        variant="default" 
                        onClick={() => navigate("/search?nav_id=0")}
                        className="gap-2"
                      >
                        <Home className="w-4 h-4" />
                        重置筛选
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => navigate("/")}
                      >
                        返回首页
                      </Button>
                    </div>
                  </div>
                ) : (
                  currentBuildings.map((building) => (
                  <Card key={building.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/building/${building.id}`}>
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* 楼盘图片 */}
                          <div className="w-80 h-60 flex-shrink-0">
                            <img
                              src={building.image}
                              alt={building.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* 楼盘信息 */}
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-2xl font-bold text-gray-900 hover:text-primary cursor-pointer">
                                {building.name}
                              </h3>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-primary">
                                  {building.price.split(" ")[0]}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {building.price.split(" ")[1] || ""}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3 mb-4">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{building.description}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Building2 className="w-4 h-4" />
                                <span>距离地铁：{building.subway.split(",")[0]}站步行约5分钟</span>
                              </div>
                            </div>

                            {/* 可租面积标签 */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {building.tags.slice(0, 5).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                              查看详情
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))
                )}
              </div>

              {/* 分页 */}
              {!isLoading && filteredBuildings.length > 0 && totalPages > 1 && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>

                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }

                        return (
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={() => goToPage(pageNum)}
                              isActive={currentPage === pageNum}
                              className="cursor-pointer"
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}

                      {totalPages > 5 && currentPage < totalPages - 2 && (
                        <PaginationItem>
                          <PaginationEllipsis />
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
              )}
            </div>

            {/* 侧边栏 - 只在大屏幕显示 */}
            <div className="hidden lg:block w-80">
              <SearchSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

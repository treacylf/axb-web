import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResponsiveNav } from "@/components/ResponsiveNav";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
import { MobileFilterDrawer } from "@/components/MobileFilterDrawer";
import { SearchSidebar } from "@/components/SearchSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Building2, Search, Home, ArrowRight, ChevronUp } from "lucide-react";
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
  type?: "office" | "building" | "creative" | "coworking" | "headquarters";
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
    
    // 根据ID范围推断房源类型（如果没有type字段）
    let type: "office" | "building" | "creative" | "coworking" | "headquarters" = building.type || "office";
    if (!building.type) {
      if (building.id >= 300 && building.id < 400) {
        type = "headquarters"; // 总部独栋
      } else if (building.id >= 200 && building.id < 300) {
        type = "creative"; // 创意园区
      } else if (building.name.includes("WeWork") || building.name.includes("优客工场") || building.name.includes("Distrii") || building.name.includes("UMON") || building.name.includes("雷格斯") || building.name.includes("氪空间") || building.name.includes("快易") || building.name.includes("德事") || building.name.includes("未至") || building.name.includes("寰图") || building.name.includes("大树下") || building.name.includes("艾客")) {
        type = "coworking"; // 共享办公
      } else if (building.availableArea && parseInt(building.availableArea.split("-")[0]) < 200) {
        type = "office"; // 小面积为租办公室
      } else {
        type = "building"; // 大面积为写字楼
      }
    }
    
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
      businessArea: businessAreaName,
      type: type
    };
  });
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("综合排序");
  const [showBackToTop, setShowBackToTop] = useState(false);
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

  // 监听滚动，显示/隐藏返回顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    // Tab类型筛选
    if (navId !== "0") { // 0 = 租办公室（显示所有）
      const typeMapping: { [key: string]: "office" | "building" | "creative" | "coworking" | "headquarters" } = {
        "1": "building",       // 写字楼
        "2": "creative",       // 创意园区
        "3": "coworking",      // 共享办公
        "4": "headquarters"    // 总部独栋
      };
      if (typeMapping[navId] && building.type !== typeMapping[navId]) {
        return false;
      }
    }

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

  // 根据排序方式对房源列表进行排序
  const sortedBuildings = [...filteredBuildings].sort((a, b) => {
    switch (sortBy) {
      case "价格排序":
        // 提取价格数字（例如 "3.5元/m²/天 起" -> 3.5）
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB; // 价格从低到高
      
      case "面积排序":
        // 提取面积范围的最小值（例如 "100-200" -> 100）
        const areaA = parseInt(a.area.split("-")[0]);
        const areaB = parseInt(b.area.split("-")[0]);
        return areaB - areaA; // 面积从大到小
      
      case "最新发布":
        // 按ID降序（假设ID越大越新）
        return b.id - a.id;
      
      case "综合排序":
      default:
        // 综合排序：考虑价格、面积、ID的综合权重
        const scoreA = parseFloat(a.price) * 0.3 + parseInt(a.area.split("-")[0]) * 0.3 + a.id * 0.4;
        const scoreB = parseFloat(b.price) * 0.3 + parseInt(b.area.split("-")[0]) * 0.3 + b.id * 0.4;
        return scoreB - scoreA;
    }
  });

  // 分页处理 - 使用排序后的数据
  const totalPages = Math.ceil(sortedBuildings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBuildings = sortedBuildings.slice(startIndex, endIndex);

  // 跳转到指定页
  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    navigate(`/search?${newParams.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNav />
      
      <div className="flex-1 bg-gray-50">
        {/* 根据设备类型显示对应的筛选器 */}
        {isMobile ? <MobileFilterDrawer /> : <FilterBar />}

        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-primary">首页</a>
            <span>/</span>
            <span>搜索结果</span>
          </div>

          {/* 顶部导航标签 */}
          <Tabs value={navId} className="mb-6">
            <div className="overflow-x-auto -mx-2 sm:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 w-max sm:w-full justify-start px-2 sm:px-0">
                <TabsTrigger 
                  value="0"
                  onClick={() => navigate("/search?nav_id=0")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
                >
                  租办公室
                </TabsTrigger>
                <TabsTrigger 
                  value="1"
                  onClick={() => navigate("/search?nav_id=1")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
                >
                  写字楼
                </TabsTrigger>
                <TabsTrigger 
                  value="2"
                  onClick={() => navigate("/search?nav_id=2")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
                >
                  创意园区
                </TabsTrigger>
                <TabsTrigger 
                  value="3"
                  onClick={() => navigate("/search?nav_id=3")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
                >
                  共享办公
                </TabsTrigger>
                <TabsTrigger 
                  value="4"
                  onClick={() => navigate("/search?nav_id=4")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
                >
                  总部独栋
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* 主内容区 */}
            <div className="flex-1 min-w-0">
              {/* 排序和统计 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
                {/* 移动端使用下拉菜单，桌面端使用按钮组 */}
                <div className="w-full sm:w-auto">
                  {/* 移动端下拉菜单 */}
                  <div className="sm:hidden">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择排序方式" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="综合排序">综合排序</SelectItem>
                        <SelectItem value="价格排序">价格排序</SelectItem>
                        <SelectItem value="面积排序">面积排序</SelectItem>
                        <SelectItem value="最新发布">最新发布</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* 桌面端按钮组 */}
                  <div className="hidden sm:flex gap-4">
                    <button 
                      onClick={() => setSortBy("综合排序")}
                      className={`px-4 py-2 rounded text-base whitespace-nowrap transition-colors ${
                        sortBy === "综合排序" 
                          ? "bg-primary text-white" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      综合排序
                    </button>
                    <button 
                      onClick={() => setSortBy("价格排序")}
                      className={`px-4 py-2 rounded text-base whitespace-nowrap transition-colors ${
                        sortBy === "价格排序" 
                          ? "bg-primary text-white" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      价格排序
                    </button>
                    <button 
                      onClick={() => setSortBy("面积排序")}
                      className={`px-4 py-2 rounded text-base whitespace-nowrap transition-colors ${
                        sortBy === "面积排序" 
                          ? "bg-primary text-white" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      面积排序
                    </button>
                    <button 
                      onClick={() => setSortBy("最新发布")}
                      className={`px-4 py-2 rounded text-base whitespace-nowrap transition-colors ${
                        sortBy === "最新发布" 
                          ? "bg-primary text-white" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      最新发布
                    </button>
                  </div>
                </div>
                
                <div className="text-sm sm:text-base text-gray-600 w-full sm:w-auto text-left sm:text-right">
                  已为您找到了 <span className="text-primary font-semibold">{sortedBuildings.length}</span> 条相关信息
                </div>
              </div>

              {/* 楼盘列表 */}
              <div className="space-y-6">
                {isLoading ? (
                  // 加载骨架屏
                  Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <Skeleton className="w-full sm:w-64 md:w-80 h-48 sm:h-52 md:h-60 flex-shrink-0 rounded-none" />
                          <div className="flex-1 min-w-0 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                            <div className="flex justify-between">
                              <Skeleton className="h-6 sm:h-8 w-32 sm:w-48" />
                              <Skeleton className="h-6 sm:h-8 w-24 sm:w-32" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <div className="flex gap-2">
                              <Skeleton className="h-6 w-16 sm:w-20" />
                              <Skeleton className="h-6 w-16 sm:w-20" />
                              <Skeleton className="h-6 w-16 sm:w-20" />
                            </div>
                            <div className="flex justify-between items-center pt-4">
                              <Skeleton className="h-10 w-28 sm:w-32" />
                              <Skeleton className="h-10 w-20 sm:w-24" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : sortedBuildings.length === 0 ? (
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
                        <div className="flex flex-col sm:flex-row">
                          {/* 楼盘图片 */}
                          <div className="w-full sm:w-64 md:w-80 h-48 sm:h-52 md:h-60 flex-shrink-0">
                            <OptimizedImage
                              src={building.image}
                              alt={building.name}
                              aspectRatio="h-48 sm:h-52 md:h-60"
                            />
                          </div>

                          {/* 楼盘信息 */}
                          <div className="flex-1 min-w-0 p-3 sm:p-4 md:p-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 md:mb-4">
                              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 hover:text-primary cursor-pointer mb-1 sm:mb-0 truncate pr-2">
                                {building.name}
                              </h3>
                              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                                {building.price}
                              </span>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-2 sm:mb-3 md:mb-4">
                              <div className="flex items-start text-xs sm:text-sm md:text-base text-gray-600">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1 break-all">{building.description}</span>
                              </div>
                              <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-600">
                                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">地铁：{building.subway}</span>
                              </div>
                              <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-600">
                                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">面积：{building.area}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                              {building.tags.slice(0, 3).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex justify-end items-center pt-2 sm:pt-3 md:pt-4 border-t border-gray-200">
                              <Button variant="default" size="sm" className="w-full sm:w-auto text-xs sm:text-sm md:text-base h-8 sm:h-9">
                                查看详情
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                              </Button>
                            </div>
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
                <div className="mt-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <Pagination>
                    <PaginationContent className="flex-nowrap">
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

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-fade-in hover-scale"
          aria-label="返回顶部"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

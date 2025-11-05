import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
import { SearchSidebar } from "@/components/SearchSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Building2 } from "lucide-react";
import vankeCenter from "@/assets/buildings/vanke-center-real.jpg";
import exhibitionHub from "@/assets/buildings/exhibition-hub-real.jpg";
import hongqiaoHui from "@/assets/buildings/hongqiao-hui-real.jpg";
import sohoTianshan from "@/assets/buildings/soho-tianshan-real.jpg";
import hongqiaoTiandi from "@/assets/buildings/hongqiao-tiandi-real.jpg";
import worldCenter from "@/assets/buildings/world-center-real.jpg";
import zhongjunPlaza from "@/assets/buildings/zhongjun-plaza.png";
import aliCenter from "@/assets/buildings/ali-center.jpg";
import yuandongPlaza from "@/assets/buildings/yuandong-plaza.jpg";
import weijingCenter from "@/assets/buildings/weijing-center.jpg";
import shangjiaCenter from "@/assets/buildings/shangjia-center.jpg";
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

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  
  const itemsPerPage = 6;

  // 真实数据 - 参考 chaobanwang.com 网站的闵行区数据
  const allBuildings: Building[] = [
    {
      id: 1,
      name: "虹桥万科中心",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "198-2352m²",
      price: "4.3元/m²/天 起",
      image: vankeCenter,
      tags: ["198m²", "350m²", "456m²", "600m²", "820m²", "1053m²", "2352m²"],
      description: "上海市闵行区申长路988弄",
      businessArea: "虹桥商务区"
    },
    {
      id: 2,
      name: "虹桥国际展汇",
      district: "闵行",
      subway: "2号线,10号线,虹桥2号航站楼",
      area: "188-1853m²",
      price: "2.5元/m²/天 起",
      image: exhibitionHub,
      tags: ["188m²", "300m²", "450m²", "642m²", "850m²", "980m²", "1350m²", "1853m²"],
      description: "上海市闵行区申昆路2377号",
      businessArea: "虹桥商务区"
    },
    {
      id: 3,
      name: "虹桥天地",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "189-2200m²",
      price: "4.5元/m²/天 起",
      image: hongqiaoTiandi,
      tags: ["189m²", "325m²", "421m²", "589m²", "720m²", "872m²", "1307m²", "1520m²", "1763m²", "2200m²"],
      description: "上海市闵行区苏虹路33号",
      businessArea: "虹桥商务区"
    },
    {
      id: 4,
      name: "中骏广场（独栋）",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "3400-5600m²",
      price: "5.0元/m²/天 起",
      image: zhongjunPlaza,
      tags: ["3400m²", "5600m²"],
      description: "上海市闵行区申长路1588弄26号",
      businessArea: "虹桥商务区"
    },
    {
      id: 5,
      name: "虹桥正荣中心（独栋）",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "1000-3500m²",
      price: "4.5元/m²/天 起",
      image: vankeCenter,
      tags: ["1000m²", "1500m²", "2500m²", "3500m²"],
      description: "上海市徐汇区申虹路666弄",
      businessArea: "虹桥商务区"
    },
    {
      id: 6,
      name: "力波REEB1987（独栋）",
      district: "闵行",
      subway: "1号线,莲花路",
      area: "1600-3600m²",
      price: "5.5元/m²/天 起",
      image: exhibitionHub,
      tags: ["1600m²", "1980m²", "3000m²", "3600m²"],
      description: "上海市闵行区益梅路91号",
      businessArea: "莘庄商务区"
    },
    {
      id: 7,
      name: "Distrii办伴（冠捷大厦）",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "1-16人间",
      price: "1400.0元/月 起",
      image: aliCenter,
      tags: ["1人间", "2人间", "4人间", "5人间", "6人间", "8人间", "10人间", "12人间", "16人间"],
      description: "上海市闵行区申长路668号",
      businessArea: "虹桥商务区"
    },
    {
      id: 8,
      name: "Umon优盟（虹桥丽宝广场）",
      district: "闵行",
      subway: "2号线,10号线,虹桥火车站",
      area: "1-16人间",
      price: "1500.0元/月 起",
      image: yuandongPlaza,
      tags: ["1人间", "2人间", "4人间", "6人间", "8人间", "10人间", "11人间", "13人间", "16人间"],
      description: "上海市闵行区申滨路36号丽宝广场4号楼3层",
      businessArea: "虹桥商务区"
    },
    {
      id: 9,
      name: "WeWork（虹桥天地）",
      district: "闵行",
      subway: "2号线,10号线,17号线,虹桥火车站",
      area: "1-16人间",
      price: "1800.0元/月 起",
      image: weijingCenter,
      tags: ["1人间", "2人间", "3人间", "5人间", "6人间", "8人间", "10人间", "12人间", "16人间"],
      description: "上海市闵行区申长路688号",
      businessArea: "虹桥商务区"
    },
    {
      id: 10,
      name: "虹桥世界中心",
      district: "闵行",
      subway: "10号线,龙溪路",
      area: "300-1500m²",
      price: "4.5元/m²/天 起",
      image: worldCenter,
      tags: ["300m²", "500m²", "800m²", "1000m²", "1500m²"],
      description: "上海市闵行区虹翔三路88号",
      businessArea: "虹桥商务区"
    },
    {
      id: 11,
      name: "虹桥阿里中心",
      district: "闵行",
      subway: "2号线,淞虹路",
      area: "500-1500m²",
      price: "4.2元/m²/天 起",
      image: aliCenter,
      tags: ["500m²", "800m²", "1000m²", "1200m²", "1500m²"],
      description: "上海市闵行区申昆路1899号",
      businessArea: "虹桥商务区"
    },
    {
      id: 12,
      name: "远东国际广场",
      district: "闵行",
      subway: "2号线,10号线,虹桥火车站",
      area: "200-780m²",
      price: "4.0元/m²/天 起",
      image: yuandongPlaza,
      tags: ["200m²", "350m²", "480m²", "600m²", "780m²"],
      description: "上海市闵行区虹桥核心区域",
      businessArea: "虹桥商务区"
    },
    {
      id: 13,
      name: "维璟中心",
      district: "闵行",
      subway: "10号线,龙溪路",
      area: "300-1000m²",
      price: "4.3元/m²/天 起",
      image: weijingCenter,
      tags: ["300m²", "450m²", "600m²", "800m²", "1000m²"],
      description: "上海市闵行区申长路",
      businessArea: "虹桥商务区"
    },
    {
      id: 14,
      name: "尚嘉中心",
      district: "闵行",
      subway: "2号线,娄山关路",
      area: "200-600m²",
      price: "5.2元/m²/天 起",
      image: shangjiaCenter,
      tags: ["200m²", "300m²", "400m²", "500m²", "600m²"],
      description: "上海市闵行区天山路商圈",
      businessArea: "虹桥商务区"
    },
    {
      id: 15,
      name: "虹桥汇",
      district: "闵行",
      subway: "2号线,淞虹路",
      area: "120-450m²",
      price: "4.5元/m²/天 起",
      image: hongqiaoHui,
      tags: ["120m²", "200m²", "280m²", "350m²", "450m²"],
      description: "上海市闵行区虹桥商务区核心",
      businessArea: "虹桥商务区"
    },
    {
      id: 16,
      name: "SOHO天山广场",
      district: "闵行",
      subway: "2号线,娄山关路",
      area: "100-280m²",
      price: "5.5元/m²/天 起",
      image: sohoTianshan,
      tags: ["100m²", "150m²", "180m²", "220m²", "280m²"],
      description: "上海市闵行区天山路",
      businessArea: "虹桥商务区"
    },
    {
      id: 17,
      name: "虹桥BU中心（独栋）",
      district: "闵行",
      subway: "2号线,10号线,虹桥火车站",
      area: "2000-5000m²",
      price: "4.9元/m²/天 起",
      image: hongqiaoHui,
      tags: ["2000m²", "3000m²", "4000m²", "5000m²"],
      description: "上海市闵行区虹桥商务区核心",
      businessArea: "虹桥商务区"
    },
    {
      id: 18,
      name: "MAX科技园（独栋）",
      district: "闵行",
      subway: "5号线,莘庄",
      area: "1500-4000m²",
      price: "4.5元/m²/天 起",
      image: sohoTianshan,
      tags: ["1500m²", "2000m²", "2800m²", "3500m²", "4000m²"],
      description: "上海市闵行区莘庄工业区",
      businessArea: "莘庄商务区"
    },
    {
      id: 19,
      name: "平金中心（独栋）",
      district: "闵行",
      subway: "9号线,七宝",
      area: "2000-6000m²",
      price: "4.4元/m²/天 起",
      image: hongqiaoTiandi,
      tags: ["2000m²", "3000m²", "4500m²", "6000m²"],
      description: "上海市闵行区七莘路",
      businessArea: "七莘路"
    },
    {
      id: 20,
      name: "容大中心（独栋）",
      district: "闵行",
      subway: "10号线,龙溪路",
      area: "1800-5000m²",
      price: "4.7元/m²/天 起",
      image: worldCenter,
      tags: ["1800m²", "2500m²", "3500m²", "4500m²", "5000m²"],
      description: "上海市闵行区虹桥核心商圈",
      businessArea: "虹桥商务区"
    },
    {
      id: 21,
      name: "田林坊（独栋）",
      district: "闵行",
      subway: "9号线,桂林路",
      area: "1200-3500m²",
      price: "5.0元/m²/天 起",
      image: zhongjunPlaza,
      tags: ["1200m²", "1800m²", "2500m²", "3000m²", "3500m²"],
      description: "上海市闵行区田林路",
      businessArea: "七莘路"
    },
  ];

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
          <div className="flex gap-4 mb-6 border-b">
            <a
              href="/search?nav_id=0"
              className={`px-4 py-2 ${navId === "0" ? "border-b-2 border-primary text-primary" : "text-gray-600"}`}
            >
              租办公室
            </a>
            <a
              href="/search?nav_id=1"
              className={`px-4 py-2 ${navId === "1" ? "border-b-2 border-primary text-primary" : "text-gray-600"}`}
            >
              写字楼
            </a>
            <a
              href="/search?nav_id=2"
              className={`px-4 py-2 ${navId === "2" ? "border-b-2 border-primary text-primary" : "text-gray-600"}`}
            >
              创意园区
            </a>
            <a
              href="/search?nav_id=3"
              className={`px-4 py-2 ${navId === "3" ? "border-b-2 border-primary text-primary" : "text-gray-600"}`}
            >
              共享办公
            </a>
            <a
              href="/search?nav_id=4"
              className={`px-4 py-2 ${navId === "4" ? "border-b-2 border-primary text-primary" : "text-gray-600"}`}
            >
              总部独栋
            </a>
          </div>

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
                {currentBuildings.map((building) => (
                  <Card key={building.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                            {building.tags.map((tag, index) => (
                              <a
                                key={index}
                                href={`/building/${building.id}`}
                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm"
                              >
                                {tag}
                              </a>
                            ))}
                          </div>

                          <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                            查看详情
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 分页 */}
              {totalPages > 1 && (
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

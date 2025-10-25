import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, QrCode, Building2, Layers, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import vankeCenter from "@/assets/buildings/vanke-center-real.jpg";
import exhibitionHub from "@/assets/buildings/exhibition-hub-real.jpg";
import hongqiaoHui from "@/assets/buildings/hongqiao-hui-real.jpg";
import sohoTianshan from "@/assets/buildings/soho-tianshan-real.jpg";
import hongqiaoTiandi from "@/assets/buildings/hongqiao-tiandi-real.jpg";
import worldCenter from "@/assets/buildings/world-center-real.jpg";

interface BuildingData {
  id: number;
  name: string;
  district: string;
  subway: string;
  address: string;
  price: string;
  priceRange: string;
  totalUnits: number;
  availableArea: string;
  images: string[];
  availableRooms: Array<{
    area: string;
    price: string;
    decoration: string;
    floor: string;
  }>;
  buildingInfo: {
    floorHeight: string;
    totalFloors: string;
    elevators: string;
    efficiency: string;
    propertyCompany: string;
    developer: string;
  };
  description: string;
  nearbyBuildings: Array<{
    name: string;
    price: string;
    image: string;
    link: string;
  }>;
}

export default function BuildingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAreaFilter, setSelectedAreaFilter] = useState("房源详情");

  // 模拟建筑数据 - 基于虹桥国际展汇
  const buildingData: Record<string, BuildingData> = {
    "2": {
      id: 2,
      name: "虹桥国际展汇",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,虹桥2号航站楼站步行约20分钟",
      address: "上海市闵行区申昆路2377号",
      price: "2.5~3.3",
      priceRange: "元/m²/天",
      totalUnits: 8,
      availableArea: "188 - 1853m²",
      images: [
        exhibitionHub,
        exhibitionHub,
        exhibitionHub,
        exhibitionHub,
        exhibitionHub,
        exhibitionHub,
        exhibitionHub
      ],
      availableRooms: [
        { area: "188m²", price: "2.5元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "300m²", price: "2.7元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "450m²", price: "3.3元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "642m²", price: "3.2元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "850m²", price: "2.9元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "980m²", price: "3.1元/m²/天", decoration: "标准交付", floor: "高区" },
        { area: "1350m²", price: "2.8元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "1853m²", price: "2.6元/m²/天", decoration: "标准交付", floor: "高区" }
      ],
      buildingInfo: {
        floorHeight: "4.5m",
        totalFloors: "11层",
        elevators: "客梯4部，消防梯1部，转换梯1部",
        efficiency: "85%",
        propertyCompany: "青岛雅园物业",
        developer: "新地集团"
      },
      description: "虹桥国际展汇的布局，虹桥国际展汇(PortMix)傲立虹桥商务区北区，项目总建筑面积达31万平方米，与国家会展中心遥相呼应，彼此互为补充，协力为全球企业机构提供优质的展示平台和对话窗口。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥汇", price: "4.5元/m²/天", image: hongqiaoHui, link: "/building/3" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
    "1": {
      id: 1,
      name: "虹桥万科中心",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,17号线,虹桥火车站步行约5分钟",
      address: "上海市闵行区申长路988弄",
      price: "4.3~5.2",
      priceRange: "元/m²/天",
      totalUnits: 7,
      availableArea: "198 - 2352m²",
      images: [
        vankeCenter,
        vankeCenter,
        vankeCenter,
        vankeCenter,
        vankeCenter
      ],
      availableRooms: [
        { area: "198m²", price: "4.3元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "350m²", price: "4.5元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "456m²", price: "4.8元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "600m²", price: "4.6元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "820m²", price: "4.9元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "1053m²", price: "5.0元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "2352m²", price: "5.2元/m²/天", decoration: "毛坯", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.2m",
        totalFloors: "15层",
        elevators: "客梯6部，货梯2部",
        efficiency: "80%",
        propertyCompany: "万科物业",
        developer: "万科集团"
      },
      description: "虹桥万科中心位于虹桥商务区核心位置，紧邻虹桥火车站和虹桥机场，交通便利，是企业总部的理想选择。项目配套设施完善，周边商业、餐饮、酒店等配套一应俱全。",
      nearbyBuildings: [
        { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
        { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
        { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
      ]
    }
  };

  const currentBuilding = buildingData[id || "2"] || buildingData["2"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const areaFilters = [
    "房源详情",
    "100m²以下",
    "100-200m²",
    "200-300m²",
    "300-500m²",
    "500-1000m²",
    "1000m²以上"
  ];

  const filteredRooms = selectedAreaFilter === "房源详情" 
    ? currentBuilding.availableRooms 
    : currentBuilding.availableRooms.filter(room => {
        const area = parseInt(room.area);
        switch(selectedAreaFilter) {
          case "100m²以下": return area < 100;
          case "100-200m²": return area >= 100 && area < 200;
          case "200-300m²": return area >= 200 && area < 300;
          case "300-500m²": return area >= 300 && area < 500;
          case "500-1000m²": return area >= 500 && area < 1000;
          case "1000m²以上": return area >= 1000;
          default: return true;
        }
      });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 面包屑导航 */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">首页</a>
            <span className="mx-2">&gt;</span>
            <a href="/search?nav_id=1" className="hover:text-primary">上海 写字楼出租</a>
            <span className="mx-2">&gt;</span>
            <a href="/search?nav_id=1" className="hover:text-primary">{currentBuilding.district.split(' - ')[0]} 写字楼</a>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">{currentBuilding.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 建筑名称 */}
            <h1 className="text-3xl font-bold text-foreground">{currentBuilding.name}</h1>

            {/* 图片轮播 */}
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={currentBuilding.images[currentImageIndex]}
                  alt={currentBuilding.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {currentBuilding.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-colors ${
                      idx === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt={`${currentBuilding.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* 可出租面积及价格 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{currentBuilding.name}可出租面积及价格</h2>
                
                {/* 面积筛选 */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {areaFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={selectedAreaFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedAreaFilter(filter)}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>

                {/* 房源列表 */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">照片</th>
                        <th className="text-left py-3 px-4 font-medium">面积</th>
                        <th className="text-left py-3 px-4 font-medium">单价</th>
                        <th className="text-left py-3 px-4 font-medium">装修</th>
                        <th className="text-left py-3 px-4 font-medium">楼层</th>
                        <th className="text-left py-3 px-4 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRooms.map((room, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="w-20 h-16 rounded overflow-hidden">
                              <img src={currentBuilding.images[0]} alt="房源" className="w-full h-full object-cover" />
                            </div>
                          </td>
                          <td className="py-3 px-4">{room.area}</td>
                          <td className="py-3 px-4 text-primary font-medium">{room.price}</td>
                          <td className="py-3 px-4">{room.decoration}</td>
                          <td className="py-3 px-4">{room.floor}</td>
                          <td className="py-3 px-4">
                            <Button variant="default" size="sm">查看详情</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* 楼盘介绍 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{currentBuilding.name}楼盘介绍</h2>
                <p className="text-muted-foreground leading-relaxed">{currentBuilding.description}</p>
              </CardContent>
            </Card>

            {/* 楼盘参数 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{currentBuilding.name}楼盘参数</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">层高</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.floorHeight}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">层数</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.totalFloors}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">电梯</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.elevators}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">得房率</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.efficiency}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">物业公司</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.propertyCompany}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">开发商</p>
                    <p className="font-medium">{currentBuilding.buildingInfo.developer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 周边楼盘 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">同区域楼盘</h2>
                <div className="grid grid-cols-3 gap-4">
                  {currentBuilding.nearbyBuildings.map((building, idx) => (
                    <a
                      key={idx}
                      href={building.link}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-video overflow-hidden rounded-lg mb-2">
                        <img
                          src={building.image}
                          alt={building.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="font-medium group-hover:text-primary">{building.name}</p>
                      <p className="text-sm text-primary">{building.price}</p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧信息栏 */}
          <div className="space-y-4">
            {/* 价格信息卡片 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-1">{currentBuilding.name}</h2>
                <div className="text-3xl font-bold text-primary mb-4">
                  {currentBuilding.price}
                  <span className="text-base font-normal text-muted-foreground ml-1">
                    {currentBuilding.priceRange}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{currentBuilding.totalUnits}个</p>
                    <p className="text-xs text-muted-foreground">在租房源</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{currentBuilding.availableArea}</p>
                    <p className="text-xs text-muted-foreground">可租面积</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">地址：{currentBuilding.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm">距离地铁：{currentBuilding.subway}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-muted-foreground" />
                  </div>
                </div>

                <Button className="w-full mt-4" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  咨询电话 021-64202027
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

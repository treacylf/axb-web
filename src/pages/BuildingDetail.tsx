import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, QrCode, Building2, Layers, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { buildingData, type BuildingData } from "@/data/buildingsData";
import wxCode from "@/assets/wx_code.png";
import { BuildingLocationMap } from "@/components/BuildingLocationMap";

export default function BuildingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAreaFilter, setSelectedAreaFilter] = useState("房源详情");

  const currentBuilding = buildingData[id || "1"] || buildingData["1"];
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

            {/* 地图 */}
            <BuildingLocationMap
              buildingName={currentBuilding.name}
              address={currentBuilding.address}
              subway={currentBuilding.subway}
            />

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
                  <img src={wxCode} alt="微信咨询二维码" className="w-32 h-32 rounded-lg" />
                </div>

                <Button className="w-full mt-4" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  咨询电话 16651188000
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

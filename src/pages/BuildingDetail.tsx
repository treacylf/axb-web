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
import show800 from "@/assets/creative/800show.jpg";
import anken from "@/assets/creative/anken.jpg";
import bridge8 from "@/assets/creative/bridge8.jpg";
import hongqiaoBu from "@/assets/headquarters/hongqiao-bu.jpg";
import liboReeb from "@/assets/headquarters/libo-reeb.jpg";
import tianlinFang from "@/assets/headquarters/tianlin-fang.jpg";
import zhongjunPlaza from "@/assets/headquarters/zhongjun-plaza.jpg";
import hongqiaoZhengrong from "@/assets/headquarters/hongqiao-zhengrong.jpg";
import maxTech from "@/assets/headquarters/max-tech.jpg";
import pingjinCenter from "@/assets/headquarters/pingjin-center.jpg";
import rongdaCenter from "@/assets/headquarters/rongda-center.jpg";

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

  // 建筑数据 - 基于从网站爬取的真实数据
  const buildingData: Record<string, BuildingData> = {
    "1": {
      id: 1,
      name: "虹桥万科中心",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,17号线,虹桥火车站站步行约5分钟",
      address: "上海市闵行区申长路988弄",
      price: "4.3~5.0",
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
        { area: "198m²", price: "4.7元/m²/天", decoration: "标准交付", floor: "高区" },
        { area: "350m²", price: "5.0元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "456m²", price: "4.6元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "600m²", price: "4.5元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "820m²", price: "4.3元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "1053m²", price: "4.8元/m²/天", decoration: "标准交付", floor: "高区" },
        { area: "2352m²", price: "5.0元/m²/天", decoration: "精装修", floor: "高区" }
      ],
      buildingInfo: {
        floorHeight: "3m",
        totalFloors: "10层",
        elevators: "客梯4部，货梯1部",
        efficiency: "70%",
        propertyCompany: "上海万科物业服务有限公司",
        developer: "万科企业股份有限公司"
      },
      description: "虹桥万科中心，是万科集团在上海的首个商业综合体项目，更是集超甲级现代商务办公楼、商业、文娱、教育为一体的生态能量办公乐园。地处虹桥商务区核心，接壤虹桥交通枢纽，联动长三角城市群。总占地面积约32,000m2，总建筑面积约197,000m2，其中办公建筑面积约98,500m2，商业建筑面积约34,000m2。虹桥万科中心由七栋钻石型建筑及围合式下沉广场组成，建筑外观如宝石般通透独特，花园般的景观设计别具一格。全项目获LEED GOLD及国家绿色三星认证，国际设计团队倾心打造高品质绿色商务空间。",
      nearbyBuildings: [
        { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
        { name: "虹桥汇", price: "4.5元/m²/天", image: hongqiaoHui, link: "/building/3" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
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
    "3": {
      id: 3,
      name: "虹桥嘉汇",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,17号线,虹桥火车站站步行约15分钟",
      address: "上海市闵行区申虹路928弄",
      price: "2.6~2.8",
      priceRange: "元/m²/天",
      totalUnits: 8,
      availableArea: "188 - 1560m²",
      images: [
        hongqiaoHui,
        hongqiaoHui,
        hongqiaoHui,
        hongqiaoHui,
        hongqiaoHui
      ],
      availableRooms: [
        { area: "188m²", price: "2.8元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "260m²", price: "2.6元/m²/天", decoration: "标准交付", floor: "高区" },
        { area: "400m²", price: "2.6元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "520m²", price: "2.7元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "620m²", price: "2.7元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "880m²", price: "2.6元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "1250m²", price: "2.6元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "1560m²", price: "2.7元/m²/天", decoration: "标准交付", floor: "中区" }
      ],
      buildingInfo: {
        floorHeight: "2.9m",
        totalFloors: "8层",
        elevators: "客梯2部，货梯1部",
        efficiency: "70%",
        propertyCompany: "上海瑞创物业管理有限公司",
        developer: "瑞安集团"
      },
      description: "IBP三期项目位于虹桥商务区核心区北片区８＃地块，地块北至淮虹路，西至申虹路，南至润虹路，东至申贵路，土地面积43941平方米，为商住办用地。项目预计于2017年建成，建成后项目将涵盖单层面积约1500—1900平方米的总部型办公、单套面积200—400平方米的小面积办公及主力户型为75—95平方米的全装修精致住宅，此外，地块配还建有各类社区型配套商业。IBP三期项目以绿色环保、动感阳光为设计理念，全方位地为客户实现商务生活所需。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
        { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
      ]
    },
    "4": {
      id: 4,
      name: "SOHO天山广场",
      district: "长宁 - 天山路",
      subway: "2号线,娄山关路站步行约8分钟",
      address: "上海市长宁区天山路",
      price: "5.0~6.5",
      priceRange: "元/m²/天",
      totalUnits: 5,
      availableArea: "100 - 500m²",
      images: [
        sohoTianshan,
        sohoTianshan,
        sohoTianshan,
        sohoTianshan
      ],
      availableRooms: [
        { area: "100m²", price: "5.8元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "150m²", price: "5.5元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "180m²", price: "6.0元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "220m²", price: "5.2元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "350m²", price: "6.5元/m²/天", decoration: "精装修", floor: "高区" }
      ],
      buildingInfo: {
        floorHeight: "3.5m",
        totalFloors: "18层",
        elevators: "客梯8部，货梯2部",
        efficiency: "75%",
        propertyCompany: "SOHO中国",
        developer: "SOHO中国"
      },
      description: "SOHO天山广场位于长宁区天山路商圈核心位置，是SOHO中国在上海的标志性项目之一。项目采用现代化设计理念，配备智能化办公系统，为企业提供高品质的办公环境。周边商业配套完善，交通便利。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
    "5": {
      id: 5,
      name: "虹桥天地",
      district: "长宁 - 虹桥商务区",
      subway: "10号线,伊犁路站步行约3分钟",
      address: "上海市长宁区虹桥商务区",
      price: "5.0~6.0",
      priceRange: "元/m²/天",
      totalUnits: 6,
      availableArea: "200 - 800m²",
      images: [
        hongqiaoTiandi,
        hongqiaoTiandi,
        hongqiaoTiandi,
        hongqiaoTiandi
      ],
      availableRooms: [
        { area: "200m²", price: "5.5元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "300m²", price: "5.3元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "400m²", price: "5.8元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "500m²", price: "5.2元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "650m²", price: "6.0元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "800m²", price: "5.6元/m²/天", decoration: "标准交付", floor: "低区" }
      ],
      buildingInfo: {
        floorHeight: "3.8m",
        totalFloors: "12层",
        elevators: "客梯6部，货梯2部",
        efficiency: "78%",
        propertyCompany: "瑞安物业",
        developer: "瑞安集团"
      },
      description: "虹桥天地位于虹桥商务区核心位置，是瑞安集团在上海的高端商务项目。项目结合商业、办公、休闲于一体，为企业提供全方位的商务服务。周边配套设施完善，交通便利，是企业入驻虹桥的理想选择。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
        { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
      ]
    },
    "6": {
      id: 6,
      name: "虹桥世界中心",
      district: "长宁 - 虹桥商务区",
      subway: "2号线,10号线,虹桥火车站步行约10分钟",
      address: "上海市长宁区虹桥核心区域",
      price: "6.0~7.5",
      priceRange: "元/m²/天",
      totalUnits: 8,
      availableArea: "300 - 2000m²",
      images: [
        worldCenter,
        worldCenter,
        worldCenter,
        worldCenter,
        worldCenter
      ],
      availableRooms: [
        { area: "300m²", price: "6.5元/m²/天", decoration: "精装修", floor: "中区" },
        { area: "500m²", price: "6.8元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "800m²", price: "6.2元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "1000m²", price: "7.0元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "1200m²", price: "6.5元/m²/天", decoration: "标准交付", floor: "中区" },
        { area: "1500m²", price: "7.2元/m²/天", decoration: "精装修", floor: "高区" },
        { area: "1800m²", price: "6.8元/m²/天", decoration: "标准交付", floor: "低区" },
        { area: "2000m²", price: "7.5元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "20层",
        elevators: "客梯10部，货梯3部",
        efficiency: "82%",
        propertyCompany: "世邦魏理仕",
        developer: "华润置地"
      },
      description: "虹桥世界中心位于虹桥商务区黄金地段，是区域内的地标性建筑。项目采用国际5A级标准打造，配备先进的智能化系统和完善的商务配套设施。紧邻虹桥交通枢纽，是跨国企业和大型企业总部的首选办公地。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
        { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
      ]
    },
    "201": {
      id: 201,
      name: "800秀创意园",
      district: "静安 - 曹家渡",
      subway: "2号线,7号线,静安寺站步行约8分钟",
      address: "上海市静安区常德路800号",
      price: "3.0~4.5",
      priceRange: "元/m²/天",
      totalUnits: 12,
      availableArea: "100 - 1200m²",
      images: [
        show800,
        show800,
        show800,
        show800
      ],
      availableRooms: [
        { area: "100m²", price: "3.5元/m²/天", decoration: "精装修", floor: "3F" },
        { area: "150m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "4F" },
        { area: "200m²", price: "3.8元/m²/天", decoration: "精装修", floor: "5F" },
        { area: "300m²", price: "3.2元/m²/天", decoration: "标准交付", floor: "6F" },
        { area: "450m²", price: "4.0元/m²/天", decoration: "精装修", floor: "7F" },
        { area: "600m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "8F" },
        { area: "800m²", price: "4.2元/m²/天", decoration: "精装修", floor: "9F" },
        { area: "1000m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "10F" },
        { area: "1200m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.2m",
        totalFloors: "12层",
        elevators: "客梯3部，货梯1部",
        efficiency: "75%",
        propertyCompany: "800秀物业",
        developer: "上海静安置业"
      },
      description: "800秀创意园位于静安区核心地段，是由老工业厂房改造而成的创意产业园区。园区保留了工业建筑的历史特色，融入现代设计元素，打造独特的办公环境。适合文化创意、设计、传媒等行业企业入驻。周边商业配套完善，交通便利。",
      nearbyBuildings: [
        { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
        { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
        { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
      ]
    },
    "202": {
      id: 202,
      name: "安垦汇智创意园",
      district: "静安 - 大宁",
      subway: "1号线,上海马戏城站步行约10分钟",
      address: "上海市静安区共和新路3550弄",
      price: "2.8~4.0",
      priceRange: "元/m²/天",
      totalUnits: 15,
      availableArea: "80 - 1500m²",
      images: [
        anken,
        anken,
        anken,
        anken
      ],
      availableRooms: [
        { area: "80m²", price: "3.2元/m²/天", decoration: "精装修", floor: "2F" },
        { area: "120m²", price: "3.0元/m²/天", decoration: "标准交付", floor: "3F" },
        { area: "180m²", price: "3.5元/m²/天", decoration: "精装修", floor: "4F" },
        { area: "250m²", price: "2.9元/m²/天", decoration: "标准交付", floor: "5F" },
        { area: "350m²", price: "3.7元/m²/天", decoration: "精装修", floor: "6F" },
        { area: "500m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "7F" },
        { area: "700m²", price: "3.8元/m²/天", decoration: "精装修", floor: "8F" },
        { area: "900m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "9F" },
        { area: "1200m²", price: "3.9元/m²/天", decoration: "精装修", floor: "10F" },
        { area: "1500m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "10层",
        elevators: "客梯4部，货梯2部",
        efficiency: "78%",
        propertyCompany: "安垦物业",
        developer: "安垦集团"
      },
      description: "安垦汇智创意园是一座综合性创意产业园区，位于静安区大宁商圈。园区建筑风格现代，配套设施完善，提供灵活的办公空间解决方案。适合科技、文化、设计等各类创意企业入驻。周边有大宁国际商业广场等大型商业配套。",
      nearbyBuildings: [
        { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" },
        { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
        { name: "大宁德必易园", price: "3.3元/m²/天", image: show800, link: "/building/204" }
      ]
    },
    "203": {
      id: 203,
      name: "八号桥Ⅳ期",
      district: "闸北 - 汶水路",
      subway: "1号线,汶水路站步行约5分钟",
      address: "上海市闸北区南通路",
      price: "3.5~5.0",
      priceRange: "元/m²/天",
      totalUnits: 10,
      availableArea: "120 - 1000m²",
      images: [
        bridge8,
        bridge8,
        bridge8,
        bridge8
      ],
      availableRooms: [
        { area: "120m²", price: "3.8元/m²/天", decoration: "精装修", floor: "2F" },
        { area: "180m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "3F" },
        { area: "250m²", price: "4.2元/m²/天", decoration: "精装修", floor: "4F" },
        { area: "350m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "5F" },
        { area: "500m²", price: "4.5元/m²/天", decoration: "精装修", floor: "6F" },
        { area: "650m²", price: "4.1元/m²/天", decoration: "标准交付", floor: "7F" },
        { area: "800m²", price: "4.7元/m²/天", decoration: "精装修", floor: "8F" },
        { area: "1000m²", price: "5.0元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.5m",
        totalFloors: "8层",
        elevators: "客梯3部，货梯1部",
        efficiency: "80%",
        propertyCompany: "八号桥物业",
        developer: "上海城投"
      },
      description: "八号桥Ⅳ期是八号桥创意产业园区的第四期项目，延续了八号桥品牌的高品质定位。园区由老厂房改造而成，保留工业遗存，融入现代设计理念。适合设计、传媒、科技等创意产业入驻。交通便利，周边配套完善。",
      nearbyBuildings: [
        { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" },
        { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
        { name: "大宁德必易园", price: "3.3元/m²/天", image: show800, link: "/building/204" }
      ]
    },
    "204": {
      id: 204,
      name: "大宁德必易园",
      district: "静安 - 大宁",
      subway: "1号线,上海马戏城站步行约8分钟",
      address: "上海市静安区广中西路",
      price: "3.0~4.2",
      priceRange: "元/m²/天",
      totalUnits: 14,
      availableArea: "100 - 1300m²",
      images: [
        show800,
        show800,
        show800,
        show800
      ],
      availableRooms: [
        { area: "100m²", price: "3.3元/m²/天", decoration: "精装修", floor: "2F" },
        { area: "150m²", price: "3.1元/m²/天", decoration: "标准交付", floor: "3F" },
        { area: "220m²", price: "3.6元/m²/天", decoration: "精装修", floor: "4F" },
        { area: "300m²", price: "3.2元/m²/天", decoration: "标准交付", floor: "5F" },
        { area: "420m²", price: "3.8元/m²/天", decoration: "精装修", floor: "6F" },
        { area: "550m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "7F" },
        { area: "700m²", price: "3.9元/m²/天", decoration: "精装修", floor: "8F" },
        { area: "900m²", price: "3.7元/m²/天", decoration: "标准交付", floor: "9F" },
        { area: "1100m²", price: "4.1元/m²/天", decoration: "精装修", floor: "10F" },
        { area: "1300m²", price: "4.2元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.8m",
        totalFloors: "10层",
        elevators: "客梯4部，货梯2部",
        efficiency: "76%",
        propertyCompany: "德必集团",
        developer: "德必集团"
      },
      description: "大宁德必易园是德必集团在静安区打造的创意产业园区，位于大宁商圈核心位置。园区设计现代时尚，配套设施齐全，提供多种面积的办公空间。适合文化创意、科技研发、设计咨询等企业入驻。周边商业配套完善，生活便利。",
      nearbyBuildings: [
        { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
        { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
        { name: "复地四季广场", price: "3.5元/m²/天", image: anken, link: "/building/205" }
      ]
    },
    "205": {
      id: 205,
      name: "复地四季广场",
      district: "静安 - 大宁",
      subway: "1号线,上海马戏城站步行约6分钟",
      address: "上海市静安区共和新路",
      price: "3.2~4.5",
      priceRange: "元/m²/天",
      totalUnits: 13,
      availableArea: "90 - 1100m²",
      images: [
        anken,
        anken,
        anken,
        anken
      ],
      availableRooms: [
        { area: "90m²", price: "3.5元/m²/天", decoration: "精装修", floor: "2F" },
        { area: "140m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "3F" },
        { area: "200m²", price: "3.8元/m²/天", decoration: "精装修", floor: "4F" },
        { area: "280m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "5F" },
        { area: "380m²", price: "4.0元/m²/天", decoration: "精装修", floor: "6F" },
        { area: "500m²", price: "3.7元/m²/天", decoration: "标准交付", floor: "7F" },
        { area: "650m²", price: "4.2元/m²/天", decoration: "精装修", floor: "8F" },
        { area: "800m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "9F" },
        { area: "1000m²", price: "4.4元/m²/天", decoration: "精装修", floor: "10F" },
        { area: "1100m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.9m",
        totalFloors: "10层",
        elevators: "客梯3部，货梯1部",
        efficiency: "77%",
        propertyCompany: "复地集团",
        developer: "复地集团"
      },
      description: "复地四季广场位于静安区大宁商圈，是集商业、办公于一体的综合性项目。办公空间设计现代，配套设施完善，适合各类企业入驻。周边有大型购物中心、餐饮娱乐等配套，生活便利。交通便捷，地铁直达。",
      nearbyBuildings: [
        { name: "大宁德必易园", price: "3.3元/m²/天", image: show800, link: "/building/204" },
        { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
        { name: "老码头创意园", price: "3.6元/m²/天", image: bridge8, link: "/building/206" }
      ]
    },
    "206": {
      id: 206,
      name: "老码头创意园",
      district: "黄浦 - 外滩",
      subway: "4号线,南浦大桥站步行约10分钟",
      address: "上海市黄浦区中山南路",
      price: "3.5~5.2",
      priceRange: "元/m²/天",
      totalUnits: 11,
      availableArea: "110 - 950m²",
      images: [
        bridge8,
        bridge8,
        bridge8,
        bridge8
      ],
      availableRooms: [
        { area: "110m²", price: "3.8元/m²/天", decoration: "精装修", floor: "1F" },
        { area: "160m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "2F" },
        { area: "230m²", price: "4.2元/m²/天", decoration: "精装修", floor: "3F" },
        { area: "320m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "4F" },
        { area: "450m²", price: "4.6元/m²/天", decoration: "精装修", floor: "5F" },
        { area: "580m²", price: "4.3元/m²/天", decoration: "标准交付", floor: "6F" },
        { area: "720m²", price: "4.9元/m²/天", decoration: "精装修", floor: "7F" },
        { area: "850m²", price: "4.5元/m²/天", decoration: "标准交付", floor: "8F" },
        { area: "950m²", price: "5.2元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.3m",
        totalFloors: "8层",
        elevators: "客梯2部，货梯1部",
        efficiency: "74%",
        propertyCompany: "老码头物业",
        developer: "上海外滩投资"
      },
      description: "老码头创意园位于黄浦江畔，是由老码头仓库改造而成的创意产业园区。园区保留了老建筑的历史韵味，融入现代艺术设计元素。周边有丰富的餐饮、娱乐、文化设施，适合文化创意、艺术设计、传媒等行业企业入驻。",
      nearbyBuildings: [
        { name: "幸福里创意园", price: "3.4元/m²/天", image: show800, link: "/building/207" },
        { name: "越界·世博园", price: "3.7元/m²/天", image: anken, link: "/building/208" },
        { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" }
      ]
    },
    "207": {
      id: 207,
      name: "幸福里创意园",
      district: "浦东 - 北蔡",
      subway: "7号线,花木路站步行约12分钟",
      address: "上海市浦东新区沪南路",
      price: "2.8~4.0",
      priceRange: "元/m²/天",
      totalUnits: 16,
      availableArea: "85 - 1400m²",
      images: [
        show800,
        show800,
        show800,
        show800
      ],
      availableRooms: [
        { area: "85m²", price: "3.2元/m²/天", decoration: "精装修", floor: "1F" },
        { area: "130m²", price: "3.0元/m²/天", decoration: "标准交付", floor: "2F" },
        { area: "190m²", price: "3.5元/m²/天", decoration: "精装修", floor: "3F" },
        { area: "260m²", price: "2.9元/m²/天", decoration: "标准交付", floor: "4F" },
        { area: "360m²", price: "3.7元/m²/天", decoration: "精装修", floor: "5F" },
        { area: "480m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "6F" },
        { area: "620m²", price: "3.8元/m²/天", decoration: "精装修", floor: "7F" },
        { area: "780m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "8F" },
        { area: "950m²", price: "3.9元/m²/天", decoration: "精装修", floor: "9F" },
        { area: "1200m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "10F" },
        { area: "1400m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.7m",
        totalFloors: "10层",
        elevators: "客梯4部，货梯2部",
        efficiency: "79%",
        propertyCompany: "幸福里物业",
        developer: "上海浦东新区投资"
      },
      description: "幸福里创意园位于浦东新区北蔡地区，是一座现代化的创意产业园区。园区环境优美，配套设施齐全，提供灵活的办公空间解决方案。适合科技、文化、设计等各类企业入驻。周边有商业配套和生活设施，交通便利。",
      nearbyBuildings: [
        { name: "越界·世博园", price: "3.7元/m²/天", image: anken, link: "/building/208" },
        { name: "老码头创意园", price: "3.8元/m²/天", image: bridge8, link: "/building/206" },
        { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" }
      ]
    },
    "208": {
      id: 208,
      name: "越界·世博园",
      district: "浦东 - 世博",
      subway: "13号线,世博大道站步行约5分钟",
      address: "上海市浦东新区世博园区",
      price: "3.5~5.0",
      priceRange: "元/m²/天",
      totalUnits: 12,
      availableArea: "100 - 1150m²",
      images: [
        anken,
        anken,
        anken,
        anken
      ],
      availableRooms: [
        { area: "100m²", price: "3.7元/m²/天", decoration: "精装修", floor: "2F" },
        { area: "155m²", price: "3.5元/m²/天", decoration: "标准交付", floor: "3F" },
        { area: "225m²", price: "4.1元/m²/天", decoration: "精装修", floor: "4F" },
        { area: "310m²", price: "3.8元/m²/天", decoration: "标准交付", floor: "5F" },
        { area: "430m²", price: "4.4元/m²/天", decoration: "精装修", floor: "6F" },
        { area: "560m²", price: "4.0元/m²/天", decoration: "标准交付", floor: "7F" },
        { area: "700m²", price: "4.6元/m²/天", decoration: "精装修", floor: "8F" },
        { area: "850m²", price: "4.3元/m²/天", decoration: "标准交付", floor: "9F" },
        { area: "1000m²", price: "4.8元/m²/天", decoration: "精装修", floor: "10F" },
        { area: "1150m²", price: "5.0元/m²/天", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.1m",
        totalFloors: "10层",
        elevators: "客梯5部，货梯2部",
        efficiency: "81%",
        propertyCompany: "越界集团",
        developer: "越界集团"
      },
      description: "越界·世博园位于上海世博园区核心位置，是越界集团打造的高品质创意产业园区。园区设计现代时尚，配备先进的办公设施和完善的商务配套。适合科技创新、文化创意、设计研发等企业入驻。紧邻地铁，交通便利，周边配套完善。",
      nearbyBuildings: [
        { name: "幸福里创意园", price: "3.4元/m²/天", image: show800, link: "/building/207" },
        { name: "老码头创意园", price: "3.8元/m²/天", image: bridge8, link: "/building/206" },
        { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" }
      ]
    },
    "101": {
      id: 101,
      name: "Distrii办伴（冠捷大厦）",
      district: "长宁 - 虹桥商务区",
      subway: "2号线,淞虹路站步行约5分钟",
      address: "上海市长宁区金钟路631号冠捷大厦",
      price: "1200~3500",
      priceRange: "元/工位/月",
      totalUnits: 15,
      availableArea: "2 - 50工位",
      images: [
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1200元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "4工位", price: "1350元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "6工位", price: "1500元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "8工位", price: "1650元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "10工位", price: "1800元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "15工位", price: "2100元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "20工位", price: "2400元/工位/月", decoration: "精装修", floor: "8F" },
        { area: "30工位", price: "2800元/工位/月", decoration: "精装修", floor: "8F" },
        { area: "50工位", price: "3500元/工位/月", decoration: "精装修", floor: "9F" }
      ],
      buildingInfo: {
        floorHeight: "3.2m",
        totalFloors: "12层",
        elevators: "客梯4部",
        efficiency: "80%",
        propertyCompany: "Distrii办伴",
        developer: "冠捷科技集团"
      },
      description: "Distrii办伴（冠捷大厦）位于长宁区虹桥商务区核心地段，毗邻地铁2号线淞虹路站，交通便利。空间设计现代简约，配备齐全的办公设施，包括高速wifi、打印复印、会议室、茶水间等。提供灵活的工位租赁方案，适合初创企业和中小团队。周边商业配套完善，餐饮、银行、便利店等一应俱全。",
      nearbyBuildings: [
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/102" },
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/103" },
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" }
      ]
    },
    "102": {
      id: 102,
      name: "Umon优盟（虹桥丽宝广场）",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,虹桥火车站步行约8分钟",
      address: "上海市闵行区申虹路800号虹桥丽宝广场",
      price: "1500~4000",
      priceRange: "元/工位/月",
      totalUnits: 18,
      availableArea: "2 - 80工位",
      images: [
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1500元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "4工位", price: "1650元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "6工位", price: "1800元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "8工位", price: "2000元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "10工位", price: "2200元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "15工位", price: "2600元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "20工位", price: "3000元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "30工位", price: "3400元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "50工位", price: "3800元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "80工位", price: "4000元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.5m",
        totalFloors: "15层",
        elevators: "客梯6部",
        efficiency: "82%",
        propertyCompany: "Umon优盟",
        developer: "丽宝集团"
      },
      description: "Umon优盟（虹桥丽宝广场）位于虹桥商务区核心位置，紧邻虹桥火车站和虹桥机场，交通极为便利。空间设计时尚前卫，配备智能化办公系统，提供24小时安保和空调服务。拥有多种规格的独立办公室和开放工位，适合不同规模的团队。配套设施完善，包括健身房、咖啡厅、休闲区等，打造全方位的办公生活体验。",
      nearbyBuildings: [
        { name: "Distrii办伴（冠捷大厦）", price: "1200元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/101" },
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/103" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
    "103": {
      id: 103,
      name: "WeWork（虹桥天地）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,伊犁路站步行约3分钟",
      address: "上海市闵行区申长路869号虹桥天地",
      price: "1800~4500",
      priceRange: "元/工位/月",
      totalUnits: 20,
      availableArea: "1 - 100工位",
      images: [
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg"
      ],
      availableRooms: [
        { area: "1工位", price: "1800元/工位/月", decoration: "精装修", floor: "热桌" },
        { area: "2工位", price: "1950元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "4工位", price: "2100元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "6工位", price: "2300元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "8工位", price: "2500元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "10工位", price: "2700元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "15工位", price: "3100元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "20工位", price: "3500元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "30工位", price: "3900元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "50工位", price: "4200元/工位/月", decoration: "精装修", floor: "8F" },
        { area: "100工位", price: "4500元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.8m",
        totalFloors: "18层",
        elevators: "客梯8部",
        efficiency: "85%",
        propertyCompany: "WeWork",
        developer: "瑞安集团"
      },
      description: "WeWork（虹桥天地）是WeWork在上海虹桥地区的旗舰空间，位于虹桥天地核心商圈，地理位置优越。空间采用WeWork标志性的设计风格，充满创意和活力。提供从热桌到独立办公室的多种办公方案，满足自由职业者、初创团队到成熟企业的各类需求。配备全球化的社区网络，会员可享受WeWork全球办公空间的使用权。定期举办各类社区活动，促进会员之间的交流与合作。",
      nearbyBuildings: [
        { name: "Distrii办伴（冠捷大厦）", price: "1200元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/101" },
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/102" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
    "104": {
      id: 104,
      name: "WIZWORK（环球港）",
      district: "普陀 - 中环金沙江路",
      subway: "3号线,4号线,13号线,金沙江路站步行约5分钟",
      address: "上海市普陀区中山北路3300号环球港",
      price: "1500~3800",
      priceRange: "元/工位/月",
      totalUnits: 15,
      availableArea: "2 - 60工位",
      images: [
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1500元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "4工位", price: "1650元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "6工位", price: "1850元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "8工位", price: "2000元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "10工位", price: "2200元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "15工位", price: "2600元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "20工位", price: "3000元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "30工位", price: "3400元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "60工位", price: "3800元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.5m",
        totalFloors: "商场内",
        elevators: "商场电梯",
        efficiency: "80%",
        propertyCompany: "WIZWORK",
        developer: "月星集团"
      },
      description: "WIZWORK（环球港）位于上海环球港购物中心内，地理位置优越，交通便利。提供专业的联合办公服务，包括固定工位、流动工位和独立办公室。空间设计现代简约，配备齐全的办公设施和会议室，周边商业配套丰富，适合各类创业团队和企业入驻。",
      nearbyBuildings: [
        { name: "Distrii办伴（冠捷大厦）", price: "1200元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/101" },
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/103" },
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/102" }
      ]
    },
    "105": {
      id: 105,
      name: "艾克商务中心（外滩金融中心）",
      district: "黄浦 - 外滩",
      subway: "2号线,10号线,南京东路站步行约5分钟",
      address: "上海市黄浦区中山东二路外滩金融中心",
      price: "2500~5000",
      priceRange: "元/工位/月",
      totalUnits: 12,
      availableArea: "1 - 50工位",
      images: [
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg"
      ],
      availableRooms: [
        { area: "1工位", price: "2500元/工位/月", decoration: "精装修", floor: "热桌" },
        { area: "2工位", price: "2700元/工位/月", decoration: "精装修", floor: "15F" },
        { area: "4工位", price: "3000元/工位/月", decoration: "精装修", floor: "15F" },
        { area: "6工位", price: "3300元/工位/月", decoration: "精装修", floor: "16F" },
        { area: "8工位", price: "3600元/工位/月", decoration: "精装修", floor: "16F" },
        { area: "10工位", price: "3900元/工位/月", decoration: "精装修", floor: "17F" },
        { area: "15工位", price: "4300元/工位/月", decoration: "精装修", floor: "17F" },
        { area: "20工位", price: "4600元/工位/月", decoration: "精装修", floor: "18F" },
        { area: "50工位", price: "5000元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "高层",
        elevators: "高速电梯",
        efficiency: "88%",
        propertyCompany: "艾克商务",
        developer: "外滩金融"
      },
      description: "艾克商务中心（外滩金融中心）位于上海外滩核心商务区，毗邻黄浦江，景观优美。提供高端的联合办公服务，包括固定工位、独立办公室和虚拟办公室。空间设计精致大气，配备先进的办公设施和完善的商务配套，是高端企业和金融机构的理想选择。",
      nearbyBuildings: [
        { name: "德事商务中心（静安嘉里中心）", price: "2800元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/107" },
        { name: "寰图办公空间（上海白玉兰广场）", price: "2600元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/108" },
        { name: "雷格斯商务中心（1788国际中心）", price: "2800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/111" }
      ]
    },
    "106": {
      id: 106,
      name: "大树下办公空间（龙湖虹桥天街）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,龙柏新村站步行约10分钟",
      address: "上海市闵行区申长路龙湖虹桥天街",
      price: "1600~3600",
      priceRange: "元/工位/月",
      totalUnits: 14,
      availableArea: "2 - 50工位",
      images: [
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1600元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "4工位", price: "1750元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "6工位", price: "1950元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "8工位", price: "2100元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "10工位", price: "2300元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "15工位", price: "2700元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "20工位", price: "3100元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "50工位", price: "3600元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.5m",
        totalFloors: "商场内",
        elevators: "商场电梯",
        efficiency: "82%",
        propertyCompany: "大树下",
        developer: "龙湖集团"
      },
      description: "大树下办公空间（龙湖虹桥天街）位于龙湖虹桥天街商业综合体内，周边配套齐全，交通便利。提供灵活多样的办公空间解决方案，空间设计温馨舒适，配备完善的会议室和休闲区，适合创业团队和中小企业办公。",
      nearbyBuildings: [
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/103" },
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/102" },
        { name: "氪空间KrSpace（虹桥绿谷社区）", price: "1700元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/109" }
      ]
    },
    "107": {
      id: 107,
      name: "德事商务中心（静安嘉里中心）",
      district: "静安 - 静安寺",
      subway: "2号线,7号线,静安寺站步行约3分钟",
      address: "上海市静安区南京西路1515号静安嘉里中心",
      price: "2800~5500",
      priceRange: "元/工位/月",
      totalUnits: 16,
      availableArea: "1 - 80工位",
      images: [
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg"
      ],
      availableRooms: [
        { area: "1工位", price: "2800元/工位/月", decoration: "精装修", floor: "热桌" },
        { area: "2工位", price: "3000元/工位/月", decoration: "精装修", floor: "20F" },
        { area: "4工位", price: "3300元/工位/月", decoration: "精装修", floor: "20F" },
        { area: "6工位", price: "3600元/工位/月", decoration: "精装修", floor: "21F" },
        { area: "8工位", price: "3900元/工位/月", decoration: "精装修", floor: "21F" },
        { area: "10工位", price: "4200元/工位/月", decoration: "精装修", floor: "22F" },
        { area: "15工位", price: "4600元/工位/月", decoration: "精装修", floor: "22F" },
        { area: "20工位", price: "5000元/工位/月", decoration: "精装修", floor: "23F" },
        { area: "80工位", price: "5500元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "高层",
        elevators: "高速电梯",
        efficiency: "90%",
        propertyCompany: "德事商务",
        developer: "嘉里建设"
      },
      description: "德事商务中心（静安嘉里中心）位于上海静安核心商圈，地理位置优越。提供高端专业的商务办公服务，包括固定工位、独立办公室和虚拟办公室。空间设计精致优雅，配备国际一流的办公设施和会议室，是跨国企业和高端企业的首选。",
      nearbyBuildings: [
        { name: "艾克商务中心（外滩金融中心）", price: "2500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/105" },
        { name: "寰图办公空间（上海白玉兰广场）", price: "2600元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/108" },
        { name: "雷格斯商务中心（1788国际中心）", price: "2800元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/111" }
      ]
    },
    "108": {
      id: 108,
      name: "寰图办公空间（上海白玉兰广场）",
      district: "黄浦 - 人民广场",
      subway: "2号线,8号线,人民广场站步行约3分钟",
      address: "上海市黄浦区延安东路白玉兰广场",
      price: "2600~5200",
      priceRange: "元/工位/月",
      totalUnits: 18,
      availableArea: "1 - 100工位",
      images: [
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg"
      ],
      availableRooms: [
        { area: "1工位", price: "2600元/工位/月", decoration: "精装修", floor: "热桌" },
        { area: "2工位", price: "2800元/工位/月", decoration: "精装修", floor: "25F" },
        { area: "4工位", price: "3100元/工位/月", decoration: "精装修", floor: "25F" },
        { area: "6工位", price: "3400元/工位/月", decoration: "精装修", floor: "26F" },
        { area: "8工位", price: "3700元/工位/月", decoration: "精装修", floor: "26F" },
        { area: "10工位", price: "4000元/工位/月", decoration: "精装修", floor: "27F" },
        { area: "15工位", price: "4400元/工位/月", decoration: "精装修", floor: "27F" },
        { area: "20工位", price: "4800元/工位/月", decoration: "精装修", floor: "28F" },
        { area: "100工位", price: "5200元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.2m",
        totalFloors: "高层",
        elevators: "高速电梯",
        efficiency: "88%",
        propertyCompany: "寰图",
        developer: "绿地集团"
      },
      description: "寰图办公空间（上海白玉兰广场）位于人民广场核心商圈，地标性建筑内。提供国际化的联合办公服务，空间设计高端大气，配备先进的办公设施和多功能会议室，周边商业配套完善，适合各类企业和创业团队。",
      nearbyBuildings: [
        { name: "艾克商务中心（外滩金融中心）", price: "2500元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/105" },
        { name: "德事商务中心（静安嘉里中心）", price: "2800元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/107" },
        { name: "雷格斯商务中心（1788国际中心）", price: "2800元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/111" }
      ]
    },
    "109": {
      id: 109,
      name: "氪空间KrSpace（虹桥绿谷社区）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,龙溪路站步行约5分钟",
      address: "上海市闵行区虹桥绿谷广场",
      price: "1700~4000",
      priceRange: "元/工位/月",
      totalUnits: 16,
      availableArea: "2 - 80工位",
      images: [
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg",
        "/src/assets/coworking/wework-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1700元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "4工位", price: "1850元/工位/月", decoration: "精装修", floor: "3F" },
        { area: "6工位", price: "2050元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "8工位", price: "2200元/工位/月", decoration: "精装修", floor: "4F" },
        { area: "10工位", price: "2400元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "15工位", price: "2800元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "20工位", price: "3200元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "30工位", price: "3600元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "80工位", price: "4000元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.6m",
        totalFloors: "多层",
        elevators: "客梯",
        efficiency: "83%",
        propertyCompany: "氪空间",
        developer: "绿谷集团"
      },
      description: "氪空间KrSpace（虹桥绿谷社区）位于虹桥商务区核心位置，交通便利。提供专业的联合办公服务和创业孵化支持，空间设计现代时尚，配备完善的办公设施和会议室，定期举办创业活动，适合科技类创业团队和中小企业。",
      nearbyBuildings: [
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/103" },
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/102" },
        { name: "大树下办公空间（龙湖虹桥天街）", price: "1600元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/106" }
      ]
    },
    "110": {
      id: 110,
      name: "快易名商（虹桥万通中心）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,龙溪路站步行约8分钟",
      address: "上海市闵行区虹桥万通中心",
      price: "1800~4200",
      priceRange: "元/工位/月",
      totalUnits: 14,
      availableArea: "2 - 70工位",
      images: [
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg",
        "/src/assets/coworking/distrii-1.jpg"
      ],
      availableRooms: [
        { area: "2工位", price: "1800元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "4工位", price: "1950元/工位/月", decoration: "精装修", floor: "5F" },
        { area: "6工位", price: "2150元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "8工位", price: "2300元/工位/月", decoration: "精装修", floor: "6F" },
        { area: "10工位", price: "2500元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "15工位", price: "2900元/工位/月", decoration: "精装修", floor: "7F" },
        { area: "20工位", price: "3300元/工位/月", decoration: "精装修", floor: "8F" },
        { area: "30工位", price: "3700元/工位/月", decoration: "精装修", floor: "8F" },
        { area: "70工位", price: "4200元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "3.5m",
        totalFloors: "高层",
        elevators: "高速电梯",
        efficiency: "85%",
        propertyCompany: "快易名商",
        developer: "万通集团"
      },
      description: "快易名商（虹桥万通中心）位于虹桥商务区核心位置，交通便利。提供灵活的办公空间解决方案，包括固定工位、独立办公室和虚拟办公室服务。空间设计简约现代，配备完善的商务配套设施，适合各类企业和创业团队。",
      nearbyBuildings: [
        { name: "氪空间KrSpace（虹桥绿谷社区）", price: "1700元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/109" },
        { name: "WeWork（虹桥天地）", price: "1800元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/103" },
        { name: "Umon优盟（虹桥丽宝广场）", price: "1500元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/102" }
      ]
    },
    "111": {
      id: 111,
      name: "雷格斯商务中心（1788国际中心）",
      district: "浦东 - 陆家嘴",
      subway: "2号线,陆家嘴站步行约3分钟",
      address: "上海市浦东新区陆家嘴环路1788号国际中心",
      price: "2800~6000",
      priceRange: "元/工位/月",
      totalUnits: 20,
      availableArea: "1 - 120工位",
      images: [
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg",
        "/src/assets/coworking/umon-1.jpg"
      ],
      availableRooms: [
        { area: "1工位", price: "2800元/工位/月", decoration: "精装修", floor: "热桌" },
        { area: "2工位", price: "3000元/工位/月", decoration: "精装修", floor: "30F" },
        { area: "4工位", price: "3400元/工位/月", decoration: "精装修", floor: "30F" },
        { area: "6工位", price: "3800元/工位/月", decoration: "精装修", floor: "31F" },
        { area: "8工位", price: "4200元/工位/月", decoration: "精装修", floor: "31F" },
        { area: "10工位", price: "4600元/工位/月", decoration: "精装修", floor: "32F" },
        { area: "15工位", price: "5000元/工位/月", decoration: "精装修", floor: "32F" },
        { area: "20工位", price: "5400元/工位/月", decoration: "精装修", floor: "33F" },
        { area: "120工位", price: "6000元/工位/月", decoration: "精装修", floor: "整层" }
      ],
      buildingInfo: {
        floorHeight: "4.5m",
        totalFloors: "高层",
        elevators: "高速电梯",
        efficiency: "92%",
        propertyCompany: "雷格斯",
        developer: "陆家嘴集团"
      },
      description: "雷格斯商务中心（1788国际中心）位于陆家嘴金融贸易区核心位置，地标性建筑内。提供国际化的高端商务办公服务，空间设计精致专业，配备国际一流的办公设施和会议室，周边金融配套完善，是金融和跨国企业的理想选择。",
      nearbyBuildings: [
        { name: "艾克商务中心（外滩金融中心）", price: "2500元/工位/月", image: "/src/assets/coworking/distrii-1.jpg", link: "/building/105" },
        { name: "德事商务中心（静安嘉里中心）", price: "2800元/工位/月", image: "/src/assets/coworking/umon-1.jpg", link: "/building/107" },
        { name: "寰图办公空间（上海白玉兰广场）", price: "2600元/工位/月", image: "/src/assets/coworking/wework-1.jpg", link: "/building/108" }
      ]
    },
    "301": {
      id: 301,
      name: "虹桥BU中心（独栋）",
      district: "长宁 - 虹桥商务区",
      subway: "2号线,10号线,虹桥2号航站楼站步行约8分钟",
      address: "上海市长宁区虹桥商务区天山西路789号",
      price: "4.0~4.5",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "2000 - 3500m²",
      images: [hongqiaoBu, hongqiaoBu, hongqiaoBu],
      availableRooms: [
        { area: "2000m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "2500m²", price: "4.2元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3500m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "5层",
        elevators: "客梯2部",
        efficiency: "75%",
        propertyCompany: "BU物业",
        developer: "虹桥开发"
      },
      description: "虹桥BU中心位于虹桥商务区核心位置，独栋办公，适合企业总部及研发中心。周边配套齐全，交通便利。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥展汇", price: "4.0元/m²/天", image: exhibitionHub, link: "/building/311" },
        { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
      ]
    },
    "302": {
      id: 302,
      name: "力波REEB1987（独栋）",
      district: "普陀 - 长风生态商务区",
      subway: "13号线,大渡河路站步行约10分钟",
      address: "上海市普陀区光复西路力波啤酒厂旧址",
      price: "3.5~4.0",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1500 - 3000m²",
      images: [liboReeb, liboReeb, liboReeb],
      availableRooms: [
        { area: "1500m²", price: "3.5元/m²/天", decoration: "创意装修", floor: "整栋" },
        { area: "2000m²", price: "3.7元/m²/天", decoration: "创意装修", floor: "整栋" },
        { area: "3000m²", price: "4.0元/m²/天", decoration: "创意装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "5.0m",
        totalFloors: "4层",
        elevators: "客梯1部",
        efficiency: "72%",
        propertyCompany: "力波物业",
        developer: "力波集团"
      },
      description: "力波REEB1987由力波啤酒厂改造而来，保留工业风格，适合创意型企业总部。独栋办公，配套齐全。",
      nearbyBuildings: [
        { name: "长风大悦城", price: "3.8元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥BU中心", price: "4.0元/m²/天", image: hongqiaoBu, link: "/building/301" },
        { name: "田林坊", price: "3.2元/m²/天", image: tianlinFang, link: "/building/303" }
      ]
    },
    "303": {
      id: 303,
      name: "田林坊（独栋）",
      district: "徐汇 - 漕河泾",
      subway: "1号线,漕宝路站步行约12分钟",
      address: "上海市徐汇区田林路140号",
      price: "3.0~3.5",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1200 - 2500m²",
      images: [tianlinFang, tianlinFang, tianlinFang],
      availableRooms: [
        { area: "1200m²", price: "3.0元/m²/天", decoration: "简装", floor: "整栋" },
        { area: "1800m²", price: "3.2元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "2500m²", price: "3.5元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "3.8m",
        totalFloors: "4层",
        elevators: "客梯1部",
        efficiency: "70%",
        propertyCompany: "田林物业",
        developer: "徐汇发展"
      },
      description: "田林坊位于徐汇漕河泾开发区，独栋办公环境安静，适合科技研发类企业总部。周边配套成熟。",
      nearbyBuildings: [
        { name: "力波REEB1987", price: "3.5元/m²/天", image: liboReeb, link: "/building/302" },
        { name: "虹桥正荣中心", price: "3.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" },
        { name: "中骏广场", price: "4.2元/m²/天", image: zhongjunPlaza, link: "/building/304" }
      ]
    },
    "304": {
      id: 304,
      name: "中骏广场（独栋）",
      district: "长宁 - 虹桥",
      subway: "2号线,10号线,虹桥2号航站楼站步行约10分钟",
      address: "上海市长宁区申虹路",
      price: "4.0~4.5",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1800 - 3200m²",
      images: [zhongjunPlaza, zhongjunPlaza, zhongjunPlaza],
      availableRooms: [
        { area: "1800m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "2500m²", price: "4.2元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3200m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.2m",
        totalFloors: "6层",
        elevators: "客梯2部",
        efficiency: "78%",
        propertyCompany: "中骏物业",
        developer: "中骏集团"
      },
      description: "中骏广场位于虹桥核心区域，独栋甲级写字楼，适合大型企业总部。建筑品质高，配套完善。",
      nearbyBuildings: [
        { name: "虹桥BU中心", price: "4.0元/m²/天", image: hongqiaoBu, link: "/building/301" },
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥正荣中心", price: "3.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" }
      ]
    },
    "305": {
      id: 305,
      name: "虹桥正荣中心（独栋）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,龙溪路站步行约6分钟",
      address: "上海市闵行区申长路正荣中心",
      price: "3.5~4.0",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1600 - 3000m²",
      images: [hongqiaoZhengrong, hongqiaoZhengrong, hongqiaoZhengrong],
      availableRooms: [
        { area: "1600m²", price: "3.5元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "2200m²", price: "3.7元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3000m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "5层",
        elevators: "客梯2部",
        efficiency: "76%",
        propertyCompany: "正荣物业",
        developer: "正荣集团"
      },
      description: "虹桥正荣中心位于虹桥商务区，独栋办公大楼，现代化设计，适合企业总部和区域总部。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "MAX科技园", price: "3.2元/m²/天", image: maxTech, link: "/building/306" },
        { name: "容大中心", price: "3.0元/m²/天", image: rongdaCenter, link: "/building/308" }
      ]
    },
    "306": {
      id: 306,
      name: "MAX科技园（独栋）",
      district: "闵行 - 莘庄工业区",
      subway: "1号线,莘庄站步行约15分钟",
      address: "上海市闵行区莘庄工业区都市路",
      price: "2.8~3.5",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "2000 - 4000m²",
      images: [maxTech, maxTech, maxTech],
      availableRooms: [
        { area: "2000m²", price: "2.8元/m²/天", decoration: "标准交付", floor: "整栋" },
        { area: "3000m²", price: "3.0元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "4000m²", price: "3.5元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.5m",
        totalFloors: "5层",
        elevators: "客梯2部,货梯1部",
        efficiency: "73%",
        propertyCompany: "MAX物业",
        developer: "莘庄工业区"
      },
      description: "MAX科技园位于莘庄工业区，独栋科研办公楼，层高充足，适合科技研发类企业。配套完善，性价比高。",
      nearbyBuildings: [
        { name: "虹桥正荣中心", price: "3.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" },
        { name: "容大中心", price: "3.0元/m²/天", image: rongdaCenter, link: "/building/308" },
        { name: "田林坊", price: "3.0元/m²/天", image: tianlinFang, link: "/building/303" }
      ]
    },
    "307": {
      id: 307,
      name: "平金中心（独栋）",
      district: "浦东 - 金桥",
      subway: "6号线,9号线,金桥路站步行约8分钟",
      address: "上海市浦东新区金桥路平金中心",
      price: "3.0~3.8",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1800 - 3500m²",
      images: [pingjinCenter, pingjinCenter, pingjinCenter],
      availableRooms: [
        { area: "1800m²", price: "3.0元/m²/天", decoration: "简装", floor: "整栋" },
        { area: "2500m²", price: "3.3元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3500m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "6层",
        elevators: "客梯2部",
        efficiency: "74%",
        propertyCompany: "平金物业",
        developer: "金桥集团"
      },
      description: "平金中心位于浦东金桥开发区，独栋办公环境，适合制造业及贸易类企业总部。交通便利，配套成熟。",
      nearbyBuildings: [
        { name: "金桥国际商业广场", price: "3.5元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "MAX科技园", price: "3.2元/m²/天", image: maxTech, link: "/building/306" },
        { name: "容大中心", price: "3.0元/m²/天", image: rongdaCenter, link: "/building/308" }
      ]
    },
    "308": {
      id: 308,
      name: "容大中心（独栋）",
      district: "闵行 - 七宝",
      subway: "9号线,七宝站步行约10分钟",
      address: "上海市闵行区七宝镇沪星路",
      price: "2.5~3.2",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1500 - 3200m²",
      images: [rongdaCenter, rongdaCenter, rongdaCenter],
      availableRooms: [
        { area: "1500m²", price: "2.5元/m²/天", decoration: "简装", floor: "整栋" },
        { area: "2200m²", price: "2.8元/m²/天", decoration: "标准交付", floor: "整栋" },
        { area: "3200m²", price: "3.2元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "3.8m",
        totalFloors: "5层",
        elevators: "客梯1部",
        efficiency: "71%",
        propertyCompany: "容大物业",
        developer: "七宝发展"
      },
      description: "容大中心位于闵行七宝，独栋办公大楼，性价比高，适合中小型企业总部及研发中心。周边生活配套完善。",
      nearbyBuildings: [
        { name: "MAX科技园", price: "3.2元/m²/天", image: maxTech, link: "/building/306" },
        { name: "虹桥正荣中心", price: "3.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" },
        { name: "田林坊", price: "3.0元/m²/天", image: tianlinFang, link: "/building/303" }
      ]
    },
    "309": {
      id: 309,
      name: "E通世界·华新园（独栋）",
      district: "青浦 - 华新镇",
      subway: "17号线,赵巷站步行约20分钟",
      address: "上海市青浦区华新镇华志路",
      price: "2.0~2.8",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "2000 - 4500m²",
      images: [hongqiaoBu, hongqiaoBu, hongqiaoBu],
      availableRooms: [
        { area: "2000m²", price: "2.0元/m²/天", decoration: "简装", floor: "整栋" },
        { area: "3000m²", price: "2.3元/m²/天", decoration: "标准交付", floor: "整栋" },
        { area: "4500m²", price: "2.8元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.5m",
        totalFloors: "4层",
        elevators: "客梯1部,货梯1部",
        efficiency: "70%",
        propertyCompany: "E通物业",
        developer: "青浦发展"
      },
      description: "E通世界·华新园位于青浦华新镇，独栋办公环境，空间开阔，适合生产研发型企业总部。性价比极高。",
      nearbyBuildings: [
        { name: "容大中心", price: "3.0元/m²/天", image: rongdaCenter, link: "/building/308" },
        { name: "MAX科技园", price: "3.2元/m²/天", image: maxTech, link: "/building/306" },
        { name: "丰隆虹桥中心", price: "3.5元/m²/天", image: liboReeb, link: "/building/310" }
      ]
    },
    "310": {
      id: 310,
      name: "丰隆虹桥中心（独栋）",
      district: "闵行 - 虹桥商务区",
      subway: "10号线,17号线,虹桥火车站站步行约8分钟",
      address: "上海市闵行区申滨路丰隆中心",
      price: "3.5~4.2",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1800 - 3500m²",
      images: [liboReeb, liboReeb, liboReeb],
      availableRooms: [
        { area: "1800m²", price: "3.5元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "2500m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3500m²", price: "4.2元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "6层",
        elevators: "客梯2部",
        efficiency: "77%",
        propertyCompany: "丰隆物业",
        developer: "丰隆集团"
      },
      description: "丰隆虹桥中心位于虹桥商务区核心位置，独栋甲级办公楼，品质优良，适合大型企业总部和跨国公司。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥BU中心", price: "4.0元/m²/天", image: hongqiaoBu, link: "/building/301" },
        { name: "虹桥正荣中心", price: "3.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" }
      ]
    },
    "311": {
      id: 311,
      name: "虹桥展汇（独栋）",
      district: "闵行 - 虹桥商务区",
      subway: "2号线,10号线,虹桥2号航站楼站步行约6分钟",
      address: "上海市闵行区申虹路虹桥展汇",
      price: "3.8~4.5",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "2000 - 4000m²",
      images: [tianlinFang, tianlinFang, tianlinFang],
      availableRooms: [
        { area: "2000m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3000m²", price: "4.0元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "4000m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.2m",
        totalFloors: "7层",
        elevators: "客梯3部",
        efficiency: "79%",
        propertyCompany: "虹桥展汇物业",
        developer: "虹桥集团"
      },
      description: "虹桥展汇位于虹桥商务区核心区域，紧邻国家会展中心，独栋现代化办公楼，适合大型企业总部及展贸企业。",
      nearbyBuildings: [
        { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
        { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
        { name: "丰隆虹桥中心", price: "3.5元/m²/天", image: liboReeb, link: "/building/310" }
      ]
    },
    "312": {
      id: 312,
      name: "中建锦绣天地（独栋）",
      district: "闵行 - 七宝",
      subway: "9号线,星中路站步行约8分钟",
      address: "上海市闵行区漕宝路中建锦绣天地",
      price: "3.0~3.8",
      priceRange: "元/m²/天",
      totalUnits: 1,
      availableArea: "1600 - 3200m²",
      images: [maxTech, maxTech, maxTech],
      availableRooms: [
        { area: "1600m²", price: "3.0元/m²/天", decoration: "标准交付", floor: "整栋" },
        { area: "2400m²", price: "3.3元/m²/天", decoration: "精装修", floor: "整栋" },
        { area: "3200m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整栋" }
      ],
      buildingInfo: {
        floorHeight: "4.0m",
        totalFloors: "6层",
        elevators: "客梯2部",
        efficiency: "75%",
        propertyCompany: "中建物业",
        developer: "中建集团"
      },
      description: "中建锦绣天地位于闵行七宝商圈，独栋高品质办公楼，中建集团开发，品质保证，适合各类企业总部。",
      nearbyBuildings: [
        { name: "容大中心", price: "3.0元/m²/天", image: rongdaCenter, link: "/building/308" },
        { name: "MAX科技园", price: "3.2元/m²/天", image: maxTech, link: "/building/306" },
        { name: "田林坊", price: "3.0元/m²/天", image: tianlinFang, link: "/building/303" }
      ]
    }
  };

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

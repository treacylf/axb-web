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
import zhongjunPlazaImg from "@/assets/buildings/zhongjun-plaza.png";
import aliCenter from "@/assets/buildings/ali-center.jpg";
import yuandongPlaza from "@/assets/buildings/yuandong-plaza.jpg";
import weijingCenter from "@/assets/buildings/weijing-center.jpg";
import shangjiaCenter from "@/assets/buildings/shangjia-center.jpg";

// Coworking Space Images
import wework1 from "@/assets/coworking/wework-1.jpg";
import weworkTiandi from "@/assets/coworking/wework-tiandi.jpg";
import distrii1 from "@/assets/coworking/distrii-1.jpg";
import distriiGuanjie from "@/assets/coworking/distrii-guanjie.jpg";
import umon1 from "@/assets/coworking/umon-1.jpg";
import umonHongqiao from "@/assets/coworking/umon-hongqiao.jpg";
import regus1788 from "@/assets/coworking/regus-1788.jpg";
import krspaceLvgu from "@/assets/coworking/krspace-lvgu.jpg";
import kuaiyiWantong from "@/assets/coworking/kuaiyi-wantong.jpg";
import deshiKerry from "@/assets/coworking/deshi-kerry.jpg";
import wizworkHuanqiugang from "@/assets/coworking/wizwork-huanqiugang.jpg";
import huantuBaiyulan from "@/assets/coworking/huantu-baiyulan.jpg";
import dashuxiaTianjie from "@/assets/coworking/dashuxia-tianjie.jpg";
import aikeWaitan from "@/assets/coworking/aike-waitan.jpg";

// District Images
import hongqiaoBusiness from "@/assets/districts/hongqiao-business.jpg";
import hongqiaoAirport from "@/assets/districts/hongqiao-airport.jpg";
import gubei from "@/assets/districts/gubei.jpg";
import renminSquare from "@/assets/districts/renmin-square.jpg";
import changfeng from "@/assets/districts/changfeng.jpg";
import xinzhuang from "@/assets/districts/xinzhuang.jpg";
import lujiazui from "@/assets/districts/lujiazui.jpg";
import districtPlaceholder from "@/assets/district-placeholder.jpg";

export interface DistrictData {
  name: string;
  image: string;
  aid: string;
}

export interface BuildingData {
  id: number;
  name: string;
  district: string;
  subway: string;
  address: string;
  price: string;
  priceRange: string;
  totalUnits: number;
  availableArea: string;
  type?: "office" | "building" | "creative" | "coworking" | "headquarters"; // 房源类型：租办公室/写字楼/创意园区/共享办公/总部独栋
  coordinates?: [number, number]; // [longitude, latitude] 经纬度坐标
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

// 建筑数据 - 基于从网站爬取的真实数据
// 包含36个精选房源：写字楼、创意园区、共享办公、总部独栋
export const buildingData: Record<string, BuildingData> = {
  "1": {
    id: 1,
    name: "虹桥万科中心",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,17号线,虹桥火车站站步行约5分钟",
    address: "上海市闵行区申长路988弄",
    type: "building", // 写字楼
    price: "4.3~5.0",
    priceRange: "元/m²/天",
    totalUnits: 7,
    availableArea: "198 - 2352m²",
    coordinates: [121.319, 31.196], // 虹桥商务区核心位置
    images: [
      vankeCenter,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/aeb2c626e7329000a2553992d92943f8.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/3edfbcf3bc96721c64396557df9ae04b.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/b23f06429df18ceaecf8019a8cefb78b.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/525064ffad6cc7c8d5b03953344894da.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/121728aea18917bf0dba1f28104b27be.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/1a5e3c5a86095b2353184cc0575d3d0c.jpg"
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
    type: "building", // 写字楼
    coordinates: [121.308, 31.193], // 虹桥商务区北区
    images: [
      exhibitionHub,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/30041d724ec07ba6fcf219b52d8120cf.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/056b346a986392d74b15ea4f04951d7c.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/9a532c3bc8a85d89c207bd59528b13c8.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/fdf95460dcd325ff4d29172802e2e7ea.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/1ecd3b8852e743d6a2ef621d15a167ca.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/42400ca548d9e05ee678b9ff7a2c6988.jpg"
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
    name: "虹桥汇",
    district: "长宁 - 虹桥火车站",
    subway: "2号线,10号线,17号线,虹桥火车站站步行约8分钟",
    address: "上海市长宁区申虹路",
    price: "4.0~4.8",
    priceRange: "元/m²/天",
    totalUnits: 6,
    availableArea: "189 - 1200m²",
    type: "building", // 写字楼
    coordinates: [121.316, 31.195], // 虹桥火车站附近
    images: [
      hongqiaoHui,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/cd71f858842c2f4ca697edc2a0b4c090.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/7dd7f1150acdaa872bf1a55ea34f0797.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/1bfb030e750bb41a2061b138cb2de105.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/2c6098a5facfe397589489ec13d0a1a8.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/e10a5be3fde829fcd519975770a49c38.jpg"
    ],
    availableRooms: [
      { area: "189m²", price: "4.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "280m²", price: "4.2元/m²/天", decoration: "标准交付", floor: "高区" },
      { area: "385m²", price: "4.0元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "560m²", price: "4.3元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "820m²", price: "4.6元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1200m²", price: "4.8元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "12层",
      elevators: "客梯5部，货梯2部",
      efficiency: "75%",
      propertyCompany: "仲量联行",
      developer: "嘉里建设"
    },
    description: "虹桥汇位于长宁区虹桥火车站核心区域，是区域内的优质写字楼项目。项目采用现代化设计，配备完善的商务配套设施。紧邻虹桥交通枢纽，交通便利，是企业入驻虹桥的理想选择。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
    ]
  },
  "4": {
    id: 4,
    name: "SOHO天山广场",
    district: "长宁 - 虹桥古北开发区",
    subway: "2号线,娄山关路站步行约8分钟",
    address: "上海市长宁区天山路",
    price: "5.0~6.5",
    priceRange: "元/m²/天",
    totalUnits: 6,
    availableArea: "120 - 850m²",
    type: "building", // 写字楼
    coordinates: [121.421, 31.221], // 长宁区天山路附近
    images: [
      sohoTianshan,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210626/ba52f609e16b1275f061d0ab307b4539.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210626/33e615edf86428abbe588dea8a84be7c.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210626/ce131921112686e0b079ea4b8507766a.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210626/4e90c306c017f5ad9b91e83a8e851b5e.jpg",
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210626/1e1c30c523100b1f4c4ded0b0906fcb9.jpg"
    ],
    availableRooms: [
      { area: "120m²", price: "5.8元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "180m²", price: "5.5元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "250m²", price: "6.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "380m²", price: "5.2元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "550m²", price: "6.2元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "850m²", price: "6.5元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "18层",
      elevators: "客梯8部，货梯2部",
      efficiency: "75%",
      propertyCompany: "SOHO中国",
      developer: "SOHO中国"
    },
    description: "SOHO天山广场位于长宁区虹桥古北开发区，是SOHO中国在上海的标志性项目之一。项目采用现代化设计理念，配备智能化办公系统，为企业提供高品质的办公环境。周边商业配套完善，交通便利。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },
  "5": {
    id: 5,
    name: "虹桥天地",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,17号线,虹桥火车站站步行约5分钟",
    address: "上海市闵行区苏虹路33号",
    price: "4.5~5.5",
    priceRange: "元/m²/天",
    totalUnits: 10,
    availableArea: "189 - 2200m²",
    type: "building", // 写字楼
    coordinates: [121.320, 31.198], // 虹桥火车站附近
    images: [
      hongqiaoTiandi,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/7b41e3e1338ae9ec8547204a4f5ea45c.jpg",
      hongqiaoTiandi,
      hongqiaoTiandi,
      hongqiaoTiandi
    ],
    availableRooms: [
      { area: "189m²", price: "4.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "325m²", price: "4.6元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "421m²", price: "4.8元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "589m²", price: "4.7元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "720m²", price: "5.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "872m²", price: "4.9元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "1307m²", price: "5.2元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1520m²", price: "5.1元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1763m²", price: "5.3元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "2200m²", price: "5.5元/m²/天", decoration: "精装修", floor: "整层" }
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
    district: "闵行 - 虹桥商务区",
    subway: "10号线,虹桥火车站步行约10分钟",
    address: "上海市闵行区虹翔三路88号",
    price: "6.0~7.5",
    priceRange: "元/m²/天",
    totalUnits: 8,
    availableArea: "300 - 2000m²",
    type: "building", // 写字楼
    coordinates: [121.322, 31.199], // 虹桥商务区高端区域
    images: [
      worldCenter,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/4311f1718f0286191ccf3b1251551b32.jpg",
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
  "7": {
    id: 7,
    name: "中骏广场二期",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站步行约8分钟",
    address: "上海市闵行区申滨路",
    price: "4.0~5.0",
    priceRange: "元/m²/天",
    totalUnits: 6,
    availableArea: "200 - 1800m²",
    type: "building", // 写字楼
    coordinates: [121.318, 31.194], // 虹桥商务区申滨路
    images: [
      zhongjunPlazaImg,
      "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210624/aabe164835b37360a355108fd722a4db.png",
      zhongjunPlazaImg,
      zhongjunPlazaImg,
      zhongjunPlazaImg
    ],
    availableRooms: [
      { area: "200m²", price: "4.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "400m²", price: "4.2元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "600m²", price: "4.8元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "900m²", price: "4.3元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1200m²", price: "4.7元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1800m²", price: "5.0元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "15层",
      elevators: "客梯8部，货梯2部",
      efficiency: "76%",
      propertyCompany: "中骏物业",
      developer: "中骏集团"
    },
    description: "中骏广场二期位于虹桥商务区核心位置，是中骏集团在上海的重点商务项目。项目配备现代化办公设施，周边交通便利，商业配套完善。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },
  "8": {
    id: 8,
    name: "虹桥阿里中心",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站步行约12分钟",
    address: "上海市闵行区申长路",
    price: "4.5~5.5",
    priceRange: "元/m²/天",
    totalUnits: 7,
    availableArea: "250 - 2000m²",
    type: "building", // 写字楼
    coordinates: [121.317, 31.197], // 虹桥商务区申长路
    images: [
      aliCenter,
      aliCenter,
      aliCenter,
      aliCenter
    ],
    availableRooms: [
      { area: "250m²", price: "4.8元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "450m²", price: "4.5元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "700m²", price: "5.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "950m²", price: "4.7元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1300m²", price: "5.2元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1600m²", price: "5.3元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "2000m²", price: "5.5元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "16层",
      elevators: "客梯10部，货梯3部",
      efficiency: "80%",
      propertyCompany: "阿里物业",
      developer: "阿里巴巴集团"
    },
    description: "虹桥阿里中心位于虹桥商务区核心区域，是阿里巴巴在上海的重要布局。项目采用智能化办公系统，配备完善的商务设施，为企业提供高效的办公环境。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },
  "9": {
    id: 9,
    name: "远东国际广场",
    district: "长宁 - 天山路",
    subway: "2号线,娄山关路站步行约5分钟",
    address: "上海市长宁区天山路",
    price: "5.0~6.5",
    priceRange: "元/m²/天",
    totalUnits: 8,
    availableArea: "150 - 1500m²",
    type: "office", // 租办公室
    coordinates: [121.419, 31.223], // 长宁区天山路商圈
    images: [
      yuandongPlaza,
      yuandongPlaza,
      yuandongPlaza,
      yuandongPlaza
    ],
    availableRooms: [
      { area: "150m²", price: "5.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "280m²", price: "5.2元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "420m²", price: "5.8元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "600m²", price: "5.4元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "800m²", price: "6.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1000m²", price: "5.7元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1200m²", price: "6.2元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1500m²", price: "6.5元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.6m",
      totalFloors: "18层",
      elevators: "客梯6部，货梯2部",
      efficiency: "77%",
      propertyCompany: "远东物业",
      developer: "远东集团"
    },
    description: "远东国际广场位于长宁区天山路商圈，地理位置优越，交通便利。项目配备现代化办公设施，周边商业配套齐全，适合各类企业入驻。",
    nearbyBuildings: [
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥万科中心", price: "4.3元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },
  "10": {
    id: 10,
    name: "维璟中心",
    district: "长宁 - 天山路",
    subway: "2号线,娄山关路站步行约6分钟",
    address: "上海市长宁区天山路",
    price: "5.2~6.8",
    priceRange: "元/m²/天",
    totalUnits: 6,
    availableArea: "180 - 1400m²",
    type: "office", // 租办公室
    coordinates: [121.420, 31.222], // 长宁区天山路
    images: [
      weijingCenter,
      weijingCenter,
      weijingCenter,
      weijingCenter
    ],
    availableRooms: [
      { area: "180m²", price: "5.6元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "320m²", price: "5.3元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "500m²", price: "6.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "750m²", price: "5.8元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1000m²", price: "6.4元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1400m²", price: "6.8元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.7m",
      totalFloors: "20层",
      elevators: "客梯8部，货梯2部",
      efficiency: "79%",
      propertyCompany: "维璟物业",
      developer: "维璟集团"
    },
    description: "维璟中心位于长宁区核心商圈，是区域内的高端商务楼宇。项目采用5A级写字楼标准打造，配备智能化办公系统和完善的配套设施。",
    nearbyBuildings: [
      { name: "远东国际广场", price: "5.5元/m²/天", image: yuandongPlaza, link: "/building/9" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },
  "11": {
    id: 11,
    name: "尚嘉中心",
    district: "长宁 - 天山路",
    subway: "2号线,娄山关路站步行约7分钟",
    address: "上海市长宁区天山路",
    price: "5.5~7.0",
    priceRange: "元/m²/天",
    totalUnits: 7,
    availableArea: "200 - 1600m²",
    type: "office", // 租办公室
    coordinates: [121.418, 31.221], // 长宁区天山路商圈
    images: [
      shangjiaCenter,
      shangjiaCenter,
      shangjiaCenter,
      shangjiaCenter
    ],
    availableRooms: [
      { area: "200m²", price: "5.8元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "350m²", price: "5.5元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "550m²", price: "6.3元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "800m²", price: "6.0元/m²/天", decoration: "标准交付", floor: "中区" },
      { area: "1100m²", price: "6.6元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1350m²", price: "6.8元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "1600m²", price: "7.0元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "22层",
      elevators: "客梯10部，货梯3部",
      efficiency: "81%",
      propertyCompany: "尚嘉物业",
      developer: "尚嘉集团"
    },
    description: "尚嘉中心位于长宁区天山路商圈核心位置，是区域地标性建筑。项目定位高端，配备一流的办公设施和物业服务，适合大型企业和跨国公司入驻。",
    nearbyBuildings: [
      { name: "维璟中心", price: "6.0元/m²/天", image: weijingCenter, link: "/building/10" },
      { name: "远东国际广场", price: "5.5元/m²/天", image: yuandongPlaza, link: "/building/9" },
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
    type: "creative", // 创意园区
    coordinates: [121.445, 31.228], // 静安区常德路
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
    type: "creative", // 创意园区
    coordinates: [121.451, 31.289], // 静安区大宁商圈
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
    type: "creative", // 创意园区
    coordinates: [121.465, 31.280], // 闸北区汶水路
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
    address: "上海市静安区共和新路",
    price: "2.9~3.8",
    priceRange: "元/m²/天",
    totalUnits: 8,
    availableArea: "100 - 800m²",
    type: "creative", // 创意园区
    coordinates: [121.452, 31.288], // 静安区共和新路
    images: [
      show800,
      show800,
      show800,
      show800
    ],
    availableRooms: [
      { area: "100m²", price: "3.2元/m²/天", decoration: "精装修", floor: "2F" },
      { area: "150m²", price: "3.0元/m²/天", decoration: "标准交付", floor: "3F" },
      { area: "220m²", price: "3.4元/m²/天", decoration: "精装修", floor: "4F" },
      { area: "300m²", price: "2.9元/m²/天", decoration: "简装", floor: "2F" },
      { area: "420m²", price: "3.6元/m²/天", decoration: "精装修", floor: "5F" },
      { area: "550m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "6F" },
      { area: "680m²", price: "3.7元/m²/天", decoration: "精装修", floor: "7F" },
      { area: "800m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "7层",
      elevators: "客梯2部，货梯1部",
      efficiency: "76%",
      propertyCompany: "德必物业",
      developer: "德必集团"
    },
    description: "大宁德必易园是德必集团在上海的创意园区品牌项目，位于静安区大宁商圈。园区定位于为中小型创意企业提供优质办公空间，配套设施齐全，管理规范。适合设计、文化、科技等行业企业入驻。",
    nearbyBuildings: [
      { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" },
      { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
      { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" }
    ]
  },
  
  "205": {
    id: 205,
    name: "复地四季广场",
    district: "静安 - 大宁",
    subway: "1号线,7号线,上海马戏城站步行约5分钟",
    address: "上海市静安区万荣路",
    price: "3.2~4.2",
    priceRange: "元/m²/天",
    totalUnits: 10,
    availableArea: "120 - 1000m²",
    images: [
      anken,
      anken,
      anken,
      anken
    ],
    availableRooms: [
      { area: "120m²", price: "3.5元/m²/天", decoration: "精装修", floor: "3F" },
      { area: "180m²", price: "3.3元/m²/天", decoration: "标准交付", floor: "4F" },
      { area: "250m²", price: "3.7元/m²/天", decoration: "精装修", floor: "5F" },
      { area: "350m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "6F" },
      { area: "480m²", price: "3.9元/m²/天", decoration: "精装修", floor: "7F" },
      { area: "620m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "8F" },
      { area: "750m²", price: "4.0元/m²/天", decoration: "精装修", floor: "9F" },
      { area: "900m²", price: "3.8元/m²/天", decoration: "标准交付", floor: "10F" },
      { area: "1000m²", price: "4.2元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "10层",
      elevators: "客梯4部，货梯2部",
      efficiency: "78%",
      propertyCompany: "复地物业",
      developer: "复地集团"
    },
    description: "复地四季广场位于大宁商圈核心位置，是集商业、办公于一体的综合性建筑。园区环境优美，配套设施完善，提供多种面积段的办公空间选择。适合各类企业入驻，特别是文化创意、咨询服务类企业。",
    nearbyBuildings: [
      { name: "大宁德必易园", price: "3.3元/m²/天", image: show800, link: "/building/204" },
      { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
      { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" }
    ]
  },
  
  "206": {
    id: 206,
    name: "老码头创意园",
    district: "黄浦 - 董家渡",
    subway: "9号线,小南门站步行约10分钟",
    address: "上海市黄浦区中山南路",
    price: "3.8~5.0",
    priceRange: "元/m²/天",
    totalUnits: 6,
    availableArea: "150 - 800m²",
    coordinates: [121.497, 31.219], // 黄浦江畔董家渡
    images: [
      bridge8,
      bridge8,
      bridge8,
      bridge8
    ],
    availableRooms: [
      { area: "150m²", price: "4.2元/m²/天", decoration: "精装修", floor: "2F" },
      { area: "250m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "3F" },
      { area: "350m²", price: "4.5元/m²/天", decoration: "精装修", floor: "4F" },
      { area: "500m²", price: "4.1元/m²/天", decoration: "标准交付", floor: "5F" },
      { area: "650m²", price: "4.7元/m²/天", decoration: "精装修", floor: "6F" },
      { area: "800m²", price: "5.0元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "4.5m",
      totalFloors: "6层",
      elevators: "货梯2部",
      efficiency: "75%",
      propertyCompany: "老码头物业",
      developer: "上海外滩投资"
    },
    description: "老码头创意园位于黄浦江畔，由百年历史的老码头仓库改造而成。园区保留了历史建筑的独特风貌，融入现代艺术元素，打造独具特色的创意办公空间。适合艺术、设计、文化传媒等行业企业入驻。周边有十六铺等知名商业街区。",
    nearbyBuildings: [
      { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" },
      { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
      { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" }
    ]
  },
  
  "207": {
    id: 207,
    name: "幸福里创意园",
    district: "浦东 - 三林",
    subway: "11号线,三林站步行约8分钟",
    address: "上海市浦东新区永泰路",
    price: "2.8~3.8",
    priceRange: "元/m²/天",
    totalUnits: 9,
    availableArea: "100 - 900m²",
    coordinates: [121.525, 31.169], // 浦东新区三林
    images: [
      show800,
      show800,
      show800,
      show800
    ],
    availableRooms: [
      { area: "100m²", price: "3.0元/m²/天", decoration: "精装修", floor: "2F" },
      { area: "160m²", price: "2.8元/m²/天", decoration: "简装", floor: "3F" },
      { area: "230m²", price: "3.3元/m²/天", decoration: "精装修", floor: "4F" },
      { area: "320m²", price: "3.1元/m²/天", decoration: "标准交付", floor: "5F" },
      { area: "450m²", price: "3.5元/m²/天", decoration: "精装修", floor: "6F" },
      { area: "580m²", price: "3.2元/m²/天", decoration: "标准交付", floor: "7F" },
      { area: "700m²", price: "3.6元/m²/天", decoration: "精装修", floor: "8F" },
      { area: "820m²", price: "3.4元/m²/天", decoration: "标准交付", floor: "9F" },
      { area: "900m²", price: "3.8元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "9层",
      elevators: "客梯3部，货梯1部",
      efficiency: "77%",
      propertyCompany: "幸福里物业",
      developer: "浦东新区国资"
    },
    description: "幸福里创意园位于浦东新区三林商圈，是一座集创意办公、艺术展示、文化交流于一体的综合性创意园区。园区环境优美，配套设施完善，租金性价比高，适合中小型创意企业、初创团队入驻。",
    nearbyBuildings: [
      { name: "安垦汇智创意园", price: "3.2元/m²/天", image: anken, link: "/building/202" },
      { name: "大宁德必易园", price: "3.3元/m²/天", image: show800, link: "/building/204" },
      { name: "复地四季广场", price: "3.5元/m²/天", image: anken, link: "/building/205" }
    ]
  },
  
  "208": {
    id: 208,
    name: "越界·世博园",
    district: "浦东 - 世博园区",
    subway: "7号线,8号线,耀华路站步行约12分钟",
    address: "上海市浦东新区国展路",
    price: "3.5~4.8",
    priceRange: "元/m²/天",
    totalUnits: 11,
    availableArea: "120 - 1100m²",
    coordinates: [121.497, 31.183], // 浦东世博园区
    images: [
      anken,
      anken,
      anken,
      anken
    ],
    availableRooms: [
      { area: "120m²", price: "3.8元/m²/天", decoration: "精装修", floor: "3F" },
      { area: "180m²", price: "3.6元/m²/天", decoration: "标准交付", floor: "4F" },
      { area: "250m²", price: "4.0元/m²/天", decoration: "精装修", floor: "5F" },
      { area: "320m²", price: "3.7元/m²/天", decoration: "标准交付", floor: "6F" },
      { area: "450m²", price: "4.2元/m²/天", decoration: "精装修", floor: "7F" },
      { area: "580m²", price: "3.9元/m²/天", decoration: "标准交付", floor: "8F" },
      { area: "700m²", price: "4.4元/m²/天", decoration: "精装修", floor: "9F" },
      { area: "850m²", price: "4.1元/m²/天", decoration: "标准交付", floor: "10F" },
      { area: "1000m²", price: "4.6元/m²/天", decoration: "精装修", floor: "11F" },
      { area: "1100m²", price: "4.8元/m²/天", decoration: "精装修", floor: "整层" }
    ],
    buildingInfo: {
      floorHeight: "4.2m",
      totalFloors: "11层",
      elevators: "客梯4部，货梯2部",
      efficiency: "79%",
      propertyCompany: "越界物业",
      developer: "越界集团"
    },
    description: "越界·世博园位于浦东世博园区，是越界品牌在上海的旗舰项目。园区定位高端，配备一流的办公设施和配套服务。紧邻世博文化公园，环境优美，适合科技、文化、金融等行业企业入驻。",
    nearbyBuildings: [
      { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
      { name: "老码头创意园", price: "4.2元/m²/天", image: bridge8, link: "/building/206" },
      { name: "幸福里创意园", price: "3.0元/m²/天", image: show800, link: "/building/207" }
    ]
  },

  "301": {
    id: 301,
    name: "虹桥BU中心（独栋）",
    district: "长宁 - 虹桥临空经济园区",
    subway: "10号线,龙溪路站步行约8分钟",
    address: "上海市长宁区金钟路",
    price: "5.8~6.5",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 8600m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.384, 31.210], // 长宁区虹桥临空
    images: [
      hongqiaoBu,
      hongqiaoBu,
      hongqiaoBu,
      hongqiaoBu
    ],
    availableRooms: [
      { area: "8600m²", price: "6.0元/m²/天", decoration: "毛坯可定制", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.5m",
      totalFloors: "6层",
      elevators: "客梯2部，货梯1部",
      efficiency: "85%",
      propertyCompany: "第一太平戴维斯",
      developer: "虹桥临空经济园区开发公司"
    },
    description: "虹桥BU中心位于长宁区虹桥临空经济园区核心位置，独栋建筑面积约8600平方米，适合作为企业总部或区域总部。建筑采用现代化设计，配备完善的办公设施。周边交通便利，临近虹桥枢纽，辐射长三角区域。园区环境优美，配套齐全，适合科技、金融、贸易等行业企业入驻。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥世界中心", price: "5.2元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },

  "302": {
    id: 302,
    name: "力波REEB1987（独栋）",
    district: "普陀 - M50创意园区",
    subway: "3号线,4号线,金沙江路站步行约10分钟",
    address: "上海市普陀区莫干山路50号",
    price: "4.2~5.0",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 6500m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.431, 31.262], // 普陀区M50创意园
    images: [
      liboReeb,
      liboReeb,
      liboReeb,
      liboReeb
    ],
    availableRooms: [
      { area: "6500m²", price: "4.5元/m²/天", decoration: "工业风装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "5.0m",
      totalFloors: "5层",
      elevators: "客梯1部，货梯1部",
      efficiency: "80%",
      propertyCompany: "力波物业",
      developer: "M50创意园区"
    },
    description: "力波REEB1987位于上海著名的M50创意园区内，原为纺织厂房改造而成。建筑保留了工业时代的特色元素，融合现代办公需求。独栋面积约6500平方米，挑高空间适合创意设计、广告传媒、艺术工作室等企业入驻。园区文化氛围浓厚，周边画廊、咖啡馆林立，是上海知名的创意产业聚集地。",
    nearbyBuildings: [
      { name: "800秀创意园", price: "3.5元/m²/天", image: show800, link: "/building/201" },
      { name: "八号桥Ⅳ期", price: "3.8元/m²/天", image: bridge8, link: "/building/203" },
      { name: "安垦汇智创意园", price: "4.0元/m²/天", image: anken, link: "/building/202" }
    ]
  },

  "303": {
    id: 303,
    name: "田林坊（独栋）",
    district: "徐汇 - 漕河泾开发区",
    subway: "9号线,漕河泾开发区站步行约6分钟",
    address: "上海市徐汇区田林路",
    price: "4.8~5.5",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 7200m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.408, 31.158], // 徐汇区漕河泾
    images: [
      tianlinFang,
      tianlinFang,
      tianlinFang,
      tianlinFang
    ],
    availableRooms: [
      { area: "7200m²", price: "5.0元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.2m",
      totalFloors: "8层",
      elevators: "客梯2部，货梯1部",
      efficiency: "82%",
      propertyCompany: "漕河泾物业管理公司",
      developer: "漕河泾开发区总公司"
    },
    description: "田林坊位于徐汇区漕河泾开发区核心地段，独栋建筑面积约7200平方米。建筑设计现代简约，内部精装修标准高。周边为成熟的科技园区，配套设施完善，交通便利。适合科技研发、软件开发、生物医药等高新技术企业作为总部使用。园区创新氛围浓厚，是上海重要的高新技术产业基地。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "SOHO天山广场", price: "5.0元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "维璟中心", price: "4.8元/m²/天", image: weijingCenter, link: "/building/10" }
    ]
  },

  "304": {
    id: 304,
    name: "中骏广场（独栋）",
    district: "长宁 - 虹桥临空经济园区",
    subway: "10号线,龙溪路站步行约5分钟",
    address: "上海市长宁区金钟路",
    price: "6.0~7.0",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 12000m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.383, 31.211], // 长宁区虹桥临空
    images: [
      zhongjunPlaza,
      zhongjunPlaza,
      zhongjunPlaza,
      zhongjunPlaza
    ],
    availableRooms: [
      { area: "12000m²", price: "6.5元/m²/天", decoration: "超甲级装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.8m",
      totalFloors: "10层",
      elevators: "客梯4部，货梯2部",
      efficiency: "88%",
      propertyCompany: "中骏物业",
      developer: "中骏集团"
    },
    description: "中骏广场独栋位于长宁区虹桥临空经济园区核心位置，总建筑面积约12000平方米。建筑品质优异，达到超甲级写字楼标准。地理位置优越，紧邻虹桥枢纽，交通极为便利。周边商务氛围成熟，配套设施一流。适合大型企业总部、跨国公司区域总部等高端企业入驻。建筑设计现代化，智能化程度高，是企业形象展示的理想选择。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥汇", price: "4.5元/m²/天", image: hongqiaoHui, link: "/building/3" },
      { name: "虹桥世界中心", price: "5.2元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },

  "305": {
    id: 305,
    name: "虹桥正荣中心（独栋）",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥2号航站楼站步行约8分钟",
    address: "上海市闵行区申滨路",
    price: "5.5~6.2",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 9500m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.315, 31.195], // 闵行区虹桥商务区
    images: [
      hongqiaoZhengrong,
      hongqiaoZhengrong,
      hongqiaoZhengrong,
      hongqiaoZhengrong
    ],
    availableRooms: [
      { area: "9500m²", price: "5.8元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.5m",
      totalFloors: "8层",
      elevators: "客梯3部，货梯1部",
      efficiency: "85%",
      propertyCompany: "正荣物业",
      developer: "正荣集团"
    },
    description: "虹桥正荣中心位于闵行区虹桥商务区核心区域，独栋建筑面积约9500平方米。紧邻虹桥枢纽，交通四通八达，辐射长三角及全国。建筑设计现代大气，内部精装修标准高，配套设施完善。适合金融、贸易、科技等行业的企业总部入驻。周边商务氛围成熟，是上海西部重要的商务中心。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },

  "306": {
    id: 306,
    name: "MAX科技园（独栋）",
    district: "闵行 - 紫竹高新技术产业开发区",
    subway: "5号线,剑川路站步行约15分钟",
    address: "上海市闵行区东川路",
    price: "3.8~4.5",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 8000m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.488, 31.021], // 闵行区紫竹高新区
    images: [
      maxTech,
      maxTech,
      maxTech,
      maxTech
    ],
    availableRooms: [
      { area: "8000m²", price: "4.0元/m²/天", decoration: "标准交付", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "7层",
      elevators: "客梯2部，货梯1部",
      efficiency: "80%",
      propertyCompany: "紫竹物业",
      developer: "紫竹高新区开发公司"
    },
    description: "MAX科技园位于闵行区紫竹高新技术产业开发区，独栋建筑面积约8000平方米。园区定位高新技术产业，周边高校、科研机构密集，人才资源丰富。适合科技研发、软件开发、人工智能等创新型企业入驻。建筑设计简约实用，性价比高。园区配套设施完善，创新创业氛围浓厚。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "田林坊（独栋）", price: "5.0元/m²/天", image: tianlinFang, link: "/building/303" },
      { name: "容大中心（独栋）", price: "4.2元/m²/天", image: rongdaCenter, link: "/building/308" }
    ]
  },

  "307": {
    id: 307,
    name: "平金中心（独栋）",
    district: "浦东 - 金桥出口加工区",
    subway: "6号线,9号线,金桥路站步行约10分钟",
    address: "上海市浦东新区金桥路",
    price: "4.5~5.2",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 10500m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.605, 31.268], // 浦东新区金桥
    images: [
      pingjinCenter,
      pingjinCenter,
      pingjinCenter,
      pingjinCenter
    ],
    availableRooms: [
      { area: "10500m²", price: "4.8元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.3m",
      totalFloors: "9层",
      elevators: "客梯3部，货梯2部",
      efficiency: "83%",
      propertyCompany: "金桥物业",
      developer: "金桥集团"
    },
    description: "平金中心位于浦东新区金桥出口加工区核心位置，独栋建筑面积约10500平方米。园区产业配套完善，适合制造业、贸易、物流等企业总部入驻。建筑设计现代化，内部精装修，办公环境优越。周边交通便利，距离浦东机场约30分钟车程，地理位置优越。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" },
      { name: "虹桥阿里中心", price: "6.0元/m²/天", image: aliCenter, link: "/building/8" }
    ]
  },

  "308": {
    id: 308,
    name: "容大中心（独栋）",
    district: "闵行 - 莘庄工业区",
    subway: "1号线,莘庄站步行约12分钟",
    address: "上海市闵行区莘朱路",
    price: "3.5~4.2",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 7500m²",
    type: "headquarters", // 总部独栋
    coordinates: [121.382, 31.110], // 闵行区莘庄
    images: [
      rongdaCenter,
      rongdaCenter,
      rongdaCenter,
      rongdaCenter
    ],
    availableRooms: [
      { area: "7500m²", price: "3.8元/m²/天", decoration: "标准交付", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "6层",
      elevators: "客梯2部，货梯1部",
      efficiency: "78%",
      propertyCompany: "容大物业",
      developer: "莘庄工业区开发公司"
    },
    description: "容大中心位于闵行区莘庄工业区，独栋建筑面积约7500平方米。园区产业基础扎实，适合制造业、研发中心等企业入驻。建筑实用性强，性价比高。周边生活配套齐全，交通便利。是中小型企业总部的理想选择。",
    nearbyBuildings: [
      { name: "MAX科技园（独栋）", price: "4.0元/m²/天", image: maxTech, link: "/building/306" },
      { name: "田林坊（独栋）", price: "5.0元/m²/天", image: tianlinFang, link: "/building/303" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },

  "309": {
    id: 309,
    name: "E通世界·华新园（独栋）",
    district: "青浦 - 华新镇",
    subway: "17号线,赵巷站步行约20分钟",
    address: "上海市青浦区华新镇",
    price: "3.0~3.8",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 6800m²",
    coordinates: [121.186, 31.131], // 青浦区华新镇
    images: [
      hongqiaoBu,
      hongqiaoBu,
      hongqiaoBu,
      hongqiaoBu
    ],
    availableRooms: [
      { area: "6800m²", price: "3.2元/m²/天", decoration: "简装", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "5层",
      elevators: "客梯1部，货梯1部",
      efficiency: "75%",
      propertyCompany: "华新物业",
      developer: "青浦工业园区"
    },
    description: "E通世界·华新园位于青浦区华新镇，独栋建筑面积约6800平方米。园区环境优美，租金实惠，适合制造业、物流、电商等企业作为总部或运营中心。虽然距离市区较远，但交通逐步改善，性价比优势明显。适合对成本敏感的初创企业和中小企业。",
    nearbyBuildings: [
      { name: "虹桥正荣中心（独栋）", price: "5.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" },
      { name: "虹桥BU中心（独栋）", price: "6.0元/m²/天", image: hongqiaoBu, link: "/building/301" },
      { name: "中骏广场（独栋）", price: "6.5元/m²/天", image: zhongjunPlaza, link: "/building/304" }
    ]
  },

  "310": {
    id: 310,
    name: "丰隆虹桥中心（独栋）",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站站步行约10分钟",
    address: "上海市闵行区申虹路",
    price: "5.8~6.5",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 11000m²",
    coordinates: [121.316, 31.194], // 闵行区虹桥商务区
    images: [
      liboReeb,
      liboReeb,
      liboReeb,
      liboReeb
    ],
    availableRooms: [
      { area: "11000m²", price: "6.0元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.5m",
      totalFloors: "9层",
      elevators: "客梯4部，货梯2部",
      efficiency: "86%",
      propertyCompany: "丰隆亚洲",
      developer: "丰隆集团"
    },
    description: "丰隆虹桥中心位于闵行区虹桥商务区核心位置，独栋建筑面积约11000平方米。由新加坡丰隆集团开发，建筑品质优异，管理专业。紧邻虹桥枢纽，交通极为便利。周边商务配套完善，适合大型企业总部、跨国公司区域总部入驻。是虹桥商务区的标志性独栋建筑之一。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥世界中心", price: "5.2元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "虹桥正荣中心（独栋）", price: "5.8元/m²/天", image: hongqiaoZhengrong, link: "/building/305" }
    ]
  },

  "311": {
    id: 311,
    name: "虹桥展汇（独栋）",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站站步行约8分钟",
    address: "上海市闵行区盈港东路",
    price: "5.2~6.0",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 9200m²",
    coordinates: [121.314, 31.192], // 闵行区虹桥商务区
    images: [
      tianlinFang,
      tianlinFang,
      tianlinFang,
      tianlinFang
    ],
    availableRooms: [
      { area: "9200m²", price: "5.5元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.3m",
      totalFloors: "8层",
      elevators: "客梯3部，货梯1部",
      efficiency: "84%",
      propertyCompany: "虹桥商务区物业",
      developer: "虹桥商务区开发公司"
    },
    description: "虹桥展汇独栋位于闵行区虹桥商务区核心区域，建筑面积约9200平方米。毗邻国家会展中心，地理位置优越。建筑设计现代化，内部精装修标准高。适合会展服务、贸易、咨询等行业企业总部入驻。周边商务氛围成熟，配套设施一流，是企业形象展示的理想选择。",
    nearbyBuildings: [
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" },
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" }
    ]
  },

  "312": {
    id: 312,
    name: "中建锦绣天地（独栋）",
    district: "闵行 - 七宝商务区",
    subway: "9号线,七宝站步行约8分钟",
    address: "上海市闵行区漕宝路",
    price: "4.2~5.0",
    priceRange: "元/m²/天",
    totalUnits: 1,
    availableArea: "整栋 8500m²",
    images: [
      maxTech,
      maxTech,
      maxTech,
      maxTech
    ],
    availableRooms: [
      { area: "8500m²", price: "4.5元/m²/天", decoration: "精装修", floor: "整栋" }
    ],
    buildingInfo: {
      floorHeight: "4.2m",
      totalFloors: "7层",
      elevators: "客梯2部，货梯1部",
      efficiency: "81%",
      propertyCompany: "中建物业",
      developer: "中国建筑"
    },
    description: "中建锦绣天地位于闵行区七宝商务区，独栋建筑面积约8500平方米。由中国建筑开发，建筑品质可靠。七宝地区商业氛围浓厚，生活配套完善。交通便利，地铁直达市中心各区域。适合贸易、服务、科技等行业企业总部入驻。性价比较高，是企业总部的优质选择。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "容大中心（独栋）", price: "3.8元/m²/天", image: rongdaCenter, link: "/building/308" },
      { name: "田林坊（独栋）", price: "5.0元/m²/天", image: tianlinFang, link: "/building/303" }
    ]
  },

  // ==================== 联合办公 (ID: 101-114) ====================
  
  "101": {
    id: 101,
    name: "WeWork威海路旗舰店",
    district: "静安 - 静安寺",
    subway: "2号线,7号线,静安寺站步行约3分钟",
    address: "上海市静安区威海路696号",
    price: "1800~3500",
    priceRange: "元/工位/月",
    totalUnits: 450,
    availableArea: "1-50工位",
    coordinates: [121.450, 31.227], // 静安寺商圈
    images: [
      wework1,
      wework1,
      wework1,
      wework1
    ],
    availableRooms: [
      { area: "1工位", price: "3500元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3200元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2400元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-50工位", price: "2000元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "15层",
      elevators: "客梯8部",
      efficiency: "85%",
      propertyCompany: "WeWork中国",
      developer: "WeWork"
    },
    description: "WeWork威海路旗舰店位于静安寺核心商圈，是WeWork在上海的标志性空间之一。空间设计现代时尚，配备高速WiFi、会议室、电话亭、打印设备等全套办公设施。社区氛围活跃，定期举办各类社交和商业活动。适合初创企业、自由职业者和中小型团队。24小时门禁系统，安全便捷。周边餐饮、商业配套完善，地铁直达。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" }
    ]
  },

  "102": {
    id: 102,
    name: "WeWork虹桥天地",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站步行约5分钟",
    address: "上海市闵行区苏虹路333号",
    price: "1600~3200",
    priceRange: "元/工位/月",
    totalUnits: 380,
    availableArea: "1-50工位",
    coordinates: [121.320, 31.198], // 虹桥天地
    images: [
      weworkTiandi,
      weworkTiandi,
      weworkTiandi,
      weworkTiandi
    ],
    availableRooms: [
      { area: "1工位", price: "3200元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "2900元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2100元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-50工位", price: "1800元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "12层",
      elevators: "客梯6部",
      efficiency: "83%",
      propertyCompany: "WeWork中国",
      developer: "WeWork"
    },
    description: "WeWork虹桥天地位于虹桥商务区核心位置，紧邻虹桥交通枢纽。空间设计融合了WeWork的全球标准与本地特色，提供灵活的办公解决方案。配备专业级会议室、活动空间、休闲区等设施。社区成员来自科技、金融、贸易等多个行业，商务资源丰富。适合需要便利交通和国际化办公环境的团队。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },

  "103": {
    id: 103,
    name: "Distrii办伴·淮海中路",
    district: "黄浦 - 淮海中路",
    subway: "1号线,10号线,13号线,陕西南路站步行约2分钟",
    address: "上海市黄浦区淮海中路",
    price: "2000~3800",
    priceRange: "元/工位/月",
    totalUnits: 320,
    availableArea: "1-40工位",
    coordinates: [121.466, 31.221], // 黄浦区淮海中路
    images: [
      distrii1,
      distrii1,
      distrii1,
      distrii1
    ],
    availableRooms: [
      { area: "1工位", price: "3800元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3400元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "3000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2600元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-40工位", price: "2200元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.6m",
      totalFloors: "10层",
      elevators: "客梯4部",
      efficiency: "82%",
      propertyCompany: "Distrii办伴",
      developer: "Distrii办伴"
    },
    description: "Distrii办伴淮海中路店位于上海时尚核心商圈，周边奢侈品牌云集，商业氛围浓厚。空间设计融合了现代艺术与商务功能，提供高品质的办公体验。配备智能门禁、云打印、高速网络等设施。定期举办行业沙龙和社交活动，助力企业拓展商务网络。适合时尚、设计、咨询等行业的创业团队。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },

  "104": {
    id: 104,
    name: "Distrii办伴·环贸广场",
    district: "浦东 - 陆家嘴",
    subway: "2号线,9号线,陆家嘴站步行约5分钟",
    address: "上海市浦东新区陆家嘴环路1233号",
    price: "2200~4000",
    priceRange: "元/工位/月",
    totalUnits: 400,
    availableArea: "1-60工位",
    coordinates: [121.502, 31.238], // 陆家嘴环贸广场
    images: [
      distriiGuanjie,
      distriiGuanjie,
      distriiGuanjie,
      distriiGuanjie
    ],
    availableRooms: [
      { area: "1工位", price: "4000元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3600元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "3200元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-60工位", price: "2400元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "20层",
      elevators: "客梯12部",
      efficiency: "85%",
      propertyCompany: "Distrii办伴",
      developer: "Distrii办伴"
    },
    description: "Distrii办伴环贸广场店位于陆家嘴金融核心区，享有浦江景观和城市天际线视野。空间设计高端大气，配备顶级办公设施和服务。社区成员多为金融、投资、咨询等高端服务业企业。提供专属会议室、路演厅、商务洽谈区等空间。适合对办公环境和企业形象有高要求的团队。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" }
    ]
  },

  "105": {
    id: 105,
    name: "优客工场·静安嘉里中心",
    district: "静安 - 南京西路",
    subway: "2号线,7号线,静安寺站步行约5分钟",
    address: "上海市静安区南京西路1515号",
    price: "2000~3600",
    priceRange: "元/工位/月",
    totalUnits: 350,
    availableArea: "1-50工位",
    coordinates: [121.454, 31.228], // 静安嘉里中心
    images: [
      umon1,
      umon1,
      umon1,
      umon1
    ],
    availableRooms: [
      { area: "1工位", price: "3600元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3200元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2400元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-50工位", price: "2000元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.6m",
      totalFloors: "12层",
      elevators: "客梯6部",
      efficiency: "84%",
      propertyCompany: "优客工场",
      developer: "优客工场"
    },
    description: "优客工场静安嘉里中心店位于南京西路商圈核心，毗邻高端商场和五星级酒店。空间设计兼顾商务与舒适，配备全套办公设施和服务。社区活动丰富，涵盖行业交流、技能培训、休闲娱乐等多个方面。提供企业服务对接平台，助力企业快速成长。适合互联网、文创、咨询等行业团队。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },

  "106": {
    id: 106,
    name: "优客工场·虹桥南丰城",
    district: "闵行 - 虹桥商务区",
    subway: "2号线,10号线,虹桥火车站步行约8分钟",
    address: "上海市闵行区申长路869号",
    price: "1500~2800",
    priceRange: "元/工位/月",
    totalUnits: 300,
    availableArea: "1-40工位",
    coordinates: [121.318, 31.197], // 虹桥商务区南丰城
    images: [
      umonHongqiao,
      umonHongqiao,
      umonHongqiao,
      umonHongqiao
    ],
    availableRooms: [
      { area: "1工位", price: "2800元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "2500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2200元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "1900元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-40工位", price: "1600元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "10层",
      elevators: "客梯5部",
      efficiency: "82%",
      propertyCompany: "优客工场",
      developer: "优客工场"
    },
    description: "优客工场虹桥南丰城店位于虹桥商务区，紧邻虹桥交通枢纽和南丰城购物中心。空间设计现代简约，功能齐全。配备会议室、洽谈区、休闲区等多功能空间。社区氛围友好，定期举办创业交流和商务对接活动。适合需要便利交通和商业配套的初创企业和中小团队。性价比优秀。",
    nearbyBuildings: [
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" }
    ]
  },

  "107": {
    id: 107,
    name: "雷格斯·1788国际中心",
    district: "浦东 - 世纪大道",
    subway: "2号线,4号线,6号线,9号线,世纪大道站步行约3分钟",
    address: "上海市浦东新区世纪大道1788号",
    price: "2500~4500",
    priceRange: "元/工位/月",
    totalUnits: 280,
    availableArea: "1-30工位",
    coordinates: [121.538, 31.232], // 世纪大道1788号
    images: [
      regus1788,
      regus1788,
      regus1788,
      regus1788
    ],
    availableRooms: [
      { area: "1工位", price: "4500元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "4000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "3500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "3000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-30工位", price: "2700元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "18层",
      elevators: "客梯8部",
      efficiency: "86%",
      propertyCompany: "雷格斯中国",
      developer: "雷格斯"
    },
    description: "雷格斯1788国际中心位于浦东世纪大道商圈，是雷格斯在上海的高端商务中心。空间设计专业高雅，提供私密办公室和灵活工位选择。配备专业前台接待、商务秘书服务、高端会议室等设施。适合对商务形象和服务品质有高要求的企业。社区成员多为金融、法律、咨询等专业服务机构。",
    nearbyBuildings: [
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" },
      { name: "虹桥阿里中心", price: "6.0元/m²/天", image: aliCenter, link: "/building/8" }
    ]
  },

  "108": {
    id: 108,
    name: "氪空间·绿谷广场",
    district: "浦东 - 张江高科",
    subway: "2号线,张江高科站步行约8分钟",
    address: "上海市浦东新区张衡路1000号",
    price: "1200~2200",
    priceRange: "元/工位/月",
    totalUnits: 400,
    availableArea: "1-60工位",
    coordinates: [121.604, 31.201], // 张江高科绿谷广场
    images: [
      krspaceLvgu,
      krspaceLvgu,
      krspaceLvgu,
      krspaceLvgu
    ],
    availableRooms: [
      { area: "1工位", price: "2200元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "2000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "1800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "1500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-60工位", price: "1300元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.5m",
      totalFloors: "8层",
      elevators: "客梯4部",
      efficiency: "80%",
      propertyCompany: "氪空间",
      developer: "氪空间"
    },
    description: "氪空间绿谷广场店位于张江高科技园区核心位置，周边高科技企业云集。空间设计强调科技感与实用性，配备专业办公设施和创业服务。提供投融资对接、法律咨询、财税服务等增值服务。社区氛围开放创新，定期举办技术分享和创业沙龙。适合科技创业团队和研发中心。租金性价比高。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" }
    ]
  },

  "109": {
    id: 109,
    name: "快易居·万通中心",
    district: "静安 - 江宁路",
    subway: "2号线,13号线,江宁路站步行约5分钟",
    address: "上海市静安区江宁路631号",
    price: "1600~2800",
    priceRange: "元/工位/月",
    totalUnits: 250,
    availableArea: "1-35工位",
    coordinates: [121.448, 31.250], // 静安区江宁路
    images: [
      kuaiyiWantong,
      kuaiyiWantong,
      kuaiyiWantong,
      kuaiyiWantong
    ],
    availableRooms: [
      { area: "1工位", price: "2800元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "2500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2200元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "1900元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-35工位", price: "1700元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.4m",
      totalFloors: "12层",
      elevators: "客梯5部",
      efficiency: "81%",
      propertyCompany: "快易居",
      developer: "快易居"
    },
    description: "快易居万通中心店位于静安区江宁路商圈，交通便利，周边配套完善。空间设计简洁实用，提供灵活的办公解决方案。配备基础办公设施和服务，性价比优秀。社区氛围友好，适合初创企业和小型团队。提供企业注册、财税代理等配套服务，降低创业门槛。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" }
    ]
  },

  "110": {
    id: 110,
    name: "德事·嘉里中心",
    district: "静安 - 南京西路",
    subway: "2号线,7号线,静安寺站步行约6分钟",
    address: "上海市静安区南京西路1376号",
    price: "2200~4200",
    priceRange: "元/工位/月",
    totalUnits: 320,
    availableArea: "1-40工位",
    coordinates: [121.449, 31.225], // 嘉里中心
    images: [
      deshiKerry,
      deshiKerry,
      deshiKerry,
      deshiKerry
    ],
    availableRooms: [
      { area: "1工位", price: "4200元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "3300元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-40工位", price: "2400元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.8m",
      totalFloors: "15层",
      elevators: "客梯7部",
      efficiency: "85%",
      propertyCompany: "德事商务中心",
      developer: "德事"
    },
    description: "德事嘉里中心位于静安寺核心商圈，是德事在上海的旗舰店。空间设计高端专业，提供私密办公室和开放工位。配备专业前台、会议室、商务休息室等设施。提供企业秘书、IT支持、行政服务等全方位商务服务。社区成员多为跨国公司和专业服务机构。适合对办公品质和商务形象有高标准的企业。",
    nearbyBuildings: [
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" }
    ]
  },

  "111": {
    id: 111,
    name: "WIZ WORK·环球港",
    district: "普陀 - 长寿路",
    subway: "3号线,4号线,13号线,金沙江路站步行约5分钟",
    address: "上海市普陀区中山北路3300号",
    price: "1400~2600",
    priceRange: "元/工位/月",
    totalUnits: 360,
    availableArea: "1-50工位",
    coordinates: [121.436, 31.252], // 环球港
    images: [
      wizworkHuanqiugang,
      wizworkHuanqiugang,
      wizworkHuanqiugang,
      wizworkHuanqiugang
    ],
    availableRooms: [
      { area: "1工位", price: "2600元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "2300元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "2000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "1700元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-50工位", price: "1500元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.6m",
      totalFloors: "14层",
      elevators: "客梯6部",
      efficiency: "83%",
      propertyCompany: "WIZ WORK",
      developer: "WIZ WORK"
    },
    description: "WIZ WORK环球港店位于月星环球港购物中心，商业配套极其完善。空间设计时尚现代，融合休闲与商务元素。配备会议室、活动空间、健身房等多元化设施。社区活动丰富，注重工作生活平衡。适合文创、设计、电商等行业团队。购物、餐饮、娱乐一应俱全，工作之余可享受便利生活。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "虹桥万科中心", price: "4.5元/m²/天", image: vankeCenter, link: "/building/1" },
      { name: "虹桥国际展汇", price: "2.5元/m²/天", image: exhibitionHub, link: "/building/2" }
    ]
  },

  "112": {
    id: 112,
    name: "寰图·白玉兰广场",
    district: "黄浦 - 人民广场",
    subway: "1号线,2号线,8号线,人民广场站步行约8分钟",
    address: "上海市黄浦区延安东路1号",
    price: "2800~5000",
    priceRange: "元/工位/月",
    totalUnits: 280,
    availableArea: "1-30工位",
    coordinates: [121.477, 31.235], // 白玉兰广场
    images: [
      huantuBaiyulan,
      huantuBaiyulan,
      huantuBaiyulan,
      huantuBaiyulan
    ],
    availableRooms: [
      { area: "1工位", price: "5000元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "4500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "4000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "3500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-30工位", price: "3000元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "4.2m",
      totalFloors: "66层",
      elevators: "客梯16部",
      efficiency: "88%",
      propertyCompany: "寰图",
      developer: "寰图"
    },
    description: "寰图白玉兰广场店位于上海地标建筑白玉兰广场内，享有城市全景视野。空间设计奢华精致，提供顶级办公体验。配备米其林级餐饮、健身房、艺术展厅等高端配套设施。提供管家式服务，满足企业各类商务需求。社区成员多为金融、投资、高端服务业精英。适合追求极致办公体验的企业和团队。",
    nearbyBuildings: [
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" },
      { name: "虹桥阿里中心", price: "6.0元/m²/天", image: aliCenter, link: "/building/8" }
    ]
  },

  "113": {
    id: 113,
    name: "大树下·TX淮海天地",
    district: "黄浦 - 淮海中路",
    subway: "10号线,13号线,新天地站步行约3分钟",
    address: "上海市黄浦区淮海中路523号",
    price: "2400~4200",
    priceRange: "元/工位/月",
    totalUnits: 300,
    availableArea: "1-40工位",
    coordinates: [121.473, 31.220], // TX淮海天地
    images: [
      dashuxiaTianjie,
      dashuxiaTianjie,
      dashuxiaTianjie,
      dashuxiaTianjie
    ],
    availableRooms: [
      { area: "1工位", price: "4200元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "3800元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "3300元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "2900元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-40工位", price: "2600元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "3.7m",
      totalFloors: "12层",
      elevators: "客梯5部",
      efficiency: "84%",
      propertyCompany: "大树下",
      developer: "大树下"
    },
    description: "大树下TX淮海天地位于新天地时尚商圈，是大树下在上海的旗舰空间。设计融合海派文化与现代商务，艺术氛围浓厚。配备高端办公设施、咖啡吧、艺术展览空间等。社区活动多元，涵盖商务、艺术、文化等领域。适合时尚、设计、文创、咨询等行业。周边餐饮娱乐配套顶级，工作生活品质极高。",
    nearbyBuildings: [
      { name: "虹桥天地", price: "5.5元/m²/天", image: hongqiaoTiandi, link: "/building/5" },
      { name: "SOHO天山广场", price: "5.8元/m²/天", image: sohoTianshan, link: "/building/4" },
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" }
    ]
  },

  "114": {
    id: 114,
    name: "艾客·外滩金融中心",
    district: "黄浦 - 外滩",
    subway: "2号线,10号线,南京东路站步行约8分钟",
    address: "上海市黄浦区中山东二路",
    price: "3000~5500",
    priceRange: "元/工位/月",
    totalUnits: 250,
    availableArea: "1-30工位",
    coordinates: [121.490, 31.239], // 外滩金融中心
    images: [
      aikeWaitan,
      aikeWaitan,
      aikeWaitan,
      aikeWaitan
    ],
    availableRooms: [
      { area: "1工位", price: "5500元/月", decoration: "精装修", floor: "全楼层" },
      { area: "2-4工位", price: "5000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "5-10工位", price: "4500元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "10-20工位", price: "4000元/工位/月", decoration: "精装修", floor: "全楼层" },
      { area: "20-30工位", price: "3500元/工位/月", decoration: "精装修", floor: "全楼层" }
    ],
    buildingInfo: {
      floorHeight: "4.0m",
      totalFloors: "28层",
      elevators: "客梯10部",
      efficiency: "87%",
      propertyCompany: "艾客",
      developer: "艾客"
    },
    description: "艾客外滩金融中心位于外滩核心区域，享有黄浦江和城市天际线景观。空间设计奢华典雅，融合海派建筑风格与现代商务元素。配备顶级办公设施、私密会议室、商务洽谈室、江景休息区等。提供高端商务服务和私人定制服务。社区成员多为金融、投资、高端服务业领军企业。是上海最顶级的联合办公空间之一。",
    nearbyBuildings: [
      { name: "虹桥世界中心", price: "6.5元/m²/天", image: worldCenter, link: "/building/6" },
      { name: "中骏广场二期", price: "5.0元/m²/天", image: zhongjunPlazaImg, link: "/building/7" },
      { name: "虹桥阿里中心", price: "6.0元/m²/天", image: aliCenter, link: "/building/8" }
    ]
  },
  "35": {
    id: 35,
    name: "金茂大厦",
    district: "浦东 - 陆家嘴",
    subway: "2号线,陆家嘴站步行约5分钟",
    address: "上海市浦东新区世纪大道88号",
    price: "10.0~15.0",
    priceRange: "元/m²/天",
    totalUnits: 12,
    availableArea: "200 - 5000m²",
    type: "building",
    coordinates: [121.506, 31.239],
    images: [
      "https://img.zcool.cn/community/01b8a95cd4c0e0a8012193a35a1e9b.jpg",
      "https://img.zcool.cn/community/01b8a95cd4c0e0a8012193a35a1e9b.jpg"
    ],
    availableRooms: [
      { area: "200m²", price: "12.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "350m²", price: "13.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "500m²", price: "14.0元/m²/天", decoration: "豪华装修", floor: "超高区" },
      { area: "800m²", price: "11.0元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "1000m²", price: "15.0元/m²/天", decoration: "豪华装修", floor: "超高区" },
      { area: "1500m²", price: "14.5元/m²/天", decoration: "豪华装修", floor: "高区" },
      { area: "2000m²", price: "13.5元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "2500m²", price: "12.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "3000m²", price: "11.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "3500m²", price: "10.5元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "4000m²", price: "10.0元/m²/天", decoration: "标准交付", floor: "低区" },
      { area: "5000m²", price: "11.0元/m²/天", decoration: "精装修", floor: "中区" }
    ],
    buildingInfo: {
      floorHeight: "4m",
      totalFloors: "88层",
      elevators: "客梯22部，货梯3部",
      efficiency: "75%",
      propertyCompany: "金茂物业",
      developer: "中国金茂"
    },
    description: "金茂大厦位于上海浦东新区陆家嘴金融贸易区，地处东方明珠旁，与外滩隔江相望。楼高420.5米，是上海第3高的摩天大楼（截至2016年），世界第8高楼，堪称上海的一座地标性建筑。曾经是中国大陆最高的大楼，目前是上海最高的平顶式大楼。2005年荣获世界高层建筑学会（CTBUH）世界最佳高层建筑奖，成为中国建筑的骄傲。大厦拥有多项世界之最的金茂大厦，已成为上海的标志性建筑和名片。",
    nearbyBuildings: [
      { name: "环球金融中心", price: "11.0元/m²/天", image: worldCenter, link: "/building/36" },
      { name: "国金中心", price: "12.0元/m²/天", image: vankeCenter, link: "/building/37" },
      { name: "上海中心", price: "13.0元/m²/天", image: exhibitionHub, link: "/building/38" }
    ]
  },
  "36": {
    id: 36,
    name: "环球金融中心",
    district: "浦东 - 陆家嘴",
    subway: "2号线,陆家嘴站步行约3分钟",
    address: "上海市浦东新区世纪大道100号",
    price: "11.0~16.0",
    priceRange: "元/m²/天",
    totalUnits: 10,
    availableArea: "180 - 4500m²",
    type: "building",
    coordinates: [121.507, 31.240],
    images: [
      worldCenter,
      worldCenter
    ],
    availableRooms: [
      { area: "180m²", price: "13.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "300m²", price: "14.0元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "450m²", price: "15.0元/m²/天", decoration: "豪华装修", floor: "超高区" },
      { area: "700m²", price: "12.0元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "900m²", price: "16.0元/m²/天", decoration: "豪华装修", floor: "超高区" },
      { area: "1200m²", price: "15.5元/m²/天", decoration: "豪华装修", floor: "高区" },
      { area: "1800m²", price: "14.5元/m²/天", decoration: "精装修", floor: "高区" },
      { area: "2500m²", price: "13.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "3200m²", price: "12.5元/m²/天", decoration: "精装修", floor: "中区" },
      { area: "4500m²", price: "11.0元/m²/天", decoration: "标准交付", floor: "低区" }
    ],
    buildingInfo: {
      floorHeight: "4m",
      totalFloors: "101层",
      elevators: "客梯24部，货梯4部",
      efficiency: "76%",
      propertyCompany: "森大厦物业",
      developer: "森大厦株式会社"
    },
    description: "上海环球金融中心是位于中国上海陆家嘴的一栋摩天大楼，楼高492米，地上101层。2008年8月29日竣工。开发商为上海环球金融中心有限公司，由日本森大厦公司主导兴建。是一座综合商业大厦，其中包括办公楼、观光设施、会议设施、酒店、商业设施等。",
    nearbyBuildings: [
      { name: "金茂大厦", price: "10.0元/m²/天", image: vankeCenter, link: "/building/35" },
      { name: "国金中心", price: "12.0元/m²/天", image: vankeCenter, link: "/building/37" },
      { name: "上海中心", price: "13.0元/m²/天", image: exhibitionHub, link: "/building/38" }
    ]
  }
};

// 商圈数据
export const districtData: DistrictData[] = [
  { name: "虹桥商务区", image: hongqiaoBusiness, aid: "99" },
  { name: "徐泾/西虹桥", image: districtPlaceholder, aid: "108" },
  { name: "虹桥临空经济区", image: hongqiaoAirport, aid: "86" },
  { name: "虹桥古北开发区", image: gubei, aid: "87" },
  { name: "人民广场", image: renminSquare, aid: "63" },
  { name: "长风商务区", image: changfeng, aid: "91" },
  { name: "莘庄商务区", image: xinzhuang, aid: "101" },
  { name: "陆家嘴", image: lujiazui, aid: "48" },
];

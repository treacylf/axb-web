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
export const buildingData: Record<string, BuildingData> = {
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
    district: "闵行 - 虹桥商务区",
    subway: "2号线,娄山关路站步行约8分钟",
    address: "上海市闵行区天山路",
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
    description: "SOHO天山广场位于闵行区虹桥商务区，是SOHO中国在上海的标志性项目之一。项目采用现代化设计理念，配备智能化办公系统，为企业提供高品质的办公环境。周边商业配套完善，交通便利。",
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
    images: [
      hongqiaoTiandi,
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
    images: [
      zhongjunPlazaImg,
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
    address: "上海市静安区共和新路",
    price: "2.9~3.8",
    priceRange: "元/m²/天",
    totalUnits: 8,
    availableArea: "100 - 800m²",
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
  }
};

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("不限");
  const [selectedSubway, setSelectedSubway] = useState("不限");
  const [selectedArea, setSelectedArea] = useState("不限");
  const [selectedPrice, setSelectedPrice] = useState("单价不限");

  const quickLinks = [
    { label: "虹桥商务区", color: "bg-red-500" },
    { label: "共享办公室", color: "bg-orange-500" },
    { label: "近地铁写字楼", color: "bg-blue-500" },
  ];

  const districts = ["不限", "静安", "浦东", "黄浦", "徐汇", "长宁", "普陀", "青浦", "松江", "金山", "宝山", "嘉定", "闵行", "奉贤", "金山", "全市"];
  const subways = ["不限", "1号线", "2号线", "3号线", "4号线", "5号线", "6号线", "7号线", "8号线", "9号线", "10号线", "11号线", "12号线", "13号线", "14号线", "15号线", "16号线", "17号线", "18号线", "19号线", "20号线"];
  const areas = ["不限", "100m²以下", "100-200m²", "200-300m²", "300-500m²", "500-1000m²", "1000m²以上"];
  const prices = ["单价不限", "3元以下", "3-4元", "4-5元", "5-7元", "7-9元", "9-12元", "12元以上"];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedDistrict !== "不限") params.set("district", selectedDistrict);
    if (selectedSubway !== "不限") params.set("subway", selectedSubway);
    if (selectedArea !== "不限") params.set("area", selectedArea);
    if (selectedPrice !== "单价不限") params.set("price", selectedPrice);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 pb-3 md:pb-6">
        <div className="mx-auto max-w-5xl">
          {/* 快捷标签 */}
          <div className="mb-2 flex flex-wrap justify-center gap-2 md:mb-3">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                className={`${link.color} rounded px-3 py-1 text-xs font-medium text-white hover:opacity-90 md:px-4 md:py-1.5 md:text-sm`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* 搜索框 */}
          <div className="rounded-lg bg-white/95 p-3 shadow-xl backdrop-blur-sm md:rounded-xl md:p-4">
            <div className="mb-3 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground md:h-5 md:w-5" />
                <Input
                  type="text"
                  placeholder="请输入大厦名称开始选址"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="h-9 pl-9 text-sm md:h-10 md:pl-10 md:text-base"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="h-9 px-4 text-sm md:h-10 md:px-6 md:text-base"
              >
                开始选址
              </Button>
            </div>

            {/* 筛选选项 */}
            <div className="space-y-2 text-xs md:text-sm">
              {/* 位置 */}
              <div className="flex items-start">
                <span className="mr-2 w-12 flex-shrink-0 font-medium text-foreground/70 md:w-14">位置</span>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {districts.map((district) => (
                    <button
                      key={district}
                      onClick={() => setSelectedDistrict(district)}
                      className={`rounded px-2 py-0.5 transition-colors md:px-3 md:py-1 ${
                        selectedDistrict === district
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {district}
                    </button>
                  ))}
                </div>
              </div>

              {/* 地铁 */}
              <div className="flex items-start">
                <span className="mr-2 w-12 flex-shrink-0 font-medium text-foreground/70 md:w-14">地铁</span>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {subways.map((subway) => (
                    <button
                      key={subway}
                      onClick={() => setSelectedSubway(subway)}
                      className={`rounded px-2 py-0.5 transition-colors md:px-3 md:py-1 ${
                        selectedSubway === subway
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {subway}
                    </button>
                  ))}
                </div>
              </div>

              {/* 面积 */}
              <div className="flex items-start">
                <span className="mr-2 w-12 flex-shrink-0 font-medium text-foreground/70 md:w-14">面积</span>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {areas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`rounded px-2 py-0.5 transition-colors md:px-3 md:py-1 ${
                        selectedArea === area
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* 价格 */}
              <div className="flex items-start">
                <span className="mr-2 w-12 flex-shrink-0 font-medium text-foreground/70 md:w-14">价格</span>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {prices.map((price) => (
                    <button
                      key={price}
                      onClick={() => setSelectedPrice(price)}
                      className={`rounded px-2 py-0.5 transition-colors md:px-3 md:py-1 ${
                        selectedPrice === price
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
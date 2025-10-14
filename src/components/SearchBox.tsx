import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SearchBox = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("虹桥商务区");
  const [searchQuery, setSearchQuery] = useState("");

  const districts = ["虹桥商务区", "徐泾/西虹桥", "虹桥临空经济区"];

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // 在实际应用中,这里会执行搜索逻辑
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          {/* 热门商圈快捷链接 */}
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {districts.map((district) => (
              <button
                key={district}
                onClick={() => setSelectedDistrict(district)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedDistrict === district
                    ? "bg-accent text-white"
                    : "bg-white/90 text-foreground hover:bg-white"
                }`}
              >
                {district}
              </button>
            ))}
          </div>

          {/* 搜索框 */}
          <div className="rounded-xl bg-white p-4 shadow-2xl backdrop-blur-sm md:p-6">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="请输入大厦名称开始选址"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                onClick={handleSearch}
                size="lg"
                className="md:w-auto"
              >
                开始选址
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

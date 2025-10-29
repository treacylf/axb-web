import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const quickLinks = [
    { label: "虹桥商务区", color: "bg-red-500", params: { district: "虹桥商务区" } },
    { label: "共享办公室", color: "bg-orange-500", params: { type: "共享办公" } },
    { label: "近地铁写字楼", color: "bg-blue-500", params: { type: "写字楼", subway: "近地铁" } },
  ];

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 pb-3 md:pb-6">
        <div className="mx-auto max-w-4xl">
          {/* 快捷标签 */}
          <div className="mb-2 flex flex-wrap justify-center gap-2 md:mb-3">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  const params = new URLSearchParams(link.params);
                  navigate(`/search?${params.toString()}`);
                }}
                className={`${link.color} rounded px-3 py-1 text-xs font-medium text-white hover:opacity-90 md:px-4 md:py-1.5 md:text-sm`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* 搜索框 */}
          <div className="rounded-lg bg-white/95 p-3 shadow-xl backdrop-blur-sm md:rounded-xl md:p-4">
            <div className="flex gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};
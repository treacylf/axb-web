import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

export const MobileFilterDrawer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  
  const currentDistrict = searchParams.get("district") || "";
  const currentSubway = searchParams.get("subway") || "";
  const currentBusinessArea = searchParams.get("area") || "";
  const currentSize = searchParams.get("size") || "";
  const currentPrice = searchParams.get("price") || "";

  const handleFilterClick = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (value === "") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }
    
    navigate(`/search?${params.toString()}`);
  };

  const handleReset = () => {
    navigate("/search?nav_id=0");
    setOpen(false);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (currentDistrict) count++;
    if (currentSubway) count++;
    if (currentBusinessArea) count++;
    if (currentSize) count++;
    if (currentPrice) count++;
    return count;
  };

  const filters = [
    {
      title: "位置",
      type: "district",
      current: currentDistrict,
      options: [
        { label: "不限", value: "" },
        { label: "浦东", value: "pudong" },
        { label: "黄浦", value: "huangpu" },
        { label: "静安", value: "jingan" },
        { label: "徐汇", value: "xuhui" },
        { label: "长宁", value: "changning" },
        { label: "普陀", value: "putuo" },
        { label: "闵行", value: "minhang" },
        { label: "青浦", value: "qingpu" },
        { label: "虹口", value: "hongkou" },
        { label: "杨浦", value: "yangpu" },
        { label: "嘉定", value: "jiading" },
        { label: "宝山", value: "baoshan" },
        { label: "松江", value: "songjiang" },
        { label: "奉贤", value: "fengxian" },
        { label: "金山", value: "jinshan" },
      ],
    },
    {
      title: "地铁",
      type: "subway",
      current: currentSubway,
      options: [
        { label: "不限", value: "" },
        { label: "1号线", value: "line1" },
        { label: "2号线", value: "line2" },
        { label: "3号线", value: "line3" },
        { label: "4号线", value: "line4" },
        { label: "5号线", value: "line5" },
        { label: "6号线", value: "line6" },
        { label: "7号线", value: "line7" },
        { label: "8号线", value: "line8" },
        { label: "9号线", value: "line9" },
        { label: "10号线", value: "line10" },
        { label: "11号线", value: "line11" },
        { label: "12号线", value: "line12" },
        { label: "13号线", value: "line13" },
        { label: "14号线", value: "line14" },
        { label: "15号线", value: "line15" },
        { label: "16号线", value: "line16" },
        { label: "17号线", value: "line17" },
        { label: "18号线", value: "line18" },
        { label: "19号线", value: "line19" },
        { label: "20号线", value: "line20" },
      ],
    },
    {
      title: "商圈",
      type: "area",
      current: currentBusinessArea,
      options: [
        { label: "不限", value: "" },
        { label: "虹桥商务区", value: "99" },
        { label: "徐泾/西虹桥", value: "108" },
        { label: "虹桥临空经济区", value: "86" },
        { label: "虹桥古北开发区", value: "87" },
        { label: "人民广场", value: "63" },
        { label: "长风商务区", value: "91" },
        { label: "莘庄商务区", value: "101" },
        { label: "陆家嘴", value: "48" },
      ],
    },
    {
      title: "面积",
      type: "size",
      current: currentSize,
      options: [
        { label: "不限", value: "" },
        { label: "100m²以下", value: "0-100" },
        { label: "100-200m²", value: "100-200" },
        { label: "200-300m²", value: "200-300" },
        { label: "300-500m²", value: "300-500" },
        { label: "500-1000m²", value: "500-1000" },
        { label: "1000m²以上", value: "1000-" },
      ],
    },
    {
      title: "价格",
      type: "price",
      current: currentPrice,
      options: [
        { label: "单价不限", value: "" },
        { label: "3元以下", value: "0-3" },
        { label: "3-4元", value: "3-4" },
        { label: "4-5元", value: "4-5" },
        { label: "5-7元", value: "5-7" },
        { label: "7-9元", value: "7-9" },
        { label: "9-12元", value: "9-12" },
        { label: "12元以上", value: "12-" },
      ],
    },
  ];

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full lg:hidden gap-2 relative"
        >
          <SlidersHorizontal className="w-4 h-4" />
          筛选条件
          {activeFiltersCount > 0 && (
            <Badge 
              variant="default" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>筛选条件</SheetTitle>
            {activeFiltersCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleReset}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                清空
              </Button>
            )}
          </div>
          <SheetDescription>
            选择您需要的筛选条件，找到理想房源
          </SheetDescription>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(85vh-160px)]">
          <div className="px-6 py-4 space-y-6">
            {filters.map((filter, index) => (
              <div key={filter.title}>
                <h3 className="font-semibold text-foreground mb-3 text-sm">
                  {filter.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filter.options.map((option) => (
                    <Button
                      key={option.value}
                      variant={
                        (option.value === "" && filter.current === "") || 
                        (option.value !== "" && filter.current === option.value)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => handleFilterClick(filter.type, option.value)}
                      className="rounded-full"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
                {index < filters.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </ScrollArea>

        <SheetFooter className="px-6 py-4 border-t mt-auto">
          <SheetClose asChild>
            <Button className="w-full" size="lg">
              查看结果
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

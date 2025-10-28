import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-6xl">
            上海写字楼出租
          </h1>
          <p className="mb-6 text-base text-white/90 md:mb-10 md:text-lg lg:text-xl">
            专业提供上海写字楼、办公楼、共享办公、创意园区租赁服务
          </p>

          {/* Search Box */}
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-3 shadow-2xl md:rounded-xl md:p-6">
            <div className="grid gap-2 md:gap-4 md:grid-cols-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="选择区域" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hongqiao">虹桥商务区</SelectItem>
                  <SelectItem value="lujiazui">陆家嘴</SelectItem>
                  <SelectItem value="renmin">人民广场</SelectItem>
                  <SelectItem value="changfeng">长风商务区</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="办公类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">写字楼</SelectItem>
                  <SelectItem value="creative">创意园区</SelectItem>
                  <SelectItem value="coworking">共享办公</SelectItem>
                  <SelectItem value="standalone">总部独栋</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative">
                <Input
                  placeholder="搜索楼盘名称"
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <Button className="mt-3 w-full md:mt-4 md:w-auto" size="default">
              <Search className="mr-2 h-4 w-4" />
              开始搜索
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

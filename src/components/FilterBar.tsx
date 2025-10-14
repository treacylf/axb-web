import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

export const FilterBar = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const filters: FilterSection[] = [
    {
      title: "位置",
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
      ],
    },
    {
      title: "面积",
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

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {filters.map((filter) => (
            <div key={filter.title} className="border-b pb-4 last:border-0">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] pt-2">
                  <span className="font-semibold text-foreground">
                    {filter.title}
                  </span>
                </div>
                <div className="flex-1">
                  <div
                    className={`flex flex-wrap gap-2 ${
                      expandedSection !== filter.title &&
                      filter.options.length > 10
                        ? "max-h-[100px] overflow-hidden"
                        : ""
                    }`}
                  >
                    {filter.options.map((option, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                          option.value === ""
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                  {filter.options.length > 10 && (
                    <button
                      onClick={() => toggleSection(filter.title)}
                      className="mt-2 flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {expandedSection === filter.title ? "收起" : "展开更多"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedSection === filter.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

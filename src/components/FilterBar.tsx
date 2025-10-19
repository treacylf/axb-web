export const FilterBar = () => {
  const filters = [
    {
      title: "区域",
      options: [
        { label: "不限", value: "", active: true },
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
        { label: "不限", value: "", active: true },
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
      title: "面积",
      options: [
        { label: "不限", value: "", active: true },
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
        { label: "不限", value: "", active: true },
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

  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4 py-3">
        {filters.map((filter) => (
          <div key={filter.title} className="flex border-b last:border-0 py-3">
            <div className="min-w-[60px] font-semibold text-foreground">
              {filter.title}
            </div>
            <div className="flex-1 flex flex-wrap gap-x-4 gap-y-2">
              {filter.options.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm transition-colors ${
                    option.active
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

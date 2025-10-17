export const NewsSection = () => {
  const newsCategories = [
    {
      title: "楼盘百科",
      cateId: 7,
      items: [
        {
          title: '"绿地中央广场"系大型商务综合体：静安绿地中央广场',
          date: "2025-10-17",
        },
        {
          title: "中铁中环时代广场",
          date: "2025-10-13",
        },
        {
          title: "上海市静安区的现代化创意写字楼：宏慧视界BOX",
          date: "2025-09-23",
        },
        {
          title: "金融街融悦中心：由一栋5A超高层写字楼，9栋独享写字楼组成约40万方总部集群",
          date: "2025-09-15",
        },
        {
          title: "静安区综合性商业广场：汉中广场",
          date: "2025-09-09",
        },
        {
          title: "恒汇国际大厦：静安区标志性建筑之一",
          date: "2025-09-02",
        },
        {
          title: "极具潜力的恒丰路商务区写字楼：环智国际大厦",
          date: "2025-08-27",
        },
        {
          title: "企业中心城市综合体项目内的精装项目：企业公馆",
          date: "2025-08-20",
        },
        {
          title: "静安高性价比办公室：旭兆空间",
          date: "2025-08-13",
        },
        {
          title: "地处黄金商务大道核心位置，坐享世界级资源配套写字楼：静安中港汇",
          date: "2025-08-06",
        },
      ],
    },
    {
      title: "找房攻略",
      cateId: 6,
      items: [
        {
          title: "办公室怎么选址风水好",
          date: "2025-10-15",
        },
        {
          title: "办公室选址技巧有哪些？",
          date: "2025-10-10",
        },
        {
          title: "办公室装修风水选址？",
          date: "2025-09-24",
        },
        {
          title: "企业办公室租赁选址的原则",
          date: "2025-09-18",
        },
        {
          title: "企业怎么选择办公室租赁位置",
          date: "2025-09-12",
        },
        {
          title: "写字楼选址九大攻略",
          date: "2025-09-08",
        },
        {
          title: "企业办公室选址的有哪些重要性？",
          date: "2025-09-04",
        },
        {
          title: "公司租写字楼要怎么选址？",
          date: "2025-08-28",
        },
        {
          title: "办公室选址的风水要求",
          date: "2025-08-21",
        },
        {
          title: "合适的办公场地应如何选择？",
          date: "2025-08-14",
        },
      ],
    },
    {
      title: "行业新闻",
      cateId: 5,
      items: [
        {
          title: "全域！虹桥国际中央商务区纳入上海自贸试验区联动创新区",
          date: "2025-10-16",
        },
        {
          title: "今年年底正式启幕，虹桥前湾印象城MEGA首发阵容曝光！",
          date: "2025-10-11",
        },
        {
          title: "虹桥新天地焕新出发，升级\"上海第一站\"体验",
          date: "2025-09-25",
        },
        {
          title: "​闵行这个\"新地标\"加速崛起！国内外行业翘楚纷至沓来",
          date: "2025-09-19",
        },
        {
          title: "上海高端医疗器械新布局 虹桥再添功能平台",
          date: "2025-09-17",
        },
        {
          title: "\"大杯\"变\"超大杯\"，上海大虹桥规划升维",
          date: "2025-09-11",
        },
        {
          title: "积极打造大虹桥服务企业\"走出去\"先行区！ 上海人民广播电台9月黄金档推介南虹桥",
          date: "2025-09-05",
        },
        {
          title: "人民网报道虹桥直播经济 赋能长三角高质量发展",
          date: "2025-08-29",
        },
        {
          title: "诺力上海总部扎根大虹桥，长三角智能物流巨头启新程",
          date: "2025-08-25",
        },
        {
          title: "大虹桥香格里拉双品牌酒店即将闪耀启幕",
          date: "2025-08-19",
        },
      ],
    },
    {
      title: "装修攻略",
      cateId: 8,
      items: [
        {
          title: "办公室装修之设计十大要点",
          date: "2025-10-14",
        },
        {
          title: "办公室装修设计验收",
          date: "2025-10-09",
        },
        {
          title: "办公室装修设计验收",
          date: "2025-09-22",
        },
        {
          title: "办公室装修设计注意事项",
          date: "2025-09-16",
        },
        {
          title: "办公室装修之设计十大要点",
          date: "2025-09-10",
        },
        {
          title: "办公室设计要点有哪些？",
          date: "2025-09-01",
        },
        {
          title: "办公室装修设计要点",
          date: "2025-08-26",
        },
        {
          title: "办公室装修设计如何让办公室更加高大上？",
          date: "2025-08-22",
        },
        {
          title: "如何进行办公室装修设计呢？",
          date: "2025-08-18",
        },
        {
          title: "小型办公室怎么设计装修？",
          date: "2025-08-11",
        },
      ],
    },
  ];

  return (
    <section id="news" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="border-b pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category) => (
              <div key={category.cateId}>
                <h4 className="text-lg font-semibold mb-4 flex items-center justify-between">
                  {category.title}
                  <a
                    href={`#news-${category.cateId}`}
                    className="text-sm text-primary hover:underline"
                  >
                    更多 &gt;&gt;
                  </a>
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-1 flex items-start gap-1"
                      >
                        <span className="text-primary shrink-0">·</span>
                        <span className="flex-1">
                          {item.title}
                          <span className="text-xs ml-2">{item.date}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
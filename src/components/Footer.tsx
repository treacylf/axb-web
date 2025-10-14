import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const friendlyLinks = [
    { name: "办公室设计装修", url: "#" },
    { name: "北京写字楼出租", url: "#" },
    { name: "深圳办公室出租", url: "#" },
    { name: "昆明装修公司", url: "#" },
    { name: "南京新房网", url: "#" },
    { name: "上海办公室装修", url: "#" },
    { name: "大虹桥写字楼出租", url: "#" },
    { name: "北京写字楼租售", url: "#" },
    { name: "涿州新房", url: "#" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">超办</span>
            </div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              上海超办信息服务有限公司
            </h3>
            <p className="text-sm text-muted-foreground">
              专业的写字楼租赁服务商，为您提供优质的办公空间解决方案
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">快速链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  写字楼出租
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  创意园区
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  共享办公
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  资讯中心
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">服务区域</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>虹桥商务区</li>
              <li>陆家嘴金融区</li>
              <li>人民广场商圈</li>
              <li>长风商务区</li>
              <li>莘庄商务区</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">联系我们</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <Phone className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:021-64202027" className="hover:text-primary">
                  021-64202027
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>info@chaobanwang.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>上海市闵行区泰虹路268弄1号万科时一区T3栋305室</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Friendly Links */}
        <div className="mt-8 border-t pt-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">友情链接：</span>
            {friendlyLinks.map((link, index) => (
              <span key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
                {index < friendlyLinks.length - 1 && (
                  <span className="mx-1">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t pt-6 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Copyright © 2025 上海超办信息服务有限公司. 保留所有权利.
          </p>
          <p className="text-xs">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              网站备案/许可证号：沪ICP备2021012780号-2
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

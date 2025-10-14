import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
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
                <span>上海市</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 上海超办信息服务有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

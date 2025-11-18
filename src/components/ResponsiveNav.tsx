import { Phone, Home, Building2, Warehouse, Users, Building, Newspaper } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDeviceType } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "首页", href: "/", navId: null, icon: Home },
  { label: "租办公室", href: "/search?nav_id=0", navId: "0", icon: Building2 },
  { label: "写字楼", href: "/search?nav_id=1", navId: "1", icon: Building },
  { label: "创意园区", href: "/search?nav_id=2", navId: "2", icon: Warehouse },
  { label: "共享办公", href: "/search?nav_id=3", navId: "3", icon: Users },
  { label: "总部独栋", href: "/search?nav_id=4", navId: "4", icon: Building },
  { label: "资讯中心", href: "/news", navId: "news", icon: Newspaper },
];

export const ResponsiveNav = () => {
  const deviceType = useDeviceType();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navId = searchParams.get("nav_id");

  const isActive = (item: typeof navItems[0]) => {
    if (item.href === "/" && location.pathname === "/") return true;
    if (item.href === "/news" && location.pathname === "/news") return true;
    if (item.navId && navId === item.navId) return true;
    return false;
  };

  // 桌面端 - 顶部导航
  if (deviceType === "desktop") {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} alt="上海安选办网" className="h-12 w-auto" />
              </a>
            </div>

            <nav className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    "after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5",
                    "after:transition-transform after:duration-300 after:scale-x-0",
                    "hover:after:scale-x-100 after:bg-primary",
                    isActive(item) 
                      ? "text-primary font-semibold after:scale-x-100" 
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="tel:16651188000"
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>16651188000</span>
            </a>
          </div>
        </div>
      </header>
    );
  }

  // 平板端 - 侧边栏导航
  if (deviceType === "tablet") {
    return (
      <>
        <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <div className="px-4">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center">
                <img src={logo} alt="上海安选办网" className="h-10 w-auto" />
              </a>
              <a
                href="tel:16651188000"
                className="flex items-center space-x-2 text-sm font-medium text-accent"
              >
                <Phone className="h-4 w-4" />
                <span>16651188000</span>
              </a>
            </div>
          </div>
        </header>

        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-20 border-r bg-card z-40 flex flex-col items-center py-6 space-y-4 animate-slide-in-right">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "flex flex-col items-center space-y-1 p-2 rounded-lg transition-all hover:bg-accent hover:scale-105",
                  isActive(item) 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </aside>
      </>
    );
  }

  // 移动端 - 底部导航栏
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="px-4">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="上海安选办网" className="h-8 w-auto" />
            </a>
            <a
              href="tel:16651188000"
              className="flex items-center space-x-1 text-xs font-medium text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>咨询</span>
            </a>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/95 animate-fade-in">
        <div className="grid grid-cols-5 gap-1 px-2 py-2 safe-area-bottom">
          {navItems.slice(0, 5).map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition-all",
                  "hover:bg-accent active:scale-95",
                  isActive(item) 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* 底部导航占位，防止内容被遮挡 */}
      <div className="h-16" />
    </>
  );
};

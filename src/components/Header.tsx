import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation, useSearchParams } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navId = searchParams.get("nav_id");

  const navItems = [
    { label: "首页", href: "/", navId: null },
    { label: "租办公室", href: "/search?nav_id=0", navId: "0" },
    { label: "写字楼", href: "/search?nav_id=1", navId: "1" },
    { label: "创意园区", href: "/search?nav_id=2", navId: "2" },
    { label: "共享办公", href: "/search?nav_id=3", navId: "3" },
    { label: "总部独栋", href: "/search?nav_id=4", navId: "4" },
    { label: "资讯中心", href: "#news", navId: "news" },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.href === "/" && location.pathname === "/") return true;
    if (item.href === "#news" && location.hash === "#news") return true;
    if (item.navId && navId === item.navId) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="上海超办网" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item) ? "text-primary font-semibold" : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:021-64202027"
              className="hidden items-center space-x-2 text-sm font-medium text-foreground md:flex"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>021-64202027</span>
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 pt-8">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item) ? "text-primary font-semibold" : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="tel:021-64202027"
                    className="flex items-center space-x-2 border-t pt-4 text-lg font-medium text-accent"
                  >
                    <Phone className="h-5 w-5" />
                    <span>021-64202027</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

export const Header = () => {
  const navItems = [
    { label: "首页", href: "#" },
    { label: "租办公室", href: "#offices" },
    { label: "写字楼", href: "#buildings" },
    { label: "创意园区", href: "#creative" },
    { label: "共享办公", href: "#coworking" },
    { label: "总部独栋", href: "#headquarters" },
    { label: "资讯中心", href: "#news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src={logo} alt="上海超办网" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
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
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
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

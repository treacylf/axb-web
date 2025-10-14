import { Card } from "@/components/ui/card";
import { Building2, Users, Lightbulb, Home } from "lucide-react";

export const ServiceSection = () => {
  const services = [
    {
      icon: Building2,
      title: "写字楼租赁",
      description: "提供各类甲级、乙级写字楼出租服务",
      color: "text-blue-500",
    },
    {
      icon: Lightbulb,
      title: "创意园区",
      description: "适合创意产业的园区办公环境",
      color: "text-amber-500",
    },
    {
      icon: Users,
      title: "共享办公",
      description: "灵活的共享办公空间解决方案",
      color: "text-green-500",
    },
    {
      icon: Home,
      title: "总部独栋",
      description: "企业总部专属独立办公大楼",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            专业服务
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            为您提供完善的选址方案和贴心的服务流程
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-0 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

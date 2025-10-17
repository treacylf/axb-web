import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ConsultationCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            专业选址顾问 为您免费找房
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            10年行业经验，5000+成功案例，为您提供一站式办公选址服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:021-64202027">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Phone className="h-5 w-5" />
                立即致电咨询
              </Button>
            </a>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
              <MessageCircle className="h-5 w-5" />
              在线咨询
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-card rounded-lg border">
              <div className="font-semibold mb-1">✓ 免费服务</div>
              <div className="text-muted-foreground">全程不收取任何费用</div>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <div className="font-semibold mb-1">✓ 专业团队</div>
              <div className="text-muted-foreground">资深顾问一对一服务</div>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <div className="font-semibold mb-1">✓ 快速响应</div>
              <div className="text-muted-foreground">24小时内给出选址方案</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import findHouseHero from "@/assets/findhouse-hero.jpg";

const FindHouse = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    needs: "",
    phone: "",
  });

  const handleSubmit = () => {
    if (!formData.needs.trim()) {
      toast({
        title: "请填写您的选址需求",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.phone.trim() || formData.phone.length !== 11) {
      toast({
        title: "请填写正确的手机号",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "提交成功",
      description: "我们的专业顾问将在24小时内与您联系",
    });
    
    setFormData({ needs: "", phone: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Image */}
        <div className="relative w-full">
          <img
            src={findHouseHero}
            alt="智能选址"
            className="w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                免费委托找房
              </h1>
              <p className="text-lg text-muted-foreground">
                一键提交找房委托，超办助力轻松办公选址
              </p>
            </div>

            {/* Process Steps */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <p className="font-semibold">提交需求</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <p className="font-semibold">客服沟通</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <p className="font-semibold">定制方案</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    4
                  </div>
                  <p className="font-semibold">带看成交</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 rounded-lg border shadow-lg">
              <div className="space-y-6">
                <div>
                  <textarea
                    className="w-full p-4 border rounded-md min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="填写您的选址需求，如：徐汇区，500平方，租金预算6元/㎡/天左右，地铁步行10分钟内"
                    maxLength={500}
                    value={formData.needs}
                    onChange={(e) =>
                      setFormData({ ...formData, needs: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="手机号"
                    maxLength={11}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full text-lg py-6"
                  onClick={handleSubmit}
                >
                  立即委托
                </Button>
              </div>
            </div>

            <p className="text-center mt-8 text-lg">
              拨打委托热线：
              <a
                href="tel:021-64202027"
                className="text-primary font-semibold hover:underline ml-2"
              >
                021-64202027
              </a>
            </p>
          </div>
        </section>

        {/* SEO Links Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  上海热门区域写字楼：
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "浦东", "黄浦", "静安", "徐汇", "长宁", "普陀", 
                    "闵行", "青浦", "虹口", "杨浦", "嘉定", "宝山", 
                    "松江", "奉贤", "金山"
                  ].map((area) => (
                    <a
                      key={area}
                      href={`/search?q=${area}写字楼出租`}
                      className="px-4 py-2 bg-card border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                    >
                      {area}写字楼出租
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  上海热门商圈写字楼：
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "陆家嘴", "人民广场", "静安寺", "徐家汇", "虹桥商务区",
                    "新天地", "南京西路", "张江高科", "世纪公园", "淮海中路"
                  ].map((area) => (
                    <a
                      key={area}
                      href={`/search?q=${area}写字楼出租`}
                      className="px-4 py-2 bg-card border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                    >
                      {area}写字楼出租
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingSidebar />
    </div>
  );
};

export default FindHouse;

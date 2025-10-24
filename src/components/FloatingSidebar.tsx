import { Phone, CheckCircle, FileText, Home } from "lucide-react";
import { useState } from "react";

export const FloatingSidebar = () => {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <>
      {/* 返回顶部按钮 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 z-40 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-primary/90 lg:bottom-8 lg:right-8"
      >
        返回
        <br />
        顶部
      </button>

      {/* 右侧固定侧边栏 */}
      <div className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-px lg:flex">
        {/* 免费咨询 */}
        <div
          className="group relative"
          onMouseEnter={() => setShowConsultation(true)}
          onMouseLeave={() => setShowConsultation(false)}
        >
          <button className="flex w-16 flex-col items-center gap-1 bg-accent py-3 text-white transition-colors hover:bg-accent/90">
            <Phone className="h-5 w-5" />
            <span className="text-xs leading-tight">
              免费
              <br />
              咨询
            </span>
          </button>

          {/* 咨询信息弹出层 */}
          {showConsultation && (
            <div className="absolute right-full top-0 mr-2 w-64 rounded-lg bg-gray-800 p-4 text-center text-white shadow-xl">
              <h3 className="mb-2 text-lg font-semibold">免费咨询</h3>
              <div className="mb-3 text-2xl font-bold text-primary">
                021-64202027
              </div>
              <div className="mb-2 flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>28万+套精品房源</span>
              </div>
              <div className="mb-3 flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>100+人专业顾问</span>
              </div>
              <p className="text-xs text-gray-400">早9:00-晚21:00</p>
            </div>
          )}
        </div>

        {/* 委托找房 */}
        <a
          href="/findhouse"
          className="flex w-16 flex-col items-center gap-1 bg-primary py-3 text-white transition-colors hover:bg-primary/90"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs leading-tight">
            委托
            <br />
            找房
          </span>
        </a>

        {/* 投放房源 */}
        <a
          href="/findhouse"
          className="flex w-16 flex-col items-center gap-1 bg-secondary py-3 text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs leading-tight">
            投放
            <br />
            房源
          </span>
        </a>
      </div>
    </>
  );
};

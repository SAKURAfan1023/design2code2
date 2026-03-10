"use client";

import { motion } from "framer-motion";
import { buttonBaseVariants, sectionVariants, sectionChildVariants, cardBaseVariants } from "@/lib/motion";

const intCards = [
  { badge: "API 接入", title: "REST API 接入", sub: "标准 RESTful 接口，简单几行代码即可调用", desc: "支持所有主流语言调用，提供完整文档与\nPostman 示例，快速完成业务集成", code: `POST /ai/service/v2/recognize\nx-ti-app-id: YOUR_APP_ID\nx-ti-secret-code: YOUR_SECRET`, tag: "RESTful 规范 ｜ SLA 99.9%" },
  { badge: "SDK 接入", title: "多语言 SDK", sub: "封装完善，开箱即用", desc: "提供 Python、Java、Node.js、Go 官方 SDK，\n内置请求签名、重试与解析能力", code: `pip install textin-sdk\nnpm install @textin/sdk\ngo get github.com/textin/textin-sdk-go`, tag: "4 种语言支持 ｜ 集成成本更低" },
  { badge: "私有化部署", title: "数据不出企业", sub: "安全合规，完全可控", desc: "支持客户自有服务器、私有云与专有云部署，\n满足金融、政务、医疗等高要求安全合规", code: `1. 需求沟通  2. 环境评估\n3. 部署实施  4. 验收交付\n支持现场或远程部署，按性能要求调优`, tag: "数据零出境 ｜ 行业合规" },
];

export default function Integration() {
  return (
    <motion.section
      className="w-full bg-[#FDF8F3] px-20 py-24 flex flex-col gap-7"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <h2 className="text-[#262626] font-spartan font-extrabold text-[64px] leading-none">
          灵活接入，快速上线
        </h2>
        <p className="text-[#262626B3] font-spartan text-[18px]">
          三种接入方式满足不同业务需求，最快 5 分钟完成对接
        </p>
      </motion.div>

      <motion.div variants={sectionChildVariants} className="flex gap-4">
        {intCards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="flex-1 bg-[#F5F0EB] rounded-2xl p-[18px] flex flex-col gap-2.5 h-[410px] cursor-pointer"
            variants={cardBaseVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.span
              className="font-spartan font-black text-[10px] uppercase"
              style={{ color: "#E4A4BD" }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              {card.badge}
            </motion.span>
            <h3 className="text-[#262626] font-spartan font-bold text-[24px] leading-tight">{card.title}</h3>
            <p className="text-[#262626] font-spartan font-bold text-[14px]">{card.sub}</p>
            <p className="text-[#262626B3] font-spartan text-[14px] leading-[1.5]">
              {card.desc.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </p>
            <div className="flex-1 bg-[#262626] rounded-[12px] p-3 overflow-hidden">
              <pre className="text-white font-spartan text-[12px] leading-[1.5] whitespace-pre-wrap">
                {card.code}
              </pre>
            </div>
            <span className="text-[#262626] font-spartan font-bold text-[12px]">{card.tag}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={sectionChildVariants} className="flex items-center justify-center gap-4">
        <motion.button
          className="bg-[#E4A4BD] text-[#262626] font-spartan font-black text-[10px] px-5 py-3 rounded-full cursor-pointer"
          variants={buttonBaseVariants}
          whileHover="hover"
          whileTap="tap"
        >
          查看完整文档
        </motion.button>
        <motion.button
          className="bg-[#F5F0EB] text-[#262626] font-spartan font-black text-[10px] px-5 py-3 rounded-full cursor-pointer"
          variants={buttonBaseVariants}
          whileHover="hover"
          whileTap="tap"
        >
          联系我们
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

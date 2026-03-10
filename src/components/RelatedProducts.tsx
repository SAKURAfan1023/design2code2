"use client";

import { motion } from "framer-motion";
import { sectionVariants, sectionChildVariants, cardBaseVariants } from "@/lib/motion";

// 内联 SVG logo，避免外部 CDN 防盗链问题
const logos = {
  camcard: (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="52" height="52" rx="12" fill="#E4A4BD"/>
      <rect x="10" y="16" width="32" height="20" rx="3" fill="white"/>
      <circle cx="19" cy="24" r="4" fill="#E4A4BD"/>
      <rect x="25" y="21" width="12" height="2" rx="1" fill="#E4A4BD"/>
      <rect x="25" y="25" width="8" height="2" rx="1" fill="#E4A4BD" opacity="0.6"/>
      <rect x="10" y="30" width="32" height="2" rx="1" fill="#E4A4BD" opacity="0.3"/>
    </svg>
  ),
  camscanner: (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="52" height="52" rx="12" fill="#262626"/>
      <rect x="14" y="12" width="24" height="28" rx="3" fill="none" stroke="white" strokeWidth="2"/>
      <rect x="18" y="18" width="16" height="12" rx="2" fill="#E4A4BD" opacity="0.8"/>
      <rect x="18" y="33" width="8" height="2" rx="1" fill="white" opacity="0.6"/>
      <path d="M32 10 L36 14 L32 14 Z" fill="white" opacity="0.5"/>
    </svg>
  ),
  textin: (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="52" height="52" rx="12" fill="#F5F0EB"/>
      <text x="8" y="34" fontFamily="League Spartan, sans-serif" fontSize="18" fontWeight="900" fill="#262626">Ti</text>
      <rect x="8" y="37" width="36" height="2" rx="1" fill="#E4A4BD"/>
    </svg>
  ),
};

const relCards = [
  { logoKey: "camcard" as const, title: "名片全能王", desc: "全球领先的智能名片管理工具，已服务\n全球超过 3 亿用户的商务人群", tags: "名片扫描 ｜ 联系人管理 ｜ 人脉拓展", link: "了解名片全能王" },
  { logoKey: "camscanner" as const, title: "扫描全能王", desc: "手机随身扫描仪，支持文档扫描、PDF 转换\n与 OCR 提取，全球累计下载 7 亿+", tags: "文档扫描 ｜ PDF 转换 ｜ 电子签名", link: "了解扫描全能王" },
  { logoKey: "textin" as const, title: "智能文档处理平台", desc: "面向企业级文档数字化方案，支持采集、识别\n结构化与入库全流程自动化", tags: "企业数字化 ｜ 流程自动化 ｜ 私有化部署", link: "了解智能文档处理平台" },
];

export default function RelatedProducts() {
  return (
    <motion.section
      className="w-full bg-[#262626] px-20 py-24 flex flex-col gap-7"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <h2 className="text-white font-spartan font-extrabold text-[64px] leading-none">
          合合信息产品矩阵
        </h2>
        <p className="text-[#FFFFFFB3] font-spartan text-[18px]">
          TextIn 隶属于合合信息，与旗下多款明星产品共享核心 AI 技术能力
        </p>
      </motion.div>

      <motion.div variants={sectionChildVariants} className="flex gap-4">
        {relCards.map((card) => (
          <motion.div
            key={card.title}
            className="flex-1 bg-[#F5F0EB] rounded-2xl p-5 flex flex-col gap-2.5 h-[330px] cursor-pointer"
            variants={cardBaseVariants}
            initial="initial"
            whileHover="hover"
          >
            <div className="w-[52px] h-[52px] rounded-[12px] overflow-hidden flex-shrink-0">
              {logos[card.logoKey]}
            </div>
            <h3 className="text-[#262626] font-spartan font-bold text-[24px] leading-tight">{card.title}</h3>
            <p className="text-[#262626B3] font-spartan text-[14px] leading-[1.5] flex-1">
              {card.desc.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </p>
            <span className="text-[#262626] font-spartan font-bold text-[12px]">{card.tags}</span>
            <motion.a
              href="#"
              className="text-[#262626] font-spartan font-black text-[13px] inline-block"
              whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              {card.link} →
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

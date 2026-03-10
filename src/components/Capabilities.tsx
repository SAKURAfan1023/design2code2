"use client";

import { motion } from "framer-motion";
import {
  ScanText, Languages, FileText, Table2,
  CreditCard, Receipt, Stamp, PenLine,
  type LucideIcon,
} from "lucide-react";
import { sectionVariants, sectionChildVariants, gridCardVariants } from "@/lib/motion";

const capCards: { Icon: LucideIcon; title: string; desc: string; tag: string }[] = [
  { Icon: ScanText,   title: "高精度 OCR 识别", desc: "基于深度学习 OCR 引擎，印刷体识别准确率\n超过 99.5%，支持复杂低质图像场景", tag: "核心能力" },
  { Icon: Languages,  title: "多语言支持",       desc: "覆盖中文、英文、日文等 100+ 语言，\n支持同图多语混排识别无需指定语种", tag: "100+ 语种" },
  { Icon: FileText,   title: "文档结构化",       desc: "智能解析 PDF、Word、图片中的层级结构，\n输出语义完整的结构化文档数据", tag: "结构解析" },
  { Icon: Table2,     title: "表格识别",         desc: "支持有线/无线/合并单元格等复杂表格，\n输出标准 Excel 与 JSON 结构", tag: "表格引擎" },
  { Icon: CreditCard, title: "证件识别",         desc: "覆盖身份证、护照、驾照等 30+ 类型，\n自动裁切纠偏并提取关键字段信息", tag: "30+ 证件类型" },
  { Icon: Receipt,    title: "票据识别",         desc: "提取发票、火车票、机票等 20+ 票据字段，\n支持验真查重与结构化回传", tag: "20+ 票据类型" },
  { Icon: Stamp,      title: "印章识别",         desc: "准确识别圆章、椭圆章、方章内容，\n并实现印章与正文文字分离提取", tag: "章体识别" },
  { Icon: PenLine,    title: "手写识别",         desc: "高精度识别中英文手写体，覆盖笔记、表单、\n签名等场景，支持连笔与潦草字迹", tag: "手写引擎" },
];

export default function Capabilities() {
  return (
    <motion.section
      className="w-full bg-[#FDF8F3] px-20 py-24 flex flex-col gap-7"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Head */}
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <h2 className="text-[#262626] font-spartan font-extrabold text-[64px] leading-none">
          全面覆盖图像智能处理场景
        </h2>
        <p className="text-[#262626B3] font-spartan text-[18px]">
          从文字识别到文档结构化，TextIn 提供一站式图像处理解决方案
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div className="flex flex-col gap-4" variants={sectionChildVariants}>
        {[capCards.slice(0, 4), capCards.slice(4)].map((row, ri) => (
          <div key={ri} className="flex gap-4">
            {row.map((card, ci) => {
              const globalIndex = ri * 4 + ci;
              return (
                <motion.div
                  key={card.title}
                  className="flex-1 bg-[#FDF8F3] border border-[#F5F0EB] rounded-2xl p-[18px] flex flex-col gap-2.5 h-[268px] cursor-pointer group"
                  variants={gridCardVariants}
                  custom={globalIndex}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px rgba(38,38,38,0.10)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="w-[42px] h-[42px] rounded-full bg-[#F5F0EB] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <card.Icon size={22} color="#E4A4BD" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-spartan font-bold text-[22px] leading-tight text-[#262626] group-hover:text-[#C8849E] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-[#262626B3] font-spartan text-[14px] leading-[1.5] flex-1">
                    {card.desc.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
                  </p>
                  <span className="text-[#E4A4BD] font-spartan font-black text-[10px]">{card.tag}</span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

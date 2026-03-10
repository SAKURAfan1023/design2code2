"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { buttonBaseVariants, sectionVariants, sectionChildVariants, easings } from "@/lib/motion";

// CountUp component
function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (shouldReduce) {
      ref.current.textContent = target;
      return;
    }
    const numMatch = target.match(/[\d,.]+/);
    if (!numMatch) {
      ref.current.textContent = target;
      return;
    }
    const rawNum = parseFloat(numMatch[0].replace(/,/g, ""));
    const prefix = target.slice(0, target.indexOf(numMatch[0]));
    const postfix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length);

    const controls = animate(0, rawNum, {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.3,
      onUpdate: (v) => {
        if (!ref.current) return;
        const formatted =
          rawNum >= 1000
            ? Math.round(v).toLocaleString("zh-CN")
            : v.toFixed(rawNum < 10 ? 1 : 0);
        ref.current.textContent = prefix + formatted + postfix;
      },
    });
    return () => controls.stop();
  }, [inView, shouldReduce, target]);

  return <span ref={ref}>{shouldReduce ? target : "0"}</span>;
}

const stats = [
  { num: "99.5%+", label: "识别准确率" },
  { num: "100+", label: "支持语言" },
  { num: "<200ms", label: "响应速度" },
  { num: "50万+", label: "服务开发者" },
];

const heroTitleVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.enter },
  },
};

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-between gap-[52px] px-20 pt-[72px] pb-[72px] bg-[#FDF8F3]">
      {/* Left */}
      <motion.div
        className="flex flex-col gap-6 w-[620px]"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={sectionChildVariants}
          className="text-[#E4A4BD] font-spartan font-black text-[10px] tracking-wider uppercase"
        >
          IMAGE INTELLIGENCE PLATFORM
        </motion.span>

        {/* Title with word stagger */}
        <motion.h1
          className="text-[#262626] font-spartan font-black text-[96px] leading-[0.8]"
          variants={heroTitleVariants}
        >
          {"让机器看懂\n每一张图像".split("\n").map((line, li) => (
            <span key={li} className="block">
              {line.split("").map((char, ci) => (
                <motion.span key={ci} variants={wordVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={sectionChildVariants}
          className="text-[#262626B3] font-spartan text-[18px] leading-[1.6]"
        >
          行业领先的图像智能处理平台，提供高精度 OCR 识别<br />
          文档结构化解析与图像增强能力，助力企业实现文档数字化转型
        </motion.p>

        <motion.div variants={sectionChildVariants} className="flex items-center gap-5">
          <motion.button
            className="bg-[#E4A4BD] text-[#262626] font-spartan font-black text-[10px] px-7 py-[14px] rounded-full cursor-pointer"
            variants={buttonBaseVariants}
            whileHover="hover"
            whileTap="tap"
          >
            免费试用
          </motion.button>
          <motion.button
            className="text-[#262626] font-spartan font-black text-[10px] px-3 py-[14px] cursor-pointer"
            whileHover={{ color: "#E4A4BD" }}
            transition={{ duration: 0.15 }}
          >
            查看文档
          </motion.button>
        </motion.div>

        <motion.div variants={sectionChildVariants} className="h-px w-full bg-[#26262614]" />

        {/* Stats grid */}
        <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
          {[stats.slice(0, 2), stats.slice(2)].map((row, ri) => (
            <div key={ri} className="flex gap-3">
              {row.map((s) => (
                <motion.div
                  key={s.label}
                  className="flex-1 bg-[#F5F0EB] rounded-2xl px-4 py-[14px] flex flex-col gap-1.5 cursor-default"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px rgba(38,38,38,0.10)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <span className="text-[#262626] font-spartan font-black text-[30px] leading-none">
                    <CountUp target={s.num} />
                  </span>
                  <span className="text-[#262626B3] font-spartan text-[14px]">{s.label}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — OCR Preview */}
      <motion.div
        className="w-[600px] h-[560px] bg-[#F5F0EB] rounded-[24px] p-6 flex flex-col gap-[18px] flex-shrink-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: easings.enter, delay: 0.3 }}
      >
        <span className="text-[#E4A4BD] font-spartan font-black text-[10px] uppercase tracking-wider">
          LIVE OCR SCAN
        </span>
        <div className="flex-1 bg-[#ECE4DD] rounded-2xl p-4 flex flex-col gap-2.5 overflow-hidden">
          <div className="flex items-center justify-between w-full">
            <span className="text-[#262626] font-spartan font-bold text-[12px]">invoice_sample.pdf</span>
            <span className="text-[#E4A4BD] font-spartan font-black text-[10px]">AI Parsing</span>
          </div>
          {/* Scan body */}
          <div className="flex-1 flex gap-2.5 min-h-0 relative">
            <div className="flex-1 rounded-[12px] overflow-hidden bg-[#F5F0EB]">
              {/* 模拟发票文档 SVG */}
              <svg viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="240" height="300" fill="#FAFAFA"/>
                {/* 顶部标题区 */}
                <rect x="16" y="16" width="80" height="10" rx="3" fill="#262626"/>
                <rect x="16" y="32" width="120" height="6" rx="2" fill="#E0D8D0"/>
                <rect x="16" y="44" width="90" height="6" rx="2" fill="#E0D8D0"/>
                {/* 分割线 */}
                <line x1="16" y1="58" x2="224" y2="58" stroke="#E0D8D0" strokeWidth="1"/>
                {/* 表格区 */}
                <rect x="16" y="66" width="208" height="8" rx="2" fill="#F5F0EB"/>
                {[0,1,2,3,4].map((i) => (
                  <g key={i}>
                    <rect x="16" y={80 + i * 16} width="110" height="6" rx="2" fill="#E8E0D8"/>
                    <rect x="150" y={80 + i * 16} width="74" height="6" rx="2" fill="#E4A4BD" opacity={0.4 + i * 0.1}/>
                  </g>
                ))}
                {/* 底部合计 */}
                <line x1="16" y1="168" x2="224" y2="168" stroke="#E0D8D0" strokeWidth="1"/>
                <rect x="150" y="176" width="74" height="10" rx="3" fill="#E4A4BD" opacity="0.8"/>
                <rect x="16" y="176" width="60" height="10" rx="3" fill="#262626" opacity="0.6"/>
                {/* 印章模拟 */}
                <circle cx="190" cy="230" r="28" stroke="#E4A4BD" strokeWidth="2" strokeDasharray="4 2" fill="none"/>
                <text x="190" y="234" textAnchor="middle" fontSize="10" fill="#E4A4BD" fontWeight="bold">验证章</text>
                {/* 底部条码 */}
                {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
                  <rect key={i} x={16 + i * 8} y="272" width={i % 3 === 0 ? 5 : 2} height="16" rx="1" fill="#262626" opacity="0.5"/>
                ))}
              </svg>
              {/* Scan line */}
              <motion.div
                className="absolute top-0 left-0 right-[50%] h-[2px] bg-[#E4A4BD] opacity-80"
                initial={{ y: 0, opacity: 0.8 }}
                animate={{ y: "100%", opacity: 0 }}
                transition={{ duration: 1.2, ease: "linear", delay: 0.8 }}
              />
            </div>
            <div className="flex-1 bg-[#262626] rounded-[12px] p-3 flex flex-col gap-1.5">
              <span className="text-white font-spartan font-bold text-[12px]">字段提取结果</span>
              {["• 发票号: NO.472901", "• 金额: ¥12,580.00", "• 日期: 2026-03-09", "• 置信度: 99.2%"].map(
                (line, i) => (
                  <motion.p
                    key={i}
                    className="text-[#FFFFFFB3] font-spartan text-[12px] leading-[1.5]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                  >
                    {line}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

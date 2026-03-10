"use client";

import { motion } from "framer-motion";
import { sectionVariants, sectionChildVariants } from "@/lib/motion";

const footerCols = [
  { title: "产品", links: ["通用文字识别", "表格识别", "票据识别", "证件识别", "手写识别", "文档结构化"] },
  { title: "开发者", links: ["API 文档", "SDK 下载", "快速开始", "常见问题", "更新日志", "服务状态页"] },
  { title: "公司", links: ["关于合合信息", "新闻动态", "加入我们", "合作伙伴", "客户案例", "价格方案"] },
  { title: "联系", links: ["business@textin.com", "support@textin.com", "TextIn 智能识别（公众号）", "TextIn 技术社区"], social: "微信 ｜ 微博 ｜ GitHub ｜ 知乎" },
];

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#262626] px-20 py-[72px] flex flex-col gap-[22px]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Top */}
      <motion.div variants={sectionChildVariants} className="flex gap-6">
        <div className="flex flex-col gap-2.5 flex-1">
          <span className="text-white font-spartan font-black text-[30px] leading-none">TextIn</span>
          <p className="text-[#FFFFFFB3] font-spartan text-[14px] leading-[1.6]">
            TextIn 图像智能处理开放平台，提供领先 OCR 识别、<br />
            文档结构化与图像增强服务。
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title} className="flex flex-col gap-2.5 flex-1">
            <span className="text-[#E4A4BD] font-spartan font-black text-[10px] uppercase">{col.title}</span>
            <div className="flex flex-col gap-0.5">
              {col.links.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="font-spartan text-[14px] leading-[1.8] cursor-pointer"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  whileHover={{ color: "#FFFFFF" }}
                  transition={{ duration: 0.15 }}
                >
                  {link}
                </motion.a>
              ))}
              {col.social && (
                <span className="text-white font-spartan font-bold text-[12px] leading-[1.8] mt-1">{col.social}</span>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div variants={sectionChildVariants} className="h-px w-full bg-white opacity-10" />

      {/* Bottom */}
      <motion.div variants={sectionChildVariants} className="flex items-center justify-between gap-4">
        <span className="text-[#FFFFFFB3] font-spartan text-[12px]">
          Copyright 2024 上海合合信息科技股份有限公司 版权所有
        </span>
        <span className="text-[#FFFFFFB3] font-spartan text-[12px]">
          隐私政策 ｜ 服务条款 ｜ Cookie 设置 ｜ 沪ICP备XXXXXXXX号-X
        </span>
      </motion.div>
    </motion.footer>
  );
}

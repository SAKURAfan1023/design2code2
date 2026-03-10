"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { buttonBaseVariants, sectionVariants, sectionChildVariants } from "@/lib/motion";

const tabs = [
  { id: "ocr", label: "通用文字识别" },
  { id: "table", label: "表格识别" },
  { id: "receipt", label: "票据识别" },
  { id: "id", label: "证件识别" },
  { id: "handwrite", label: "手写识别" },
];

const resultText: Record<string, string> = {
  ocr: `识别文字内容：\n合同编号：HT-2026-0312\n甲方：上海科技有限公司\n乙方：北京信息技术有限公司\n签署日期：2026年3月9日\n金额：人民币壹佰万元整\n置信度：99.1%`,
  table: `表格结构识别：\n行数：12 | 列数：5\n合并单元格：3处\n表头已提取，输出 JSON\n置信度：98.8%`,
  receipt: `发票字段提取：\n发票号：NO.472901\n金额：¥12,580.00\n日期：2026-03-09\n税率：13%\n置信度：99.2%`,
  id: `证件信息提取：\n姓名：张 **\n证件号：310101****0012\n有效期：2030-12-31\n签发机关：上海市公安局\n置信度：99.5%`,
  handwrite: `手写内容识别：\n"本合同于2026年3月签订，\n双方已就条款达成一致，\n请于本月末前完成交付"\n识别置信度：96.4%`,
};

export default function FeaturesDemo() {
  const [activeTab, setActiveTab] = useState("ocr");
  const [isDragging, setIsDragging] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      className="w-full bg-[#F5F0EB] px-20 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="w-full bg-[#FDF8F3] rounded-[24px] p-10 flex flex-col gap-7">
        {/* Head */}
        <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
          <h2 className="text-[#262626] font-spartan font-extrabold text-[64px] leading-none">
            亲自体验识别效果
          </h2>
          <p className="text-[#262626B3] font-spartan text-[18px]">
            上传一张图片，即刻见证 TextIn 的识别能力
          </p>
        </motion.div>

        {/* Tabs — layoutId shared indicator */}
        <motion.div variants={sectionChildVariants} className="flex items-center justify-center gap-2.5 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-[14px] py-2.5 rounded-full font-spartan text-[12px] cursor-pointer"
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-[#E4A4BD] rounded-full"
                  transition={
                    shouldReduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 400, damping: 30 }
                  }
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab.id ? "font-black text-[#262626]" : "font-bold text-[#262626] hover:text-[#E4A4BD]"
                } transition-colors duration-150`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Body */}
        <motion.div variants={sectionChildVariants} className="flex gap-6">
          {/* Left col */}
          <div className="w-[430px] flex-shrink-0 flex flex-col gap-4">
            {/* Upload box with drag state */}
            <motion.div
              className="h-[250px] bg-[#F5F0EB] rounded-2xl flex flex-col items-center justify-center gap-2.5 cursor-pointer border-2 border-dashed"
              animate={
                isDragging
                  ? { borderColor: "#E4A4BD", backgroundColor: "#F0E8E3", scale: 1.02, boxShadow: "0 0 0 4px rgba(228,164,189,0.2)" }
                  : { borderColor: "rgba(38,38,38,0.25)", backgroundColor: "#F5F0EB", scale: 1, boxShadow: "none" }
              }
              whileHover={{ borderColor: "#E4A4BD", backgroundColor: "#F0E8E3" }}
              transition={{ duration: 0.2 }}
              onDragEnter={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
              onDrop={() => setIsDragging(false)}
            >
              <img
                src="https://img.icons8.com/ios-filled/100/e4a4bd/upload-to-cloud.png"
                alt="upload"
                className="w-[52px] h-[52px] rounded-full"
              />
              <p className="text-[#262626B3] font-spartan text-[16px] leading-[1.5] text-center">
                点击或拖拽上传图片<br />支持 JPG、PNG、PDF 格式
              </p>
            </motion.div>

            <span className="text-[#262626] font-spartan font-bold text-[14px]">示例图片</span>
            <div className="flex gap-2.5">
              {[
                "https://images.unsplash.com/photo-1586282391129-76a6df230234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                "https://images.unsplash.com/photo-1553729784-e91953dec042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              ].map((url, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-[88px] rounded-[10px] overflow-hidden cursor-pointer"
                  whileHover={{ opacity: 0.85, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={url} alt={`sample ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right col */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[#262626] font-spartan font-bold text-[14px]">原始图片</span>
              <span className="text-[#262626] font-spartan font-bold text-[14px]">识别结果</span>
            </div>
            <div className="h-[360px] flex gap-3">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="original"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-[#262626] rounded-2xl p-[18px] overflow-auto">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    className="text-white font-spartan text-[13px] leading-[1.6] whitespace-pre-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {resultText[activeTab]}
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#262626B3] font-spartan text-[13px]">
                识别完成，耗时 0.15s ｜ 置信度 99.2%
              </span>
              <motion.button
                className="bg-[#E4A4BD33] text-[#262626] font-spartan font-bold text-[12px] px-[14px] py-2 rounded-full cursor-pointer"
                variants={buttonBaseVariants}
                whileHover="hover"
                whileTap="tap"
              >
                复制结果
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={sectionChildVariants}
          className="text-[#262626] font-spartan font-bold text-[14px] cursor-pointer hover:text-[#E4A4BD] transition-colors duration-150"
        >
          体验更多能力，请前往控制台 →
        </motion.p>
      </div>
    </motion.section>
  );
}

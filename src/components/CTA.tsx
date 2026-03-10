"use client";

import { motion } from "framer-motion";
import { buttonBaseVariants, easings } from "@/lib/motion";

const proofs = [
  "免费额度每月自动刷新",
  "无需绑定信用卡，零风险体验",
  "5 分钟完成 API 接入",
  "专属技术支持在线响应",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: easings.enter, delay },
  }),
};

export default function CTA() {
  return (
    <motion.section
      className="w-full bg-[#262626] px-20 py-24 flex flex-col items-center gap-[22px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        className="text-white font-spartan font-extrabold text-[64px] leading-[0.9] text-center"
        custom={0}
        variants={itemVariants}
      >
        立即开始，免费体验<br />强大的图像识别能力
      </motion.h2>

      <motion.p
        className="text-[#FFFFFFB3] font-spartan text-[18px] leading-[1.5] text-center"
        custom={0.1}
        variants={itemVariants}
      >
        注册即享每月 1,000 次免费调用额度，无需绑定信用卡，<br />3 分钟完成注册
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-4"
        custom={0.2}
        variants={itemVariants}
      >
        <motion.button
          className="bg-[#FDF8F3] text-[#262626] font-spartan font-black text-[10px] px-6 py-[14px] rounded-full cursor-pointer"
          variants={buttonBaseVariants}
          whileHover="hover"
          whileTap="tap"
        >
          免费开始使用
        </motion.button>
        <motion.button
          className="bg-[#262626] text-[#FDF8F3] font-spartan font-black text-[10px] px-6 py-[14px] rounded-full border border-[#FDF8F340] cursor-pointer"
          variants={buttonBaseVariants}
          whileHover="hover"
          whileTap="tap"
        >
          联系销售团队
        </motion.button>
      </motion.div>

      <motion.a
        href="#"
        className="text-[#E4A4BD] font-spartan font-bold text-[14px]"
        custom={0.25}
        variants={itemVariants}
        whileHover={{ color: "#EBB4CA" }}
        transition={{ duration: 0.15 }}
      >
        查看完整文档 →
      </motion.a>

      {/* Proof badges with stagger */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {proofs.map((p, i) => (
          <motion.div
            key={p}
            className="flex items-center gap-2 bg-[#FDF8F31A] px-3 py-2.5 rounded-full cursor-default"
            custom={0.35 + i * 0.06}
            variants={itemVariants}
            whileHover={{ backgroundColor: "rgba(253,248,243,0.18)", scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#E4A4BD] flex-shrink-0" />
            <span className="text-white font-spartan font-bold text-[12px]">{p}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

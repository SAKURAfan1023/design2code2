"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate, useReducedMotion } from "framer-motion";
import { sectionVariants, sectionChildVariants, cardBaseVariants, easings } from "@/lib/motion";

// CountUp component
function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (shouldReduce) { ref.current.textContent = target; return; }
    const numMatch = target.match(/[\d.]+/);
    if (!numMatch) { ref.current.textContent = target; return; }
    const rawNum = parseFloat(numMatch[0]);
    const prefix = target.slice(0, target.indexOf(numMatch[0]));
    const postfix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length);
    const controls = animate(0, rawNum, {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.3,
      onUpdate: (v) => {
        if (!ref.current) return;
        const formatted = rawNum >= 1000 ? Math.round(v).toLocaleString("zh-CN") : (rawNum < 10 ? v.toFixed(1) : Math.round(v).toString());
        ref.current.textContent = prefix + formatted + postfix;
      },
    });
    return () => controls.stop();
  }, [inView, shouldReduce, target]);

  return <span ref={ref}>{shouldReduce ? target : "0"}</span>;
}

// Logo Marquee
function LogoMarquee({ logos, direction = 1 }: { logos: { url: string; name: string }[]; direction?: 1 | -1 }) {
  const [paused, setPaused] = useState(false);
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <div className="flex gap-3">
        {logos.map((logo) => (
          <div key={logo.name} className="flex-1 h-[74px] bg-[#F5F0EB] rounded-[12px] flex items-center justify-center">
            <img src={logo.url} alt={logo.name} className="max-w-[80px] max-h-[40px] object-contain opacity-70" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        ))}
      </div>
    );
  }

  const doubled = [...logos, ...logos];
  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-3"
        style={{ width: `${logos.length * 2 * (100 / logos.length)}%` }}
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        {...(paused && { style: { animationPlayState: "paused" } })}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="h-[74px] w-[160px] bg-[#F5F0EB] rounded-[12px] flex-shrink-0 flex items-center justify-center">
            <img src={logo.url} alt={logo.name} className="max-w-[80px] max-h-[40px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-200" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const stats = [
  { num: "500,000+", desc: "注册开发者" },
  { num: "2,000+", desc: "企业客户" },
  { num: "5,000 万+", desc: "日均调用量" },
  { num: "98.6%", desc: "客户满意度" },
];

const logos = [
  { url: "https://logo.clearbit.com/icbc.com.cn", name: "ICBC" },
  { url: "https://logo.clearbit.com/pingan.com", name: "Ping An" },
  { url: "https://logo.clearbit.com/alibaba.com", name: "Alibaba" },
  { url: "https://logo.clearbit.com/tencent.com", name: "Tencent" },
  { url: "https://logo.clearbit.com/jd.com", name: "JD" },
  { url: "https://logo.clearbit.com/baidu.com", name: "Baidu" },
  { url: "https://logo.clearbit.com/bytedance.com", name: "ByteDance" },
  { url: "https://logo.clearbit.com/hsbc.com", name: "HSBC" },
];

const testimonials = [
  { quote: '"TextIn 的 OCR 识别准确率远超我们测试过的其他方案。\n接入 API 后，票据处理效率提升了 15 倍。"', author: "某头部股份制银行｜金融科技部技术总监" },
  { quote: '"部署私有化方案后，医院病历处理效率大幅提升，\n合规性完全满足等保三级要求。"', author: "某三甲医院｜信息中心主任" },
  { quote: '"TextIn 的 SDK 集成非常便捷，我们在 3 天内完成了\n全部证照核验流程的自动化改造。"', author: "某政务服务中心｜系统架构师" },
];

const badges = ["ISO 27001", "SOC 2 Type II", "等保三级"];

export default function CustomersTrust() {
  const [[page, direction], setPage] = useState([0, 0]);
  const shouldReduce = useReducedMotion();

  const paginate = (newDir: number) => {
    const next = (page + newDir + testimonials.length) % testimonials.length;
    setPage([next, newDir]);
  };

  // Auto advance every 6s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [page]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0, transition: { duration: 0.2 } }),
  };

  return (
    <motion.section
      className="w-full bg-[#FDF8F3] px-20 py-24 flex flex-col gap-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <h2 className="text-[#262626] font-spartan font-extrabold text-[64px] leading-none">
          受到行业领先企业的信赖
        </h2>
        <p className="text-[#262626B3] font-spartan text-[18px]">
          从初创公司到世界 500 强，超过 50 万开发者和数千家企业选择 TextIn
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={sectionChildVariants} className="flex gap-4">
        {stats.map((s) => (
          <motion.div
            key={s.desc}
            className="flex-1 bg-[#F5F0EB] rounded-2xl px-[14px] py-[14px] flex flex-col gap-1.5 h-[130px] cursor-default"
            variants={cardBaseVariants}
            initial="initial"
            whileHover="hover"
          >
            <span className="text-[#262626] font-spartan font-black text-[48px] leading-[0.9]">
              <CountUp target={s.num} />
            </span>
            <span className="text-[#262626B3] font-spartan text-[14px]">{s.desc}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Logo marquee (two rows, opposite directions) */}
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <LogoMarquee logos={logos} direction={1} />
        <LogoMarquee logos={[...logos].reverse()} direction={-1} />
      </motion.div>

      {/* Trust badges */}
      <motion.div variants={sectionChildVariants} className="flex items-center justify-center gap-2.5 flex-wrap">
        {badges.map((b) => (
          <span key={b} className="text-[#262626] font-spartan font-black text-[10px] bg-[#E4A4BD33] px-3 py-2 rounded-full">
            {b}
          </span>
        ))}
      </motion.div>

      {/* Testimonial card with cross-slide */}
      <motion.div variants={sectionChildVariants} className="bg-[#F5F0EB] rounded-2xl p-6 overflow-hidden relative min-h-[130px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={shouldReduce ? {} : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: easings.inOut }}
            className="flex flex-col gap-2.5"
          >
            <p className="text-[#262626] font-spartan font-bold text-[22px] leading-[1.4] whitespace-pre-line">
              {testimonials[page].quote}
            </p>
            <span className="text-[#262626B3] font-spartan text-[14px]">{testimonials[page].author}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Dot nav */}
      <motion.div variants={sectionChildVariants} className="flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className="rounded-full h-2 cursor-pointer"
            animate={{
              width: i === page ? 24 : 8,
              backgroundColor: i === page ? "#262626" : "rgba(38,38,38,0.30)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

// 全局 Motion variants & hooks
// 基于 interaction-design.md 规范

import type { Variants } from "framer-motion";

// ─── 缓动曲线 ───────────────────────────────────────────────
export const easings = {
  enter: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
  exit: [0.4, 0.0, 1.0, 1] as [number, number, number, number],
  inOut: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
};

// ─── 卡片基线 variants ───────────────────────────────────────
export const cardBaseVariants: Variants = {
  initial: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 28px rgba(38,38,38,0.10)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// ─── 按钮基线 variants ───────────────────────────────────────
export const buttonBaseVariants: Variants = {
  hover: { scale: 1.04, transition: { duration: 0.15, ease: "easeOut" } },
  tap: { scale: 0.96, transition: { duration: 0.1, ease: "easeInOut" } },
};

// ─── 图片基线 variants ───────────────────────────────────────
export const imageBaseVariants: Variants = {
  hover: { scale: 1.04, transition: { duration: 0.3, ease: "easeOut" } },
};

// ─── 页面区块入场 variants ──────────────────────────────────
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.enter,
      staggerChildren: 0.08,
    },
  },
};

export const sectionChildVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.enter },
  },
};

// ─── 模态框基线 variants ────────────────────────────────────
export const modalVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: easings.enter },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.2, ease: easings.exit },
  },
};

// ─── 网格卡片交错入场 variants ──────────────────────────────
export const gridCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easings.enter,
      delay: Math.floor(i / 4) * 0.15,
    },
  }),
};

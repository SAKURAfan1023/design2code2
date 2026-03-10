"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonBaseVariants } from "@/lib/motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();
  const navLinks = ["产品功能", "开发者文档", "价格方案", "客户案例", "关于我们"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full h-20 flex items-center justify-between px-20"
      animate={
        shouldReduce
          ? {}
          : {
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
              borderBottomColor: scrolled
                ? "rgba(38,38,38,0.08)"
                : "rgba(38,38,38,0)",
              backgroundColor: scrolled ? "rgba(253,248,243,0.95)" : "rgba(253,248,243,0.80)",
            }
      }
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "rgba(38,38,38,0)",
        backgroundColor: "rgba(253,248,243,0.80)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Brand */}
      <span className="text-[#262626] font-spartan font-black text-[30px] leading-none select-none">
        TextIn
      </span>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        {navLinks.map((item) => (
          <motion.a
            key={item}
            href="#"
            className="text-[#262626] font-spartan font-bold text-[14px] cursor-pointer relative"
            whileHover="hover"
            initial="initial"
          >
            <motion.span
              variants={{
                initial: { color: "#262626" },
                hover: { color: "#E4A4BD", transition: { duration: 0.15 } },
              }}
            >
              {item}
            </motion.span>
            {/* Underline */}
            <motion.span
              className="absolute bottom-[-2px] left-0 h-[1.5px] w-full bg-[#E4A4BD] origin-left"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1, transition: { duration: 0.2, ease: "easeOut" } },
              }}
            />
          </motion.a>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <motion.button
          className="bg-[#E4A4BD] text-[#262626] font-spartan font-black text-[10px] px-[22px] py-3 rounded-full cursor-pointer"
          variants={buttonBaseVariants}
          whileHover="hover"
          whileTap="tap"
        >
          免费试用
        </motion.button>
        <motion.button
          className="text-[#262626] font-spartan font-black text-[10px] cursor-pointer"
          whileHover={{ color: "#E4A4BD" }}
          transition={{ duration: 0.15 }}
        >
          登录
        </motion.button>
        <span className="text-[#262626B3] font-spartan font-bold text-[10px] cursor-pointer hover:text-[#262626] transition-colors duration-150">
          简体中文 / English
        </span>
      </div>
    </motion.header>
  );
}

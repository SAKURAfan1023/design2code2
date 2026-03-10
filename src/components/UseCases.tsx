"use client";

import { motion } from "framer-motion";
import { sectionVariants, sectionChildVariants, cardBaseVariants } from "@/lib/motion";

const useCases = [
  { img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "金融行业", title: "银行票据与合同自动化识别", desc: "自动识别票据、借贷合同与财务报表，\n实现贷前审核自动化并显著降低人工差错", data: "降低人工错误率 90%+" },
  { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "医疗行业", title: "病历报告结构化归档", desc: "快速结构化病历、检验单与处方笺，\n支持手写病历识别并推进无纸化办公", data: "病历处理效率提升 8 倍" },
  { img: "https://images.unsplash.com/photo-1573496267526-08a69e46a409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "政务行业", title: "证照采集与核验提效", desc: "高效处理身份证件与政务表单，\n支持群众证照信息自动采集与核验", data: "证照识别准确率 99.9%" },
  { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "教育行业", title: "试卷与教材数字化处理", desc: "识别试卷内容与学生手写答案，\n支持自动阅卷并推动教育资源在线化", data: "阅卷效率提升 5 倍" },
  { img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "电商行业", title: "商品信息批量结构提取", desc: "批量提取商品包装品名、规格与成分信息，\n自动生成属性标签并提升录入效率", data: "商品录入效率提升 10 倍+" },
  { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "企业办公", title: "报销与合同自动归档", desc: "一键识别报销发票与费用单据，\n自动填充系统字段并支持全文检索", data: "报销处理时间缩短 80%" },
];

export default function UseCases() {
  return (
    <motion.section
      className="w-full bg-[#F5F0EB] px-20 py-24 flex flex-col gap-7"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Head */}
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-3">
        <h2 className="text-[#262626] font-spartan font-extrabold text-[64px] leading-none">
          赋能千行百业的智能文档处理
        </h2>
        <p className="text-[#262626B3] font-spartan text-[18px]">
          无论您处于哪个行业，TextIn 都能帮助您提升文档处理效率
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div variants={sectionChildVariants} className="flex flex-col gap-4">
        {[useCases.slice(0, 3), useCases.slice(3)].map((row, ri) => (
          <div key={ri} className="flex gap-4">
            {row.map((card) => (
              <motion.div
                key={card.title}
                className="flex-1 bg-[#FDF8F3] rounded-2xl h-[390px] flex flex-col overflow-hidden cursor-pointer group"
                variants={cardBaseVariants}
                initial="initial"
                whileHover="hover"
              >
                {/* Image + CSS group hover overlay */}
                <div className="h-[190px] overflow-hidden relative flex-shrink-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[rgba(228,164,189,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-end p-3">
                    <span className="text-white font-spartan font-bold text-[13px] translate-y-2 group-hover:translate-y-0 transition-transform duration-250">
                      了解更多 →
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 p-[14px]">
                  <span className="text-[#E4A4BD] font-spartan font-black text-[10px] uppercase">{card.tag}</span>
                  <h3 className="text-[#262626] font-spartan font-bold text-[22px] leading-tight">{card.title}</h3>
                  <p className="text-[#262626B3] font-spartan text-[14px] leading-[1.5] flex-1">
                    {card.desc.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
                  </p>
                  <span className="text-[#262626] font-spartan font-bold text-[12px]">{card.data}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

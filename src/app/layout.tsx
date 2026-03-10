import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TextIn - AI 图像智能处理平台",
  description: "行业领先的图像智能处理平台，提供高精度 OCR 识别、文档结构化解析与图像增强能力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

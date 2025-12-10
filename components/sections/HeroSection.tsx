'use client';

import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-400 via-primary to-blue-600 pt-24 md:pt-28">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-400/20" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 px-5 py-2.5 bg-white rounded-full text-sm font-normal text-primary shadow-xl border-2 border-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            📍 서울 강동구·하남 미사 지역 전문 중개사
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="heading-1 text-white mb-4 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            매물을 찾으면, 매물을 팔려는<br />중개사를 만납니다!
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            지역 전문 중개사와 집찾기 서비스
          </motion.p>

          {/* Key Points */}
          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <motion.div
              className="flex items-start text-left bg-white/20 backdrop-blur-md rounded-soft p-4 border-2 border-white/30 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-200"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-2xl mr-4">✓</span>
              <p className="text-lg font-medium">
                매물 접수 받지 않습니다. 그래서 팔지 않습니다.
              </p>
            </motion.div>
            <motion.div
              className="flex items-start text-left bg-white/20 backdrop-blur-md rounded-soft p-4 border-2 border-white/30 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-200"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-2xl mr-4">✓</span>
              <p className="text-lg font-medium">
                의뢰조건에 맞는 매물을 찾아드립니다.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CTAButton
              text="무료 상담 신청하기"
              href="https://tr.ee/ezLrPu6yQI"
              variant="secondary"
              className="w-full sm:w-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center animate-bounce z-20">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

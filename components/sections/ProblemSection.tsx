'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      icon: '🏢',
      text: '"이 단지가 최고예요", "이 매물이 제일 좋다" 칭찬일색의 브리핑',
    },
    {
      icon: '📱',
      text: '부동산마다 일일이 전화해서 정보확인 및 집보기 예약',
    },
    {
      icon: '😰',
      text: '"그 매물 나갔어요. 그거 말고.." 허위매물',
    },
    {
      icon: '🤔',
      text: '이 중개사 믿을 만한 중개사인가?',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50" id="problem">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-gray-900 leading-[1.2]">
            지금까지의 부동산 중개,<br />이런 경험 있으시죠?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start">
                <motion.span
                  className="text-4xl mr-4 flex-shrink-0"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.5 } }}
                >
                  {problem.icon}
                </motion.span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-gray-600 font-medium">
            이제는 <span className="text-primary font-bold">다른 방식</span>이 필요합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}

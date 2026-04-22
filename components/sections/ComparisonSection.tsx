'use client';

import { Card, Text, Badge } from '@mantine/core';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  const comparisons = [
    {
      icon: '⚖️',
      title: '변호사',
      status: '✅',
      statusText: '전문가 선택',
      statusColor: '#16a34a',
      borderColor: '#16a34a',
      bgColor: '#ffffff',
      steps: [
        '전문성, 경력, 후기 검색',
        '변호사 선택',
      ],
    },
    {
      icon: '🏥',
      title: '의사',
      status: '✅',
      statusText: '전문가 선택',
      statusColor: '#16a34a',
      borderColor: '#16a34a',
      bgColor: '#ffffff',
      steps: [
        '전문성, 경력, 후기 검색',
        '의사 선택',
      ],
    },
    {
      icon: '🏢',
      title: '부동산',
      status: '❌',
      statusText: '매물 선택',
      statusColor: '#dc2626',
      borderColor: '#dc2626',
      bgColor: '#fef2f2',
      steps: [
        '매물을 먼저 검색',
        '중개사 선택 ❌',
      ],
    },
  ];

  return (
    <section className="section-spacing bg-white" id="comparison">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 mb-6 text-gray-900">이상하지 않나요?</h2>
          <p className="text-lg md:text-xl text-gray-600 break-keep px-4">
            다른 분야는 <span className="text-primary font-bold">전문가를 먼저 선택</span>합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card
                shadow="md"
                padding="xl"
                radius="md"
                style={{
                  borderWidth: 2,
                  borderColor: comparison.borderColor,
                  backgroundColor: comparison.bgColor,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                className="hover:shadow-xl"
              >
                <div className="text-4xl mb-4 text-center">{comparison.icon}</div>
                <Text size="xl" fw={700} ta="center" mb="xs">
                  {comparison.title} {comparison.status}
                </Text>
                <Badge
                  size="lg"
                  variant="filled"
                  color={comparison.statusColor === '#16a34a' ? 'green' : 'red'}
                  mb="md"
                  style={{ width: '100%' }}
                >
                  {comparison.statusText}
                </Badge>
                <ol className="text-left text-sm space-y-2 text-gray-700" style={{ listStylePosition: 'inside' }}>
                  {comparison.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg md:text-2xl font-bold text-gray-900 break-keep px-4">
            미국은 <span className="text-primary">매수자가 중개사를 먼저 선택</span>하고 <span className="text-primary">최적의 매물</span>을 찾습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

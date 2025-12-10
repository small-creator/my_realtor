'use client';

import { Accordion } from '@mantine/core';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: '중개 수수료는 어떻게 되나요?',
      answer: '일반 부동산과 동일한 법정 요율이 적용됩니다. (법정요율적용)',
    },
    {
      question: '정말 매물을 받지 않나요?',
      answer: '네, 철저하게 매수인의 입장에서만 도와드리기 위해 매물 접수는 일체 받지 않습니다.',
    },
    {
      question: '어떻게 매물을 찾아주시나요?',
      answer: '중개사 공동망을 통해 시장의 모든 매물을 확인하고, 공동중개 방식으로 진행합니다.',
    },
    {
      question: '상담 비용이 있나요?',
      answer: '상담은 무료입니다. 거래가 성사된 경우에만 법정 중개 수수료가 발생합니다.',
    },
    {
      question: '다른 지역도 가능한가요?',
      answer: '현재는 지역 전문 중개서비스로 서울 강동구와 하남 미사 지역만 서비스를 제공하고 있습니다.',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-gray-900">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            궁금하신 점을 확인해보세요
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            variant="separated"
            radius="md"
            chevronPosition="right"
            styles={{
              item: {
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                marginBottom: '12px',
                '&[data-active]': {
                  borderColor: '#1a73e8',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                },
              },
              control: {
                padding: '24px',
                fontSize: '18px',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#f9fafb',
                },
              },
              content: {
                padding: '0 24px 24px 24px',
                fontSize: '16px',
                color: '#374151',
              },
              chevron: {
                color: '#1a73e8',
                '&[data-rotate]': {
                  transform: 'rotate(180deg)',
                },
              },
            }}
          >
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`faq-${index}`}>
                <Accordion.Control>
                  Q. {faq.question}
                </Accordion.Control>
                <Accordion.Panel>
                  A. {faq.answer}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600">
            추가 문의사항이 있으신가요?{' '}
            <a href="https://tr.ee/ezLrPu6yQI" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
              문의하기
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

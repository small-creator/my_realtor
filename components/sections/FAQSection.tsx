'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '중개 수수료는 어떻게 되나요?',
      answer: '일반 중개사와 동일한 법정 요율이 적용됩니다. (매매가의 0.4~0.5%)',
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
      answer: '현재는 서울 강동구와 하남 미사 지역만 서비스를 제공하고 있습니다.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            궁금하신 점을 확인해보세요
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-soft shadow-soft overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  Q. {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      A. {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            추가 문의사항이 있으신가요?{' '}
            <a href="https://tr.ee/ezLrPu6yQI" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
              문의하기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

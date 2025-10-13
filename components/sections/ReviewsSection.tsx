'use client';

import Image from 'next/image';

export default function ReviewsSection() {
  const reviews = [
    {
      title: '고덕그라시움 계약 정00 고객 후기',
      image: '/images/reviews/review-1.jpg',
    },
    {
      title: '고덕센트럴푸르지오 계약 김00 고객 후기',
      image: '/images/reviews/review-2.jpg',
    },
    {
      title: '하남힐즈파크푸르지오 오00 고객 후기',
      image: '/images/reviews/review-3.jpg',
    },
    {
      title: '미사강변골든센트로 계약 최00 고객 후기',
      image: '/images/reviews/review-4.jpg',
    },
    {
      title: '고덕숲아이파크 계약 송00 고객 후기',
      image: '/images/reviews/review-5.jpg',
    },
    {
      title: '고덕아르테온 계약 홍00 고객 후기',
      image: '/images/reviews/review-6.jpg',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50" id="reviews">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            고객 후기
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            마이중개사와 함께한 고객들의 생생한 후기를 확인해보세요
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Review Image */}
              <div className="relative w-full h-80 bg-white mb-4 rounded-lg overflow-hidden border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-gray-600 text-sm">
                      후기 이미지
                    </p>
                  </div>
                </div>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-contain p-2"
                /> */}
              </div>

              {/* Review Title */}
              <div className="flex items-start">
                <span className="text-primary mr-2 mt-1">💡</span>
                <h3 className="text-base font-medium text-gray-800">
                  {review.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="text-center">
          <a
            href="https://emerald-sodium-9a9.notion.site/13cc56dba01d80428902e5db47cd1f79"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-soft hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-xl"
          >
            <span>후기 더보기</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

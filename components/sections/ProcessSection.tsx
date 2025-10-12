export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: '상담 신청',
      description: '간단한 정보 입력으로 상담 신청',
      icon: '📝',
    },
    {
      number: 2,
      title: '의뢰조건 확인',
      description: '예산, 평수, 층수, 방향, 입주 시기 등 상세 조건 상담',
      icon: '💬',
    },
    {
      number: 3,
      title: '입지 분석 & 단지 추천',
      description: '5년간의 지역 전문성을 바탕으로 최적의 단지 추천',
      icon: '🎯',
    },
    {
      number: 4,
      title: '매물 안내 & 동행',
      description: '조건에 맞는 여러 매물을 한번에 볼 수 있도록 스케줄 조율 및 동행',
      icon: '🏠',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 to-white" id="process">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            이렇게 진행됩니다
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            간단하고 체계적인 4단계 프로세스
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-0">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}

                {/* Step Card */}
                <div className="card text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            전 과정에서 <span className="text-primary font-bold">매수인 입장</span>에서만 생각합니다
          </p>
        </div>
      </div>
    </section>
  );
}

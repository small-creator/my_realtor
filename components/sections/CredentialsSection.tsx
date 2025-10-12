import Image from 'next/image';

export default function CredentialsSection() {
  const credentials = [
    {
      icon: '🏆',
      title: '지역 전문성',
      points: [
        '서울 강동구·하남 미사 지역 5년 경력',
        '지역 내 90% 이상 단지 중개 거래 경험',
        '축적된 정보와 상담 노하우로 최적의 단지·매물 추천',
      ],
    },
    {
      icon: '⏱️',
      title: '시간 절약',
      points: [
        '여러 부동산에 전화할 필요 없음',
        '시장의 모든 매물을 한곳에서 확인',
        '의뢰조건에 맞는 모든 단지·매물을 효율적으로 안내',
      ],
    },
    {
      icon: '💎',
      title: '고객 중심 중개',
      points: [
        '철저하게 매수인 입장에서만 생각',
        '단지·매물의 단점까지 솔직하게 안내',
        '객관적이고 투명한 정보 제공',
      ],
    },
    {
      icon: '🤝',
      title: '강력한 협상 기술',
      points: [
        '가격 협상 노하우 보유',
        '시세 변동·시장 상황 데이터 기반 협상',
        '더 유리한 조건으로 거래 성사',
      ],
    },
  ];

  return (
    <section className="section-spacing bg-white" id="credentials">
      <div className="container-custom">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-12">
              <Image
                src="/images/team/profile.png"
                alt="마이중개사 대표 프로필"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            지역 전문 중개사를 선택해야 하는 이유
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            5년간 쌓아온 전문성과 신뢰
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="card hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{credential.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-4">
                {credential.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2">
                {credential.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-soft p-6">
            <div className="text-4xl">🏅</div>
            <div className="text-left">
              <p className="font-bold text-lg text-gray-900">직방·호갱노노 제휴 중개사</p>
              <p className="text-gray-600">검증된 전문가와 함께하세요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

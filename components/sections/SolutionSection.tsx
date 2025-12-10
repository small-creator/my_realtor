export default function SolutionSection() {
  const solutions = [
    {
      title: '매물 접수를 받지 않습니다',
      description: [
        '내 매물이 없으니 철저하게 매수인 입장에서만 생각합니다.',
        '시장에 나와있는 매물은 동일합니다. 조건에 맞는 최적의 매물을 찾아드립니다.',
      ],
      icon: '🚫',
    },
    {
      title: '단점까지 솔직하게 알려드립니다',
      description: [
        '단지, 매물의 단점을 가감없이 이야기합니다.',
        '정확한 정보로 올바른 판단을 돕습니다.',
        '칭찬 일색의 소개는 하지 않습니다.',
      ],
      icon: '💯',
    },
    {
      title: '여러 부동산 전화할 필요 없습니다',
      description: [
        '조건에 맞는 모든 매물을 사전 확인하고 안내합니다.',
        '여러 단지, 매물을 한번에 볼 수 있도록 스케줄을 잡아드립니다.',
        '거래 가능여부, 가격 협상 가능성까지 미리 파악합니다.',
      ],
      icon: '⏰',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50" id="about">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            마이중개사는 이렇게 다릅니다
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            매수인만을 위한 차별화된 서비스
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card hover:shadow-xl bg-white"
            >
              {/* Icon & Title */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {solution.title}
                </h3>
              </div>

              {/* Content */}
              <ul className="space-y-3">
                {solution.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

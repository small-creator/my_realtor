export default function ComparisonSection() {
  const comparisons = [
    {
      icon: '⚖️',
      title: '변호사',
      status: '✅',
      statusText: '전문가 선택',
      statusColor: 'text-green-600',
      borderColor: 'border-green-500',
      bgColor: 'bg-white',
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
      statusColor: 'text-green-600',
      borderColor: 'border-green-500',
      bgColor: 'bg-white',
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
      statusColor: 'text-red-600',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      steps: [
        '매물을 먼저 검색',
        '중개사 선택 ❌',
      ],
    },
  ];

  return (
    <section className="section-spacing bg-white" id="comparison">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-gray-900">이상하지 않나요?</h2>
          <p className="text-xl text-gray-600">
            다른 분야는 <span className="text-primary font-bold">전문가를 먼저 선택</span>합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`card border-2 ${comparison.borderColor} ${comparison.bgColor}`}
            >
              <div className="text-4xl mb-4">{comparison.icon}</div>
              <h3 className="text-xl font-bold mb-2">{comparison.title} {comparison.status}</h3>
              <p className={`${comparison.statusColor} font-semibold mb-4`}>
                {comparison.statusText}
              </p>
              <ol className="text-left text-sm space-y-2 text-gray-700">
                {comparison.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-gray-900">
            미국은 <span className="text-primary">매수자가 중개사를 먼저 선택</span>하고 <span className="text-primary">최적의 매물</span>을 찾습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ProblemSection() {
  const problems = [
    {
      icon: '🏢',
      text: '"이 매물이 제일 좋다"는 말만 듣고 단점은 모른 채 계약',
    },
    {
      icon: '📱',
      text: '네이버 부동산 보고 부동산마다 일일이 전화하느라 시간 낭비',
    },
    {
      icon: '🤔',
      text: '더 좋은 조건의 매물이 있는지 확인할 방법이 없음',
    },
    {
      icon: '😰',
      text: '중개사가 자기 매물만 팔려고 해서 불안함',
    },
    {
      icon: '❓',
      text: '가격 협상 가능한지, 컨디션은 어떤지 알 수 없음',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50" id="problem">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 leading-[1.2]">
            지금까지의 부동산 중개,<br />이런 경험 있으시죠?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card hover:shadow-xl"
            >
              <div className="flex items-start">
                <span className="text-4xl mr-4 flex-shrink-0">{problem.icon}</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 font-medium">
            이제는 <span className="text-primary font-bold">다른 방식</span>이 필요합니다
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ServiceAreaSection() {
  const areas = [
    {
      region: '서울 강동구',
      districts: ['고덕', '상일', '명일', '강일', '암사'],
      icon: '🏙️',
    },
    {
      region: '하남 미사',
      districts: ['미사강변도시 전체'],
      icon: '🌆',
    },
  ];

  return (
    <section className="section-spacing bg-white" id="area">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900">
            서비스 제공 지역
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            지역 내 67개 단지 거래 경험의 디테일한 중개서비스
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="card hover:shadow-xl text-center"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{area.icon}</div>

              {/* Region */}
              <h3 className="text-2xl font-bold text-primary mb-4">
                {area.region}
              </h3>

              {/* Districts */}
              <div className="space-y-2">
                {area.districts.map((district, idx) => (
                  <div
                    key={idx}
                    className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2"
                  >
                    {district}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-soft p-6">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-primary">90% 이상 단지</span>에서 중개 거래 경험 보유
            </p>
            <p className="text-gray-600 mt-2">
              지역 내 아파트 단지의 특성과 시세를 정확히 파악하고 있습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

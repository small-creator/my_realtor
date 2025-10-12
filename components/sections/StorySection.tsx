export default function StorySection() {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900">
              왜 마이중개사를 시작했을까요?
            </h2>
          </div>

          <div className="bg-white rounded-soft shadow-soft p-8 md:p-12">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                직방, 호갱노노 제휴 중개사로 활동하며 수많은 공동중개 거래를 진행해왔습니다.
              </p>

              <p>
                그러면서 현재 중개 시스템의 문제점을 발견했습니다.
                <br></br><span className="text-primary font-bold"> 매수인이 객관적인 정보를 받기 어렵다</span>는 것이었습니다.
              </p>

              <p>
                기존 부동산은 자기 매물을 팔아야 하기 때문에, 더 좋은 조건의 매물이 있어도 안내하지 않습니다.
                <br></br>매물의 단점은 숨기고 장점만 강조합니다.
              </p>

              <p className="text-primary-dark font-bold text-xl border-l-4 border-primary pl-4">
                "매수인만을 위한 중개사가 필요하다"
              </p>

              <p>
                이런 확신으로 마이중개사를 시작했습니다.
              </p>

              <p>
                지금까지 부동산은 <span className="font-bold">파는 것</span>에 집중했다면,
                마이중개사는 <span className="text-primary font-bold">찾아드리는 것</span>에 집중합니다.
              </p>

              <p className="bg-primary/10 p-6 rounded-soft text-center font-medium text-gray-900">
                매수인의 입장에서만 생각하고, 매수인의 이익만을 위한 중개서비스
                <br />그것이 바로 마이중개사입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

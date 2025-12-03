'use client';

import CTAButton from '../CTAButton';

export default function CTASection() {

  return (
    <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white" id="cta">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6 leading-[1.2]">
            더 좋은 조건의 매물을<br />구할 수 있는 기회를 놓치지 마세요!
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90">
            아파트를 찾고 계신가요?<br />
            집만 보여주는 부동산 말고, 지역 전문 중개사와 디테일한 상담을 통해<br />
            의뢰조건에 딱! 맞는 아파트를 찾아보세요.
          </p>

          <div className="mb-12">
            <CTAButton
              text="지금 무료 상담 신청하기"
              href="https://tr.ee/ezLrPu6yQI"
              variant="secondary"
              className="text-xl py-5 px-10"
            />
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:010-8074-2642"
              className="bg-white/10 backdrop-blur-sm rounded-soft p-6 hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-bold mb-2">즉시 상담</h4>
              <p className="text-white/80">010-8074-2642</p>
            </a>

            <a
              href="https://open.kakao.com/o/suV8gMZg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-soft p-6 hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-bold mb-2">카카오톡 상담</h4>
              <p className="text-white/80">오픈채팅방 바로가기</p>
            </a>
          </div>

          <p className="mt-8 text-white/80">
            상담 신청 후 빠른 시간 내에 연락드리겠습니다
          </p>
        </div>
      </div>
    </section>
  );
}

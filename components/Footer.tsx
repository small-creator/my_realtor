export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">마이중개사</h3>
            <p className="text-gray-400 text-sm mb-2">
              아파트 매수 전문 중개서비스
            </p>
            <p className="text-gray-400 text-sm">
              지역 전문 중개사와 집찾기
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 전화: [02-442-2642]</li>
              <li>📧 이메일: [kikikmss@gmail.com]</li>
            </ul>
          </div>

          {/* 사업자 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">사업자 정보</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>상호명: [에이전트공인중개사사무소]</li>
              <li>대표자: [강민수]</li>
              <li>사업자등록번호: [396-34-01040]</li>
              <li>주소: [서울시 강동구 고덕로20길9 101호]</li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 마이중개사. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

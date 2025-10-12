# 마이중개사 랜딩페이지

아파트 매수 전문 중개서비스 "마이중개사"의 랜딩페이지입니다.

## 프로젝트 개요

**핵심 가치**: "팔지 않습니다. 찾아드립니다."

매물을 팔지 않고 오직 매수인의 입장에서만 집을 찾아주는 차별화된 중개 서비스 소개 페이지입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (설치됨, 필요시 사용 가능)

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

## 페이지 구조

랜딩페이지는 다음 섹션들로 구성되어 있습니다:

1. **Hero Section**: 메인 헤드라인과 핵심 가치 제안
2. **Problem Section**: 기존 중개 시스템의 문제점
3. **Solution Section**: 마이중개사의 차별화된 해결책
4. **Process Section**: 서비스 이용 4단계 프로세스
5. **Credentials Section**: 전문성 증명 (5년 경력, 제휴 정보 등)
6. **Story Section**: 브랜드 스토리텔링
7. **Service Area Section**: 서비스 제공 지역 (강동구, 미사)
8. **CTA Section**: 상담 신청 유도
9. **FAQ Section**: 자주 묻는 질문
10. **Footer**: 사업자 정보 및 연락처

## 디자인 시스템

### 컬러 팔레트

- **Primary**: #0ea5e9 (하늘색)
- **Primary Dark**: #0284c7
- **Primary Light**: #38bdf8
- **Success**: #10b981
- **Warning**: #f59e0b
- **Error**: #ef4444

### 타이포그래피

- **영문**: Roboto (300-700)
- **한글**: Noto Sans KR (300-700)

### 컴포넌트 스타일

- **Border Radius**: 12px (rounded-soft)
- **Box Shadow**: 0 4px 6px rgba(0,0,0,0.1)

## 반응형 디자인

모든 섹션은 모바일, 태블릿, 데스크톱에 최적화되어 있습니다.

- **Mobile**: ~768px
- **Tablet**: 769px~1024px
- **Desktop**: 1025px+

## MVP 기능

현재 버전은 MVP로, 다음 기능들은 구현되지 않았습니다:

- 상담 신청 폼 연동
- 백엔드 API 연결
- 이메일/문자 발송
- 데이터베이스 연동

상담 신청 버튼 클릭 시 임시 알림이 표시되며, 실제 연락처 정보는 Footer와 CTA 섹션에서 확인할 수 있습니다.

## 커스터마이징

### 연락처 정보 수정

다음 파일들에서 `[전화번호]`, `[카카오톡 채널]`, `[이메일]` 등을 실제 정보로 교체하세요:

- `components/Footer.tsx`
- `components/sections/CTASection.tsx`

### 사업자 정보 수정

`components/Footer.tsx`에서 사업자 정보를 수정하세요.

## SEO 최적화

`app/layout.tsx`에서 메타 태그가 설정되어 있습니다:

- Title
- Description
- Keywords
- Open Graph Tags

## 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify

1. GitHub에 푸시
2. Netlify 대시보드에서 연결
3. Build command: `npm run build`
4. Publish directory: `.next`

## 라이선스

이 프로젝트는 마이중개사의 소유입니다.

## 문의

프로젝트 관련 문의사항이 있으시면 연락 주세요.

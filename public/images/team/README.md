# 중개사 프로필 사진

이 폴더에 중개사 프로필 사진을 저장하세요.

## 권장 사항

- **파일명**: `profile.jpg`, `profile-1.jpg`, `profile-2.jpg` 등
- **이미지 크기**: 500x500px 이상 (정사각형 권장)
- **파일 형식**: JPG, PNG, WebP
- **파일 크기**: 500KB 이하 권장

## 사용 예시

```tsx
import Image from 'next/image';

<Image
  src="/images/team/profile.jpg"
  alt="중개사 프로필"
  width={200}
  height={200}
  className="rounded-full"
/>
```

## 신뢰도 향상을 위한 사진 가이드

1. **밝고 전문적인 배경**: 흰색이나 중립적인 색상 배경
2. **정면 얼굴 촬영**: 신뢰감을 주는 자연스러운 미소
3. **비즈니스 캐주얼 복장**: 깔끔하고 전문적인 인상
4. **고해상도**: 선명하고 깨끗한 이미지

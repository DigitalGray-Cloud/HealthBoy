# HealthBoy

Cloudflare Pages에 배포할 `HealthBoy` 프런트엔드 프로젝트입니다.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## Cloudflare Pages

새 프로젝트를 만들 때 아래 값으로 설정하면 됩니다.

- Project name: `healthboy`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

이렇게 만들면 기본 배포 주소는 `https://healthboy.pages.dev`가 됩니다.

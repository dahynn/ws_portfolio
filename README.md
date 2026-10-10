# Developer portfolio

React와 Vinext로 구성한 개인 개발 포트폴리오입니다. 정적 사이트로 빌드해 GitHub Pages에 배포합니다.

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```sh
npm ci
npm run dev
```

## 검증 및 빌드

```sh
npm run lint -- --deny-warnings
npm run build:pages
```

결과물은 `dist/client`에 생성됩니다. 주요 섹션, 로컬 이미지 경로, 404 페이지, CNAME도 함께 검사합니다.

## GitHub에서 설정할 항목

1. **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. **Settings → Secrets and variables → Actions → Variables**에 `PORTFOLIO_PAGES_ENABLED` = `true`를 추가합니다.
3. **Settings → Pages → Custom domain**을 `wsgroup.dahyeon.kr`로 설정합니다. DNS 확인이 끝나면 HTTPS를 활성화합니다.
4. 아래 DNS 레코드를 추가하고, **Actions → Portfolio CI → Run workflow**를 실행합니다.

| 유형 | 호스트 | 대상 | TTL |
| --- | --- | --- | --- |
| CNAME | wsgroup | dahynn.github.io. | 600 |

`public/CNAME`과 메타데이터는 `wsgroup.dahyeon.kr`를 기준으로 합니다. 다른 상위 도메인을 사용하면 두 곳과 정적 검증 스크립트의 주소를 함께 변경합니다.

`main` 푸시와 PR에서 lint 및 정적 빌드가 실행됩니다. 배포는 `PORTFOLIO_PAGES_ENABLED=true`일 때만 수행하며, PR에서는 배포하지 않습니다.

## 콘텐츠 및 디자인

기존 프로젝트 상세와 경험을 바탕으로 표지, 개발 여정, 일하는 기준을 지원 직무에 맞춰 구성했습니다. 회사의 핵심가치와 개인의 프로젝트 경험은 구분해서 표현합니다.

- CI 및 핵심가치 출처: [공식 경영이념·CI](http://www.wsgroup.co.kr/m12.php)
- CI: Blue `#004A93`, Red `#E42613` (공식 페이지 색상 견본 기준)
- 로고: 사용자 제공 PNG, 비율 유지
- 제목 서체: SUIT ExtraBold, SIL Open Font License (`public/assets/fonts/SUIT-OFL.txt`)
- 본문: Pretendard
- Pages 구성: [GitHub 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

본 사이트는 개인 지원용 포트폴리오입니다.

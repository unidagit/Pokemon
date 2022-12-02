# Pokemon Search

## 배포 URL

- URL : https://pokemon-unidagit.vercel.app/

<br>

## 프로젝트 소개

poke Api를 사용하여 포켓몬 사이트를 구현했습니다.
포켓몬 이름 또는 번호를 검색할 수 있습니다. 구현하고 싶은 기능들을 추가하여 개선해 나갈 예정입니다.

<br>

## ⚒ 개발 기간

2022.11.30 ~ 2022.12.02

<br>

## ⚒ 개발 환경

### [기술 스택]

- React
  - 재사용가능한 컴포넌트 단위로 작성하기 위해 적용했습니다.
- Typescript
  - 타입기반의 안전한 프로그래밍을 위하여 적용했습니다.
- React-Query
  - 데이터 Fetching, 동기화, 로딩상태, 에러처리, 서버 쪽 데이터 업데이트 등 전역상태관리를 위해 적용했습니다.
- Styled Component
  - UI 컴포넌트를 작성하기 위해 적용했습니다.

<br>

## ⚒ 구현 내용

![Honeycam 2022-12-02 20-56-40](https://user-images.githubusercontent.com/102465469/205287702-803c5023-13bd-460d-bbd4-0ba9a81bfd08.gif)

- 포켓몬 ID를 검색하면 React-Query로 포켓몬 정보를 받아옵니다. 검색 후 search 버튼을 한번 더 누르면 홈리스트가 다시 보입니다.

<br>

![Honeycam 2022-12-02 21-01-00](https://user-images.githubusercontent.com/102465469/205288760-85d33910-a934-4605-b1e0-8e7c380d1d70.gif)

- 검색중 로딩화면을 띄어줍니다. 만약 존재하지 않는 ID가 검색된다면 에러 메시지를 보여줍니다.

<br>

![Honeycam 2022-12-02 20-51-31](https://user-images.githubusercontent.com/102465469/205286969-a2d8f454-63a9-4d39-873d-25d3b7d20bae.gif)

- 사이트 접속시 포켓몬 리스트가 펼쳐집니다. 오른쪽 하단 Top버튼을 누르면 제일 상단으로 이동하여 사용자 경험 개선을 향상시켰습니다.

<br>

## ⚒ 추가 구현 사항

- 포켓몬 카드를 누르면 모달창이 띄어지면서 세부정보가 보여집니다.
- 무한스크롤링 구현 .
- 다크모드 구현.

<br>

## ⚒ 파일 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜api.ts
 ┣ 📂Components
 ┣ 📂assets
 ┃ ┣ 📂navbar
 ┃ ┣ 📂pokemonList
 ┃ ┣ 📂pokemonSearchCard
 ┃ ┣ 📂searchbar
 ┃ ┗ 📂topButton
 ┣ 📂interfaces
 ┃ ┗ 📜interface.ts
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┗ ┗ 📜Home.tsx
 ┣ 📂styles
 ┃ ┣ 📂theme
 ┃ ┣ ┣ 📜index.tsx
 ┃ ┗ ┗ 📜styled.d.ts
 ┃ ┣ 📜commonStyle.ts
 ┃ ┣ 📜global.ts
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts

```

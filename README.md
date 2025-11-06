# 🕺 폼 구현 실습하기 (진행 과정)

- 작업 기간: 11.5 ~
- JS 구현 진행 과정 정리

---

# ⚙️ 프로젝트 기본 세팅

## 0️⃣ TODO

- [x] vite 프로젝트 세팅
- [x] Prettier 설정
- [x] ESLint 설정
- [ ] Husky 설정
- [ ] commit lint 설정
- [x] 파일 절대 경로(alias) 설정

## 1️⃣ vite 프로젝트 설치

- `.`은 현재 디렉토리를 의미함

```bash
npm create vite@latest .
```

---

## 2️⃣ Prettier 설정

**프리티어 패키지 설치**

- `--save-exact` 옵션을 추가하면 버전이 고정됨 `ex) ^9.1 (x) 9.1(o)`
- 패키지 버전을 정확하게 고정해서 팀 프로젝트에서 모든 팀원이 동일한 버전을 사용하도록 할 때 유용

```bash
npm install --save-dev --save-exact prettier
```

**프리티어 설정 추가**

- `.prettierrc`, `.prettierignore` 파일 생성 후 설정 추가

> 참고) 아래 명령어로 프리티어 파일을 생성할 수 있음
> 명령어 없이 그냥 파일 생성해도 됨
>
> ```bash
> node --eval "fs.writeFileSync('.prettierrc','{}\n')"
> node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
> ```

- Prettier [playground](https://prettier.io/playground/) 참고해서 prettier 설정 추가
- prettierignore 파일 설정 추가 (node_modules, dist, .github)
- `scripts`에 프리티어 실행 커맨드 설정

---

## 3️⃣ 파일 절대 경로 설정

- `jsconfig.json` 파일 생성 (VSCode 자동완성 설정을 위해 추가)
  - `./src/*` alias 설정
- `vite.config.js` alias 설정 추가

---

## 4️⃣ ESLint 설정

**프리티어 설정 패키지 설치**

- ESLint와 Prettier를 같이 사용할 때 설치하는 패키지
- ESLint 규칙 중 프리티어와 충돌할 수 있는 규칙을 꺼줌

```bash
npm i --D --save-exact eslint-config-prettier
```

**추가 플러그인 설치**

- eslint-plugin-jsx-a11y 접근성 규칙
- eslint-plugin-import import 순서 제어 용도로 사용
- eslint-plugin-react react 플러그인

```bash
npm i --D --save-exact eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

**alias 오류 해결**

- unable to load resolver "alias" 에러가 발생해서 `eslint-import-resolver-vite` 패키지 설치해서 해결함
- [참고>](https://github.com/eslint/eslint/discussions/14667#discussioncomment-12259265)

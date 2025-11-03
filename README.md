# 🕺 폼 구현 실습하기

## 🎯 프로젝트 목표

- 실제 API 연동을 가정하고, 폼 데이터를 API에 전송하는 형식에 맞춰 `console.log()`로 출력하는 연습을 진행합니다.
- JavaScript 구현 → TypeScript 마이그레이션 → Next.js 마이그레이션(App Router, .ts) 순서로 진행합니다.
- 팀원 간 코드 스타일을 공유하고, 서로의 코드를 리뷰하며 코드 리뷰 연습을 진행합니다.
- 완료 목표일: 11월 16일

---

## 🧩 학습 목표

**1. React 프로젝트 세팅 연습**

- Vite + Prettier + ESLint (+ Husky는 선택사항)

**2. 폼 구성 및 상태 관리**

- 유효성 검사 및 에러 처리 로직 구현

**3. 단계별 마이그레이션 실습**

- React (JS) → React (TS) → Next.js (App Router, TS)
- Next.js 단계에서도 Prettier, ESLint (+ Husky 선택) 적용

---

## 🧱 브랜치 규칙

- 각자 이름 기반의 브랜치를 생성합니다.
- 세부 작업은 기능 단위로 분기하여 진행 후, 해당 개인 브랜치에 머지합니다.

예시:

```bash
ahreum-js → ahreum-js/feat/input
ahreum-ts → ahreum-ts/feat/form-validation
ahreum-next → ahreum-next/feat/image-upload
```

- `JS`로 작업한 내용은 `ahreum-js`에 머지
- `TS`로 마이그레이션한 내용은 `ahreum-ts`에 머지
- `Next.js`로 마이그레이션한 내용은 `ahreum-next`에 머지
- ⚠️ `main` 브랜치에 직접 머지하지 않습니다.

---

## 🔔 PR 알림

- Pull Request가 생성되면
  디스코드 채널 `#🔔form-pr-알림` 에 자동으로 알림 메시지가 전송됩니다.
- 팀원들은 알림을 확인하고, 리뷰 또는 의견 코멘트를 남깁니다.
- 리뷰 승인 후에만 개인 브랜치에 머지합니다.

---

## 🔥 요구사항

- [피그마 시안](https://www.figma.com/design/WF33JFrEdURhAj24xcfNQg/%ED%8F%BC-%EA%B5%AC%ED%98%84-%EC%8B%A4%EC%8A%B5?node-id=0-1&t=VfRk9Y4tvMHPyADH-1)대로 UI를 구현합니다.

- UI 스타일링은 [`tailwind`](https://tailwindcss.com/docs/installation/using-vite)를 사용합니다.

- 기타 요구사항은 표를 참고합니다.

| 구분                  | 요구사항                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| **폼 활성화**         | 모든 필수 입력값이 입력되면 **제출 버튼이 활성화**됩니다.                                                  |
| **이메일**            | 이메일 형식(`example@domain.com`)이 아닐 경우 **에러 메시지 표시**                                         |
| **비밀번호**          | 비밀번호는 **8자 이상**이어야 하며, 조건을 만족하지 않으면 에러 메시지 표시                                |
| **프로필 이미지**     | 이미 추가된 이미지가 있을 경우, 다시 추가 시 **“이미 1개의 프로필 이미지만 가능합니다.”** 에러 메시지 표시 |
| **자기소개**          | 선택 입력 (입력하지 않아도 제출 가능)                                                                      |
| **가입경로**          | 선택 입력 (선택 시 옵션: 지인 소개 / 광고 / 인터넷 검색)                                                   |
| **제출 시 콘솔 출력** | 모든 유효성 검사를 통과하면 `console.log()` 출력                                                           |

---

## ✨ 데이터 형식

폼이 정상적으로 제출되었을 때 서버에 전달된다고 가정하는 데이터 형식입니다.

```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "bio": "안녕하세요! 프론트엔드 개발을 공부 중입니다.",
  "profileImage": "File",
  "signupPath": "지인 소개"
}
```

> ⚙️ 선택 항목(bio, profileImage, signupPath)은 입력되지 않았을 경우 요청 데이터에서 제외될 수 있습니다.

| 필드명         | 타입   | 필수 여부 | 설명                                             |
| -------------- | ------ | --------- | ------------------------------------------------ |
| `email`        | string | ✅        | 이메일 주소                                      |
| `password`     | string | ✅        | 비밀번호 (8자 이상)                              |
| `bio`          | string | ⛔️       | 자기소개                                         |
| `profileImage` | File   | ⛔️       | 프로필 이미지 파일 (최대 1개)                    |
| `signupPath`   | string | ⛔️       | 가입 경로 ("지인 소개" / "광고" / "인터넷 검색") |

---

## 🖨️ 콘솔 출력

- API 요청을 실제로 보내지 않으므로, 제출 시에는 전송될 데이터 객체를 `console.log()`로 출력합니다.

### ✅ 예시 코드

```js
const formData = {
  email,
  password,
  bio,
  profileImage: file,
  signupPath,
};

console.log(formData);
```

### ✅ 콘솔 출력 결과

```js
{
  email: "user@example.com",
  password: "securepassword123",
  bio: "안녕하세요! 프론트엔드 개발을 공부 중입니다.",
  profileImage: File { name: "profile.png", size: 12345, type: "image/png" },
  signupPath: "지인 소개"
}
```

---

## 🔁 프로젝트 진행 순서

1. **개인 브랜치 생성**

   - 예: `ahreum-js`

2. **React + JavaScript로 폼 UI 구현**

   - 요구사항에 맞춰 폼 및 유효성 검사 로직 작성
   - 제출 시 `console.log()`로 데이터 출력

3. **Pull Request 생성**

   - 예: `ahreum-js/feat/form` → `ahreum-js`
   - PR 생성 시 Discord `#🔔form-pr-알림` 채널에 알림 확인

4. **리뷰 및 수정**

   - 팀원 코드 리뷰 → 피드백 반영

5. **TypeScript 마이그레이션**

   - JS 작업 완료 후 `ahreum-ts` 브랜치로 이동

6. **Next.js (App Router, TS) 마이그레이션**

   - `ahreum-next` 브랜치에서 진행

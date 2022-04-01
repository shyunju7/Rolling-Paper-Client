## 롤링 페이퍼(2021.10 - 진행중)

### 프로젝트 소개
- 친구들과 공유할 수 있는 온라인 롤링 페이퍼 서비스로, 오프라인 롤링 페이퍼처럼 다양한 텍스트 스타일링이 가능합니다.
<br/>


### 개발환경 및 사용 기술
- **Front-End** <br/>
`React`  `Typescript`  `styled-component`  `Axios`  

- **Back-End** <br/>
`NestJS`  `postGresDB`  `TypeORM`

<br/>

### 기능 및 역할

**0) 서비스 기획, UI 제작 및 개발**

**1) Intro Page**

![r1](https://user-images.githubusercontent.com/38373150/161198866-39b0b6f1-5a66-4dd7-b954-ed52973d8c91.gif)

```
  - 사용자별 paperCode 생성하여 Main Page로 이동 구현
  - Axois를 통한 API 통신 (사용자 생성 및 PaperCode 생성 구현)
```

<br/>

**2) Main Page**

![r2](https://user-images.githubusercontent.com/38373150/161208132-1a37d015-26a1-47ee-b9bd-acdbdae0d0bb.gif)

```
  - 메세지 입력창 구현 및 폰트 및 텍스트 스타일링 기능 구현
  - 작성자 미입력시, 익명 사용자 저장 
  - 작성한 텍스트 스티커를 원하는 위치에 배치 및 저장하기 기능 구현
```

<br/>

3) Share Page
![r3](https://user-images.githubusercontent.com/38373150/161209799-0eeae774-2c67-44bc-805b-788d202bbeb8.gif)
```
  - 링크 복사 기능 구현
```

- [ ] 카카오톡 공유하기 기능 구현하기

4) Result Page
- [ ] 결과 화면 다운로드 기능 구현하기
- [ ] 다시 참여하기 기능 구현하기
  

<br/>

### 라이선스
👉 `react-draggable`을 사용하여 텍스트 스티커 기능을 구현하였습니다.
👉  롤링 페이퍼 서비스에는 IM혜민체, HS유지체, 어비 찌빠빠체, 어비 퀸제이체를 사용하여 텍스트 스타일링을 적용하였습니다.

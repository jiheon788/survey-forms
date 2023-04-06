# Survey Forms
[![Netlify Status](https://api.netlify.com/api/v1/badges/48778713-8412-4dbb-a162-0261c37e7d1c/deploy-status)](https://app.netlify.com/sites/classum-01-survey-forms-jiheon788/deploys)

## [Demo](https://classum-01-survey-forms-jiheon788.netlify.app)&nbsp;&nbsp;&nbsp;&nbsp;[요구 사항 목록](./REQUIREMENTS.md)

구글 설문 조사를 구현하는 클라썸 기업 과제입니다. 과제 요구사항을 모두 준수하였습니다. 

제가 자주 사용하는 Path Alias, Dynamic Routing, eslint, prettier 설정 등을 위해 [Custom CRA + TypeScript 템플릿](https://github.com/jiheon788/react-boilerplate)으로 제작되었습니다.

## Getting Started

아래 명령어를 따라 직접 설치 및 실행할 수 있습니다. 또는 [https://classum-01-survey-forms-jiheon788.netlify.app](https://classum-01-survey-forms-jiheon788.netlify.app)에서 라이브 데모를 볼 수 있습니다. 

#### Install
```
npm i
```
#### Build
```
npm run build
```
#### Start
```
npm start
```

## Features

- CRU- 설문지 Title, Description
- CRUD 질문 (단답, 장문, 객관식, 체크박스, 드롭다운 5 가지 유형)
  - Copy, 필수 질문 설정
- CRUD 질문 옵션 (객관식, 체크박스, 드롭다운)
- 미리보기 (제출, 양식 초기화)
- 질문 순서 변경 (Drag & Drop)
- 질문의 옵션 순서 변경 (Drag & Drop)

## Tech stack

`React`, `TypeScript`, `Redux-toolkit`, `Chakra-UI`, `react-hook-form`, `react-uuid`, `react-router-dom`,  `craco`

## Directory

```bash
src
├─components
│  ├─common # 공통 컴포넌트
│  ├─formCreator  # 폼 생성자 
│  └─formViewer # 폼 뷰어
├─constants # 상수
├─hooks # 커스텀 훅
├─meta # 메타데이터
├─pages # 페이지 컴포넌트
├─store # 리덕스 스토어
│  └─slices
└─styles # 스타일 관련
```
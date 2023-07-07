# LGSI
## Water Management System in India using Raspberry Pi

## Table of Contents
Note: This is only a navigation guide for the specification, and does not define or mandate terms for any specification-compliant documents.
- [프로젝트에 대한 소개](#프로젝트에-대한-소개)
  - [Description](#description)
  - [개발 기간](#개발-기간)
  - [팀 소개](#팀-소개)
- [시작 가이드](#시작-가이드)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Stacks](#stacks)
- [화면 구성 및 API 주소](#화면-구성-및-api-주소)
- [주요 기능](#주요-기능)
    
## 프로젝트에 대한 소개

### Description
인도에서 물 오염으로 고통받는 인구는 약 46%이다. 그렇기 때문에 깨끗한 물에 대한 접근성을 개선하고 인도에서 더 나은 물 관리를 촉진하고자 한다. 

### 개발 기간
* 2023.05.16 ∼ 2023.07.31

### 팀 소개
- 정규원 - 경북대학교 컴퓨터학부. HW 구축
- 홍선주 - 경북대학교 컴퓨터학부. HW 구축
- 이규원 - 경북대학교 컴퓨터학부. 프론트엔드
- 이주연 - 경북대학교 컴퓨터학부. 프론트엔드
- 이태곤 - 경북대학교 컴퓨터학부. 백엔드 / 서버
- 김헌재 - 경북대학교 통계학과. PM(프로젝트 기획)

전체적으로 간결하고 명료하게 쓰고, 프로젝트의 가치 전달.

## 시작 가이드

### Requirements
For building and running the application you need:
Node.js ....
......
......
필요한 요구사항들과 버전들 적어준다.

### Installation
repository를 clone하고 패키지 설치, 환경변수 설정, 실행하는 과정에 대한 내용들 코드로.

## Stacks
- web - java, HTML, jquery??
- DB - MySQL??
- Design - Figma

프로젝트 개발하면서 사용한 기술 스택 써준다.

## 화면 구성 및 API 주소
- 프론트엔드- 개발한 화면에 대한 내용 사진으로.
<img src="https://github.com/KimHeonjae/LGSI/assets/134956232/0c76d398-1476-48c5-a5a1-56d35f9b4f3b.png" width="600" height="600">

- 백엔드- API 주소 목록이나 이를 기록한 링크 걸어두면 좋을듯.

## 주요 기능
프로젝트의 주요 기능들 소개한다. 크게 3가지로 설명하면 될듯.
지역별 수질 관련 데이터 제공 및 모니터링, 자동 업데이트 기능, 알림 기능, 
* 지역별 수질 관련 데이터 제공 - 라즈베리 파이에 센서를 연결하여 수질 관련 데이터를 제공해준다. 구체적으로 물의 온도, pH, 탁도, 수위에 대한 데이터를 얻고, 이를 토대로 모니터링한다.
* 데이터 자동 업데이트 - 일정 시간이 지나면 자동적으로 데이터가 업데이트 되는 구조이다.
* 알림 시스템 - 수질 데이터를 통해 물의 상태를 파악
  이를 통해 사용자는 즉각적으로 물 상태에 대한 정보를 받아 대응 조치를 취할 수 있다.



# Nextjs page h21

## pages directory
#### arti
* HO / RSS 는 <mark>지난호보기</mark>, <mark>RSS</mark> 페이지로 각각 존재
##### INTRODUCTION
* 소개페이지로 현재는 1, 2, 3 .html 존재
* dynamic import로 내용들은 Components/section 디렉토리에서 가져옴

---------------------------------------------------------------------------------

## Components directory
* view/section/item
* seo는 페이지별로 다를 수 있음
    * (ex.메인용 seo, 기사본문용 seo)
    * meta 태그 내용 변경은 props 계획
#### Header version
* Main에서 사용하는 Header 디자인
* Main페이지 이외에서 사용하는 Header 디자인

#### Navigation version
* Navigation_section2는 기사 관련 페이지에서 사용 / 1은 그 외
* Navigation_series는 이슈 연재에서 사용

#### commonly used
* Sitemap 

---------------------------------------------------------------------------------

## lib directory
* constants.js에 전역변수로 사용되는 링크 선언

## styles directory
* Componentst.module.css 기존에 태그에 지정된 style 속성들을 모아놓음
* 스타일 분리 목적.
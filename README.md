# 지진연구정보 마크업 가이드
### SCSS 구조
     common
          ㄴ font : @import 폰트 (기본 Pretendard, Roboto, Noto Sans KR)
          ㄴ reset
     
     component
          ㄴ button
          ㄴ form
          ㄴ popup
          ㄴ table
          ㄴ text
          
     control
          ㄴ mixins : 구글 아이콘 폰트
          ㄴ variables : 공통 속성 변수
    
     layout
          ㄴ container 
          ㄴ footer
          ㄴ header
     
     page
          ㄴ home : 메인
          ㄴ sub : 서브페이지별 스타일


### CSS 네이밍
     * 기본 BEM
     * 컴포넌트 단위로 공통 스타일 모음
     * media query 적용은 각 컴포넌트 단위 별로 넣음 (1280 / 768 두가지 BP 기준)


### 시작하기
     npm i
     npm start


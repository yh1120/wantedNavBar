# **원티드 프리온보딩코스**

원티드에서 진행하는 프리온보딩코스를 지원하기 위한 과제다. 지원 서류는 원티드 이력서, 숏에세이(2개 기업 이상), 기술과제 총 3가지다.

이것은 그 중 기술과제에 관한 github이며, 원티드 메인 페이지의 gnb를 구현하는 것이 목표다.

## **개발 과정**

- 1일차
  - 데스크탑 기반 골격을 잡았다. NavBar를 가져와 쓰지 않고, 되도록 내가 직접 구현하려고 한다.
    여기서 어려웠던 점은 아무래도 CSS관련한 부분이었다. 컴포넌트를 구성하고 다듬는 부분은 금방 만들 수 있었지만 박스를 하나하나 모양에 맞게 그리는 것은 아직 부족하다. 그리고 hover 혹은 onMouseEnter를 통해 Menu를 보여야 할 것 같은데, 익숙한 것은 hover이지만 컴포넌트간 연동을 css로 잘 다루지 못해 쉽지 않다.
    styled-components를 통해 컴포넌트간 연계를 이뤄내기 어려울 것 같으면 다시 .css를 통해 익숙한대로 구현하고, react-responsive를 사용해서 반응형 웹을 만들어볼 예정이다.
- 2일차

  - 나머지 모든 세부 구현을 했다. 필요한 css 정보를 wanted 페이지를 참고하여 작성했고, login/logout, mouseEvent에 따른 화면의 변화와 media query를 활용한 반응형 웹을 구현하는 데 집중했다.

    [https://s3-us-west-2.amazonaws.com/secure.notion-static.com/359c3d45-ee3e-42f2-a02c-82bdcf80b3d8/**2021-07-21**3.19.30.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/359c3d45-ee3e-42f2-a02c-82bdcf80b3d8/__2021-07-21__3.19.30.mov)

## **src 구조**

```markdown
├─src
│ │ App.js
│ ├─Component
│ │ GlobalNavBar.js
│ │ Title.js
│ │ BarList.js
│ │ Menu.js
│ │ Modal.js
│ │ SideList.js
```

GlobalNavBar를 통해 통합적으로 Component를 관리한다. 이 안에는 4개의 컴포넌트가 사용된다.

- Title.js

  wanted 로고와 mobile 환경에서 회원가입하기 버튼을 정의했다. 로그인을 한 후 mobile환경으로 변경시 사라지고 BarList, SideList만 남게 된다.

- BarList.js

  메뉴 버튼을 모아놓은 list이다. mobile 환경과 desktop환경에서 보여지는 메뉴가 다르며, tablet 환경에서는 메뉴의 폭이 유동적으로 변한다. 탐색 버튼 위에 마우스를 올려놓을 경우 Menu 컴포넌트가 활성화된다.

- Menu.js

  BarList의 탐색 버튼에 의해 활성화된다. state를 통해 관리가 되며, 활성화 된 이후에는 Menu에서 마우스가 더날 때 비활성화 되게끔 했다.

- SideList.js

  login, mobile 환경에 따라 여러가지 옵션을 주었다. 로그아웃 환경에서는 로그인/회원가입 버튼이, 로그인 환경에서는 알림 버튼과 아바타 버튼이 나타난다. 또한 mobile환경에서는 검색, 더보기메뉴 버튼만 나타난다.

## **사용한 라이브러리**

### **material-ui**

- 아이콘을 사용하기 위해 가져왔다.

### **styled-components**

- js 안에서 css작업을 하기 쉽게 도와주는 라이브러리이다.(CSS in JS)
  선언한 변수는 컴포넌트 형태로 사용할 수 있고, ``사이의 문법은 css와 동일하게 사용 가능하다.

### **react-responsive**

- 반응형 웹을 만들기 위해 사용했다. 사용자가 정한 화면 폭에 따라 true 혹은 false가 반환된다.

## state 관리

- GlobalNavBar.js

  ```jsx
  const [searchHover, setSearchHover] = useState(false);
  const [login, setLogin] = useState(false);
  ```

  login과 hover를 관리하는 state를 최상단 컴포넌트인 GlobalNavBar에 넣었다. 이를 통해 Title, SideList에서 각각 login, logout을 가능하게 하고, BarList에서 hover를 통해 Menu가 나타나도록 적용했다.

- SideList.js

  ```jsx
  const [modalOpen, setModalOpen] = useState(false);
  ```

  Mobile환경에서 더보기 메뉴를 클릭할 시 나타나는 Modal을 제어하는 state이다. 더보기 메뉴를 클릭하면 모딜이 출력, close 버튼을 누르거나, 로그아웃 버튼을 누르면 false로 변경되어 모달이 사라진다.

## 깨달은 점

1. 지식으로만 알았던 css에 관한 부분을 적용해보고 활용해볼 수 있었고, 특히 NavBar에 관한 필요한 지식을 쌓을 수 있는 좋은 기회였다.
   특히, 반응형 웹을 위해 폭을 정의하고 수정하는데 많은 어려움과 시행착오가 있었고, 이를 해결하기 위해 width를 고정하는 것이 아닌 화면의 크기에 맞게 비율로 정의, max-width를 활용하여 더이상 커지지 않도록 해서 이러한 문제를 해결할 수 있었다. 또한 css의 @media 를 사용하여 화면의 폭에 맞는 이미지 출력을 다르게 적용할 수 있었다.
2. 반응형 웹을 알고는 있었지만 이렇게까지 구현해보는 것은 처음이었다. 이전 프로젝트에서는 라이브러리를 그대로 가져와 컴포넌트로 사용만 해봤지만, 이 기술과제를 통해 media query를 vanilla JS로 이해하고, react-responsive 라이브러리를 통해 활용해볼 수 있었다.
   react-responsive 라이브러리에 있는 useMediaQuery 훅을 이용하여 화면의 폭에 해당하는 boolean값을 바로 가져오고, 이것을 css가 아닌 컴포넌트에 바로 적용할 수 있었다.
3. Menu에서 MouseEvent를 적용한 후, 이를 다른 컴포넌트에 활용해볼 수 있는 기회였다. 다른 과제에서 각각의 Menu 버튼에 속한 박스로 그려내기 때문에 단순히 css로만 나타낼 수 있었겠지만, css를 통한 방법이 아닌 state를 통한 방법을 구현해본 것이 인상적이었다.

## github

[Wanted gnb](https://github.com/yh1120/wantedNavBar)

import React, { useState } from "react";
import styled from "styled-components";
import { Title, BarList, Menu, SideList } from "../Component";

const GlobalNavBar = ({ isMobile, isTablet, isDesktop }) => {
  const [searchHover, setSearchHover] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    console.log("login");
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <Header>
        <Container className="inner" login={login}>
          <Nav>
            {(!isMobile || !login) && (
              <Title isMobile={isMobile} handleLogin={handleLogin} />
            )}
            <BarList
              searchHover={searchHover}
              setSearchHover={setSearchHover}
              isMobile={isMobile}
              isTablet={isTablet}
            />
            <Menu searchHover={searchHover} setSearchHover={setSearchHover} />
            <SideList
              isMobile={isMobile}
              login={login}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          </Nav>
        </Container>
      </Header>
    </div>
  );
};

const Header = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: block;
  text-size-adjust: 100%;
  z-index: 100;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 90%;
  position: relative;
  max-width: 1060px;
  padding: 0;
  border: 0;
  display: block;

  @media (max-width: 767px) {
    height: ${(props) => (props.login ? "52px" : "102px")};
    width: 100%;
  }
`;

const Nav = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default GlobalNavBar;

import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  width: auto;
  @media (min-width: 768px) and (max-width: 974px) {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 767px) {
    text-align: left;
    margin: 0;
  }
`;

const List = styled.li`
  list-style: none;
  padding: 15px 0 15px 0;
  cursor: pointer;
  height: 50px;
  font-weight: 600;
  font-size: 14px;
  box-sizing: border-box;
  display: inline-block;
  &:hover {
    @media (min-width: 975px) {
      border-bottom-width: 2px;
      border-bottom-color: #e1e2e3;
      border-bottom-style: solid;
    }
  }

  @media (min-width: 768px) and (max-width: 974px) {
    height: 50px;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    cursor: pointer;
    height: inherit;
  }
`;

const ATag = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  padding: 15px 15px 15px 15px;
  height: 50px;
  color: #323232;

  @media (min-width: 768px) and (max-width: 974px) {
    padding-right: 0 !important;
    padding-left: 0 !important;
    position: relative;
    font-size: 13px;
    line-height: 20px;
  }
`;

const BarList = ({ searchHover, setSearchHover, isMobile, isTablet }) => {
  const showMenu = () => {
    setSearchHover(true);
  };
  const leaveMenu = () => {
    if (searchHover === true) {
      setSearchHover(false);
    }
  };

  return (
    <Ul isTablet={isTablet}>
      {isMobile && (
        <List>
          <ATag href="">홈</ATag>
        </List>
      )}
      <List isTablet={isTablet}>
        <ATag className="search" href="/" onMouseEnter={!isMobile && showMenu}>
          탐색
        </ATag>
      </List>
      <List isTablet={isTablet}>
        <ATag href="/" onMouseEnter={leaveMenu}>
          커리어 성장
        </ATag>
      </List>
      {!isMobile && (
        <List isTablet={isTablet}>
          <ATag href="/" onMouseEnter={leaveMenu}>
            직군별 연봉
          </ATag>
        </List>
      )}
      {!isMobile && (
        <List isTablet={isTablet}>
          <ATag href="/" onMouseEnter={leaveMenu}>
            이력서
          </ATag>
        </List>
      )}
      {!isMobile && (
        <List isTablet={isTablet}>
          <ATag href="/" onMouseEnter={leaveMenu}>
            매치업
          </ATag>
        </List>
      )}
      {!isMobile && (
        <List isTablet={isTablet}>
          <ATag href="/" onMouseEnter={leaveMenu}>
            프리랜서
          </ATag>
        </List>
      )}
    </Ul>
  );
};

export default BarList;

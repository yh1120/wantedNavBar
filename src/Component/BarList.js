import React from "react";
import styled from "styled-components";

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
    border-bottom-width: 2px;
    border-bottom-color: #e1e2e3;
    border-bottom-style: solid;
  }
`;

const ATag = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  padding: 15px 15px 15px 15px;
  height: 50px;
  color: #323232;
`;

const BarList = ({ setSearchHover }) => {
  const showMenu = () => {
    setSearchHover(true);
    console.log("onMouseEnter");
  };
  const leaveMenu = () => {
    setSearchHover(false);
    console.log("onMouseLeave");
  };

  return (
    <ul
      style={{
        display: "block",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
      }}
    >
      {/* <List>
        <aTag href="" style={{ display: "none" }}>
          홈
        </aTag>
      </List> */}
      <List>
        <ATag
          className="search"
          href=""
          onMouseEnter={showMenu}
          onMouseLeave={leaveMenu}
        >
          탐색
        </ATag>
      </List>
      <List>
        <ATag href="">커리어 성장</ATag>
      </List>
      <List>
        <ATag href="">직군별 연봉</ATag>
      </List>
      <List>
        <ATag href="">이력서</ATag>
      </List>
      <List>
        <ATag href="">매치업</ATag>
      </List>
      <List>
        <ATag href="">프리랜서</ATag>
      </List>
      <List>
        <ATag href="">Ai 합격 예측</ATag>
      </List>
    </ul>
  );
};

export default BarList;

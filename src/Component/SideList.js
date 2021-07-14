import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const List = styled.li`
  height: 100%;
`;

const SignupButton = styled.button`
  border: none;
  background-color: transparent;
`;

const EnterpriseButton = styled.button`
  border: 0.5px solid #e1e2e3;
  border-radius: 15px;
  background-color: transparent;
  font-weight: 400;
  font-size: 13px;
  width: 81px;
`;

const SideList = () => {
  return (
    <div style={{ width: "270px", padding: "10px 0 10px 0" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: "0",
        }}
      >
        <List className="search">
          <SearchIcon />
        </List>
        <List className="signup">
          <SignupButton>회원가입/로그인</SignupButton>
        </List>
        <List className="enterprise">
          <EnterpriseButton>기업 서비스</EnterpriseButton>
        </List>
        <List className="Menu" style={{ display: "none" }}>
          <MenuIcon />
        </List>
      </ul>
    </div>
  );
};

export default SideList;

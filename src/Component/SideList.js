import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Modal from "./Modal";

const Ul = styled.ul`
  list-style: "none";
  margin: 0;
  padding: 0;
  list-style-type: disc;
  /* margin-block-start: 1em; */
  /* margin-block-end: 1em; */
  /* margin-inline-start: 0px; */
  /* margin-inline-end: 0px; */
  /* padding-inline-start: 40px; */
`;

const List = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const EnterList = styled.li`
  height: 100%;
  vertical-align: middle;
  position: relative;
  display: inline-flex;
  &::before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

const SignupButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 10px;
  margin-right: 6px;
  height: 100;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
`;

const EnterpriseButton = styled.a`
  /* display: inline-flex;
  background-color: transparent;
  width: 81px; */
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
  cursor: pointer;
`;

const SideList = ({ isMobile, login, setLogin, handleLogin, handleLogout }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  return (
    <div style={{ height: "100%", padding: "10px 0 10px 0" }}>
      <Ul>
        <List className="search">
          <SearchIcon
            style={{ marginTop: "5px", padding: "0 10px", cursor: "pointer" }}
          />
        </List>
        {login && (
          <List>
            <NotificationsNoneIcon
              style={{
                marginTop: "5px",
                marginRight: "10px",
                padding: "0 10px",
                cursor: "pointer",
              }}
            />
          </List>
        )}
        {login && !isMobile && (
          <List style={{}}>
            <Avatar
              style={{
                cursor: "pointer",
                height: "32px",
                fontsize: "14px",
                width: "32px",
              }}
            />
          </List>
        )}
        {!isMobile && !login && (
          <List
            className="signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <SignupButton onClick={handleLogin}>회원가입/로그인</SignupButton>
          </List>
        )}
        {!isMobile && (
          <EnterList className="enterprise">
            <EnterpriseButton>기업 서비스</EnterpriseButton>
          </EnterList>
        )}
        {isMobile && (
          <List className="Menu">
            <MenuIcon
              style={{ cursor: "pointer", marginRight: "20px" }}
              onClick={handleClick}
            />
          </List>
        )}
      </Ul>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          login={login}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default SideList;

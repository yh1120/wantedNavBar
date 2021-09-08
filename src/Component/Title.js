import React from "react";
import styled from "styled-components";

const Title = ({ isMobile, handleLogin }) => {
  return (
    <Container>
      <a
        href="https://www.wanted.co.kr/newintro"
        style={{ textDecoration: "none" }}
      >
        <Logo>wanted</Logo>
      </a>
      {isMobile && (
        <button
          className="tablet"
          style={{
            color: "#36f",
            fontSize: "14px",
            height: "34px",
            border: "1px solid #36f",
            borderRadius: "17px",
            padding: "0 14px",
            background: "none",
            cursor: "pointer",
            fontWeight: "400",
          }}
          onClick={handleLogin}
        >
          회원가입하기
        </button>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: auto 0;

  @media (max-width: 767px) {
    width: 100%;
    padding: 15px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    height: 100%;
  }
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  border-color: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #333;
`;

export default Title;

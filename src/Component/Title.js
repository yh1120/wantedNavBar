import React from "react";
import styled from "styled-components";

const Logo = styled.button`
  font-size: 20px;
  font-weight: bold;
  border-color: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Title = () => {
  return (
    <div style={{ margin: "auto 0" }}>
      <a href="">
        <Logo>wanted</Logo>
      </a>
      <a href="">
        <button className="tablet" style={{ display: "none" }}>
          회원가입하기
        </button>
      </a>
    </div>
  );
};

export default Title;

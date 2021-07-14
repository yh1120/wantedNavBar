import React, { useState } from "react";
import Title from "./Title";
import BarList from "./BarList";
import Menu from "./Menu";
import SideList from "./SideList";
import styled from "styled-components";

const GlobalNavBar = () => {
  const [searchHover, setSearchHover] = useState(false);
  return (
    <header style={{ backgroundColor: "#aefbc1" }}>
      <div
        className="inner"
        style={{
          display: "flex",
          width: "1060px",
          height: "50px",
          backgroundColor: "#10f015",
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        <Title />
        <BarList setSearchHover={setSearchHover} />
        <SideList />
      </div>
      <Menu searchHover={searchHover} />
    </header>
  );
};

export default GlobalNavBar;

import React, { useState } from "react";

const Menu = ({ searchHover }) => {
  const [menuHover, setMenuHover] = useState(false);
  const showMenu = () => {
    setMenuHover(true);
  };
  const leaveMenu = () => {
    setMenuHover(false);
  };
  return (
    <div>
      {(searchHover || menuHover) && (
        <div
          style={{
            backgroundColor: "#345239",
            width: "1060px",
            height: "614px",
            margin: "0 auto",
          }}
          onMouseEnter={showMenu}
          onMouseLeave={leaveMenu}
        >
          Hello
        </div>
      )}
    </div>
  );
};

export default Menu;

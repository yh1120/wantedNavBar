import React from "react";
import { useMediaQuery } from "react-responsive";
import { GlobalNavBar } from "./Nav";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width:974px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 975px)",
  });
  return (
    <div>
      <GlobalNavBar
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
    </div>
  );
};

export default App;

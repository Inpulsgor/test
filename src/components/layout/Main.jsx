import React from "react";
import { useLocation } from "react-router-dom";

const Main = ({ children, ...props }) => {
	const location = useLocation();

  return (
    <main className="main" {...props}>
      <div className={location.pathname === "/" ? "container" : "wrapper"}>
	  	{children}
	  </div>
    </main>
  );
};

export default Main;
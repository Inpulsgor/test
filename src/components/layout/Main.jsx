import React from "react";

const Main = ({ children, ...props }) => {
  return (
    <main className="main" {...props}>
      <div className="container">
	  	{children}
	  </div>
    </main>
  );
};

export default Main;
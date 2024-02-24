import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" }} className="h-auto">
      <Outlet />
    </div>
  );
};

export default App;
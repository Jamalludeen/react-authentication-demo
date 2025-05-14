import React, { useState, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-store";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;

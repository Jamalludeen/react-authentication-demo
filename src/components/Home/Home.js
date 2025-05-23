import React, { useContext } from "react";
import AuthContext from "../../store/auth-store";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type="button" onClick={ctx.onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;

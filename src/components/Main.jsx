import Form from "./Form";
import List from "./List";
import "../index.css";
import { useState } from "react";

const Main = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = (UserInfoObj) => {
    setUserInfo([...userInfo, UserInfoObj]);
  };

  return (
    <section className="main">
      <Form getUserInfo={getUserInfo} />
      <List userInfo={userInfo} />
    </section>
  );
};

export default Main;

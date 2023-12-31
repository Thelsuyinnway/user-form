import { useState } from "react";
import Card from "./Card";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setlive] = useState("");
  const [email, setEmail] = useState("");
  const addUser = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please fill a value for all data");
      return;
    }
    const userInfo = {
      name,
      live,
      email,
    };
    props.getUserInfo(userInfo);
    setName("");
    setlive("");
    setEmail("");
  };

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            value={live}
            onChange={(e) => {
              setlive(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default Form;

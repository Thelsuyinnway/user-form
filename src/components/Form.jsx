import { useRef } from "react";
import Card from "./Card";

const Form = (props) => {
  // const [name, setName] = useState("");
  // const [live, setlive] = useState("");
  // const [email, setEmail] = useState("");

  const nameInputref = useRef();
  const liveInputref = useRef();
  const emailInputref = useRef();

  // let name = nameInputref.current.value;
  // let live = liveInputref.current.value;
  // let email = emailInputref.current.value;

  const addUser = (e) => {
    e.preventDefault();

    if (
      nameInputref.current.value.trim().length === 0 ||
      liveInputref.current.value.trim().length === 0 ||
      emailInputref.current.value.trim().length === 0
    ) {
      window.confirm("Please fill a value for all data");
      return;
    }
    const userInfo = {
      name: nameInputref.current.value,
      live: liveInputref.current.value,
      email: emailInputref.current.value,
    };
    props.getUserInfo(userInfo);
    // setName("");
    // setlive("");
    // setEmail("");
    nameInputref.current.value = "";
    liveInputref.current.value = "";
    emailInputref.current.value = "";

    // console.log(nameInputref.current.value);
    // console.log(liveInputref.current.value);
    // console.log(emailInputref.current.value);
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
            // value={name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            ref={nameInputref}
          />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            // value={live}
            // onChange={(e) => {
            //   setlive(e.target.value);
            // }}
            ref={liveInputref}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            ref={emailInputref}
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

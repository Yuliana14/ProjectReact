import React from "react";
import {Button, Form, Icon, Message, Segment} from "semantic-ui-react";
import Link from "next/link";
import catchErrors from "../utils/catchErrors";

//initial state user
const INITAL_USER ={
  name:"",
  email:"",
  password:""
}

function Signup() {
  //states
  const[user,setUser] = React.useState(INITAL_USER);
  //state button save user
  const [disabled,setDisabled] = React.useState(true);
  //state loading
  const [loading,setLoading] = React.useState(false);
  //state error form save
  const [error,setError] = React.useState("");

  //enabled or disabled save button user
  React.useEffect(()=>{
    const isUser =  Object.values(user).every(el=>Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true);
  },[user]);

  //onchange input fields
  function handleChange(event) {
    const {name, value}  = event.target;
    setUser(prevState =>({ ...prevState,[name]:value}));
  }

  //post data on click button save
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError("")
      console.log(user);
      
      //make request to signup user
    } catch (error) {
      catchErrors(error,setError)
    }finally{
      setLoading(false);
    }
  }

  return <>
    <Message
      attached
      icon="settings"
      header="Get Started!"
      content="Create a new account"
      color="teal"
    />
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message
        error
        header="Oops!"
        content={error}
      />
      <Segment>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          label="Name"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange = {handleChange}
        />
        <Form.Input
          fluid
          icon="envelope"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          onChange = {handleChange}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
          onChange = {handleChange}
        />
        <Button
          disabled = {disabled || loading}
          icon="signup"
          type="submit"
          color="orange"
          content="Signup"
        />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
      Existing User?{" "}
      <Link href="/login">
        <a>Log in here</a>
      </Link>{" "}instead.
    </Message>
  </>;
}

export default Signup;

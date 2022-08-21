import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";

const auth = getAuth()

function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handelFormSubmit = (e) => {
    sendSignInLinkToEmail(auth,email,password)
    .then((res) => {
      const user = res.user
      console.log(user)
    })
    .catch((err) => {
      console.error(err)
    })
    e.preventDefault()
  };
  return (
    <div className="App">
      <div className="w-25 mx-auto">
        <h3 className="text-primary py-3 ">Register Form</h3>
        <Form onSubmit={handelFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email address </Form.Label>{" "}
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We 'll never share your email with anyone else.{" "}
            </Form.Text>{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>{" "}
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>{" "}
        </Form>{" "}
      </div>{" "}
    </div>
  );
}

export default App;

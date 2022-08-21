import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
  const handleEmailBlur = e =>{
    console.log(e.target.value)
  }
  const handlePasswordBlur = e =>{
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <div className="w-25 mx-auto">
      <h3 className="text-primary py-3 ">Register Form</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email address </Form.Label>{" "}
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We 'll never share your email with anyone else.{" "}
            </Form.Text>{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
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

import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changerUser } from "../redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changerUser(name));
  };

  return (
    <div>
      <Form>
        <h1 className="mt-5">Login</h1>
        <Row className="align-items-center">
          <Col sm={6} className="my-1">
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col sm={6}>
            <Button onClick={handleLogin}>Login</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;

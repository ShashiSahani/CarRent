import React from "react";
import { Col, Form, Row, Input, Button } from "antd";
import { img } from "../components/Spinner";
import { Link } from "react-router-dom"; 
import  {useDispatch}from 'react-redux'
import { userLogin } from "../redux/action/userAction";

function Login() {
  const dispatch=useDispatch()
  const onFinish = (values) => {
    console.log(values);
  dispatch(userLogin(values))

  };

  return (
    <div className="login">
      <Row gutter={16}>
        <Col lg={16} style={{ position: "relative" }}>
          <img src={img} alt="wallpaperImg" />
          <h1 className="login-logo">Waggy Wheels</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input type="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btn1 mt-2">
              LOGIN
            </Button>
            <hr />
            <Link to='/register'>Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

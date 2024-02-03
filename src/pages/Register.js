import React from "react";
import { Col, Form, Row, Input, Button } from "antd";
import { img } from "../components/Spinner";

import { Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/action/userAction";

function Register() {
  const dispatch=useDispatch()
  const onFinish = (values) => {
    dispatch(userRegister(values))
    console.log(values);
    
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
            <h1>REGISTER</h1>
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
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btn1 mt-2">
              REGISTER
            </Button>
            <hr />
            <Link to="/login">Click Here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;

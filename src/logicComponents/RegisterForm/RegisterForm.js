import React from 'react';
import { withRouter } from "react-router";
import { Form, Input, Icon, Button } from 'antd'
import "./RegisterForm.css";

const RegisterForm = ({ form: {getFieldDecorator, validateFields }, firebase, history })  => {
  const handleSubmit = (e) => {
    e.preventDefault()
    validateFields((err, value) => {
      if (!err) {
        console.log("reveived values", value)    
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit} className="RegisterForm-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="RegisterForm-form-button">
          Inscription
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Form.create({ name: 'RegisterForm-form' })(RegisterForm));
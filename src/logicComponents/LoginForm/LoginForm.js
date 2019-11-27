import React from 'react';
import { withRouter } from 'react-router'
import { Form, Input, Icon, Button } from 'antd'

import "./LoginForm.css";

const LoginForm = ({ form: {getFieldDecorator, validateFields }, history, firebase })  => {
  const handleSubmit = (e) => {
    e.preventDefault()
    validateFields((err, value) => {
      if (!err) {
        console.log("reveived values", value)
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit} className="login-form">
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
          rules: [{ required: true, message: 'Please input your password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Form.create({ name: 'login-form' })(LoginForm));
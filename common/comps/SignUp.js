import React, { useState, useEffect} from 'react';
import { Form, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { auth } from '../../store/actions';
import withErrorHandler from '../hoc/withErrorHandler';
import { ButtonOutline } from '../styled/Button';


function SignUpForm({ form, auth }) {
  const [confirmDirty, setConfirmDirty] = useState(false);

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    const scrollToTop = () => scroll.scrollTo(1, {smooth: true, duration: 1500,});
    scrollToTop();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const { name, email, password, confirm } = values;
        const authDetails = {
          name,
          email,
          password,
          passwordConfirm: confirm,
          isSignup: true
        };
        auth(authDetails);
      }
    });
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form"
          style={{ width: '80%', maxWidth: '40rem', margin: '0 auto', padding: '10rem 2rem 10rem 2rem' }}>
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [
            { required: true, message: 'Please input your name!' },
            { min: 3, message: 'Name must be more than 2 characters'},
            { max: 55, message: 'Name must be less than 55 characters'}
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="name"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please input valid E-mail!' }
            ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your Password!' },
            { min: 6, message: 'Password must be more than 6 characters'},
            { max: 10, message: 'Password must be less than 10 characters'}
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            { required: true, message: 'Please confirm your password!' },
            { validator: compareToFirstPassword }
          ]
        })(<Input.Password onBlur={handleConfirmBlur}/>)}
      </Form.Item>
      <Form.Item>
        <ButtonOutline type="primary" htmlType="submit" className="login-form-button" style={{ lineHeight: '3rem' }}>
          Sign up
        </ButtonOutline>
      </Form.Item>
    </Form>
  );
}

const SignUp = Form.create({ name: 'normal_login' })(SignUpForm);

export default connect(null, { auth })(withErrorHandler(SignUp));
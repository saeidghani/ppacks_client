import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';

import { auth } from '../../store/actions';
import withErrorHandler from '../hoc/withErrorHandler';
import {ButtonOutline} from '../styled/Button';


class SignUpForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {name, email, password, confirm} = values;
        const authDetails = {
          name,
          email,
          password,
          passwordConfirm: confirm,
          isSignup: true
        };
        this.props.auth(authDetails);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form"
            style={{width: '80%', maxWidth: '40rem' ,margin: '0 auto', padding: '10rem 2rem 10rem 2rem'}}      >
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item>
          <ButtonOutline type="primary" htmlType="submit" className="login-form-button" style={{lineHeight: '3rem'}}>
            Sign up
          </ButtonOutline>
        </Form.Item>
      </Form>
    );
  }
}

const SignUp = Form.create({ name: 'normal_login' })(SignUpForm);

export default connect(null, {auth})(withErrorHandler(SignUp));
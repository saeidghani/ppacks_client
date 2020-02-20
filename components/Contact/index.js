import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';
import styled from 'styled-components';
import { StyledModal } from '../../common/styled/StyledModal';
import React from 'react';
import Router from 'next/router';

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 10rem 5rem 0;
`;

const FormItems = styled.div`
  width: 80%;
`;

class ContactForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    showModal: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        this.setState(state => ({showModal: !state.showModal}));
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleOkModal = () => {
     this.setState(state => ({showModal: !state.showModal}));
     Router.push('/');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const {showModal} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <ContactFormContainer>
        <StyledModal
          closable={false}
          visible={showModal}
          onOk={this.handleOkModal}
        >
          Your message was successfully submitted!
        </StyledModal>
        <FormItems>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label={
              <span>
              First name
            </span>
            }
          >
            {getFieldDecorator('firstname', {
              rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }]
            })(<Input/>)}
          </Form.Item>
          <Form.Item
            label={
              <span>
              Last name
            </span>
            }
          >
            {getFieldDecorator('lastname', {
              rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }]
            })(<Input/>)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]
            })(<Input/>)}
          </Form.Item>
          <Form.Item
            label={
              <span>
              Comment
            </span>
            }
          >
            {getFieldDecorator('Comment', {
              rules: [{ required: true, message: 'Please input your Comment!', whitespace: true }]
            })(<TextArea/>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </FormItems>
      </ContactFormContainer>
    );
  }
}

export const Contact = Form.create({ name: 'register' })(ContactForm);

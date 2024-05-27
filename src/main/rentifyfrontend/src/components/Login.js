

import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const { Option } = Select;

const Login = () => {
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-around">
      <Navbar/>
      
      <div className="w-[25%] h-auto shadow-2xl shadow-gray-600 rounded-[15px] flex flex-col items-center justify-around mt-10 p-5">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
        <div>
          {isLoginForm ? "Don't have an account? " : "Already have an account? "}
          <a href="#" onClick={toggleForm}>
            {isLoginForm ? "Register now!" : "Log in"}
          </a>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onFinish = async (event) => {
    axios.post('/Login', { username: username, password: password }) // Send Post request to backend
      .then((response) => {
        console.log(response.data);
        if (response.data === "OK") navigate('/HomePage');
        else navigate("/Login");
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      method='post'
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>navigate("/Homepage")}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};


// const { Option } = Select;

const SignupForm = () => {
  const navigate=useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    userType: '', // default to buyer
  });

  const onFinish = () => {
    axios.post('/Signup', signupData)
      .then(response => {
        if(response.data=="OK")
          console.log(signupData);
        console.log('Signup successful', response);
        navigate("/Login");
        // Handle success (e.g., show a success message or redirect)
      })
      .catch(error => {
        console.error('There was an error signing up!', error);
        console.log(signupData);
        // Handle error (e.g., show an error message)
      });
  };

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setSignupData({
      ...signupData,
      userType: value
    });
  };

  // Custom validator to check if the value contains only letters
  const validateName = (_, value) => {
    const nameRegex = /^[A-Za-z]+$/;
    if (!value || nameRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Name can only contain letters'));
  };

  return (
    <Form
      name="normal_signup"
      className="signup-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      method='post'
    >
      <Form.Item
        name="firstName"
        rules={[
          { required: true, message: 'Please input your First Name!' },
          { validator: validateName }
        ]}
      >
        <Input
          placeholder="First Name"
          name="firstName"
          value={signupData.firstName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          { required: true, message: 'Please input your Last Name!' },
          { validator: validateName }
        ]}
      >
        <Input
          placeholder="Last Name"
          name="lastName"
          value={signupData.lastName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Please input your Username!' },
          { validator: validateName }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          name="username"
          value={signupData.username}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'The input is not valid E-mail!' },
        ]}
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
      >
        <Input
          placeholder="Phone Number"
          name="phoneNumber"
          value={signupData.phoneNumber}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="userType"
        rules={[{ required: true, message: 'Please select User Type!' }]}
      >
        <Select
          defaultValue="buyer"
          onChange={handleSelectChange}
        >
          <Option value="buyer">Buyer</Option>
          <Option value="seller">Seller</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};



export default Login;


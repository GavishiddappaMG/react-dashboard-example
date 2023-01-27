import React from "react";
import { Form, json, redirect, useNavigation } from "react-router-dom";
import Input from "../../Input/Input";
import './Login.scss';
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <Form method={"post"} className="login">
        <Input
          label="Username"
          input={{ 
            id: 'username',
            name: 'username',
            type: "text",
            className:"login-input",
            defaultValue: ''
          }}
        />
        <Input
          label="Password"
          input={{ 
            id: 'password',
            name: 'password',
            type: "password",
            className:"login-input",
            defaultValue: ''
          }}
        />
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  );
};

export default Login;

export async function action({ request, param }) {
  const data = await request.formData();
  const loginPayload = {
    username: data.get("username"),
    password: data.get("password"),
  };
  const response = await fetch('http://localhost:8080/auth/login', {
    method: request.method,
    headers: {
      "Content-Type": "applicaiton/json",
    },
    body: JSON.stringify(loginPayload),
  });
  console.log(request, response);

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "Username or Password is incorrect!" },
      { status: 400 }
    );
  }
  return redirect("/");
}

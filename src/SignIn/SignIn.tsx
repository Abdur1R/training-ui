import React, { useContext, useEffect, useState } from "react";
import { Button, Form, message } from "antd";
import { ajaxCall } from "../axios/AjaxCall";
import { FormItem } from "../CommonFiles/CommonComponents";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const SignIn = () => {
  const [state, updateState] = useState({});
  const [userDetails, updateUserDetails] = useContext<any>(UserContext);
  const navigate = useNavigate();

  const fetchUserDetails = ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => {
    ajaxCall({
      url: `api/session/login?userId=${userName}&password=${password}`,
      method: "POST",
    }).then((response: any) => {
      console.log("response from login", response);
      if (response && response.data) {
        if (response.data.includes("Invalid")) {
          message.error({ content: "Invalid Credentials", duration: 3 });
        } else {
          updateUserDetails((prev: any) => ({
            ...prev,
            userEmail: userName,
            active: true,
          }));
          localStorage.setItem("userEmail", userName);
          localStorage.setItem("active", "true");
          message.success({ content: "Logged In Successfully", duration: 3 });
          navigate("/");
        }
      }
    });
  };

  return (
    <Form className="signIn" onFinish={fetchUserDetails}>
      <FormItem label={"User Name"} formName="userName" />
      <FormItem label={"Password"} type="password" formName="password" />
      <Form.Item style={{ marginTop: "70px" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item style={{ marginTop: "30px" }}>
        <Button
          onClick={() => {
            navigate("/");
            updateUserDetails((prev: any) => ({ ...prev, guest: true }));
          }}
        >
          Guest User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;

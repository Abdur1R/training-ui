import React, { useEffect, useState } from "react";
import { Button, Form, message } from "antd";
import { ajaxCall } from "../axios/AjaxCall";
import { FormItem } from "../CommonFiles/CommonComponents";
import "./SignIn.scss";

const SignIn = () => {
    const [state, updateState] = useState({});
    const fetchUserDetails = ({ userName, password }: { userName: string, password: string }) => {
        // fetch("http://localhost:8000/userDetails/getData/admin-abdur")
        //     .then((response1) => response1.json())
        //     .then((response2) => {
        //         console.log("response2", response2);
        //     })
        ajaxCall({ url: `userDetails/getData/${userName}` })
            .then((response) => {
                console.log("response", response);
                if (response && response.status === 200 && Object.keys(response.data)?.length > 0) {
                    if (response.data.password === password) {
                        updateState((prev) => ({ ...prev, userDetails: response.data ?? {} }));
                        message.success({ content: "Logged In Successfully", duration: 3 });
                    } else {
                        message.error({ content: "Invalid Credentials", duration: 3 });
                    }
                } else {
                    message.error({ content: "Failed to fetch Details", duration: 3 });
                }
            });
    };

    // useEffect(() => {
    //     fetchUserDetails();
    // }, []);

    return (
        <Form className="signIn" onFinish={fetchUserDetails}>
            <FormItem label={"User Name"} formName="userName" />
            <FormItem label={"Password"} formName="password" />
            <Form.Item style={{ marginTop: "70px" }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default SignIn;
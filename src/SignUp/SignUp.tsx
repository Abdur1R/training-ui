import { useForm } from "antd/es/form/Form";
import React from "react";
import { Button, Form, Input } from "antd";
import "./SignUp.scss";
import { FormItem } from "../CommonFiles/CommonComponents";
// import BackgroundImg from "../GIFs/background-img.gif";

const SignUp = () => {
    const [form] = useForm();

    const onSubmit = (values: any) => {
        console.log("values", values);
        console.log("FieldValues", form.getFieldsValue());
        sessionStorage.setItem("userData", JSON.stringify(values));
    };

    return (
        <div className="sign-up">
            <Form className="formStyles" form={form} onFinish={onSubmit}>
                <FormItem label="Email" margin="20px 0px 0px 0px" />
                <FormItem label="User Name" margin="40px 0px 0px 0px" />
                <FormItem label="Password" margin="40px 0px 0px 0px" />
                <Form.Item style={{ marginTop: "70px" }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default SignUp;
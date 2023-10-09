import { useForm } from "antd/es/form/Form";
import React from "react";
import { Form, Input } from "antd";
import "./SignUp.scss";
// import BackgroundImg from "../GIFs/background-img.gif";

const FormItem = ({ label, margin, padding }: { label: string, margin?: string, padding?: string }) => (
    <Form.Item style={{ margin: margin, padding: padding }} label={label}>
        <Input />
    </Form.Item >
);

const SignUp = () => {
    const [form] = useForm();

    return (
        <div className="sign-up">
            <Form style={{ padding: "300px 300px 400px 300px" }} form={form}>
                <FormItem label="Email" margin="0px 0px 20px 0px" />
                <FormItem label="User Name" />
                <FormItem label="Password" />
            </Form>
        </div>
    )
};

export default SignUp;
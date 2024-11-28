import { Form, Input } from "antd";

export const FormItem = ({ label, margin, padding, formName, type }: { label: string, margin?: string, padding?: string, formName?: string, type?: string }) => (
    <Form.Item style={{ margin: margin, padding: padding }} label={label} name={formName ?? label}>
        <Input type={type} />
    </Form.Item >
);
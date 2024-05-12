import { Form, Input } from "antd";

export const FormItem = ({ label, margin, padding, formName }: { label: string, margin?: string, padding?: string, formName?: string }) => (
    <Form.Item style={{ margin: margin, padding: padding }} label={label} name={formName ?? label}>
        <Input />
    </Form.Item >
);
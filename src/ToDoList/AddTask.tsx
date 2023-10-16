import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useForm } from 'antd/es/form/Form';

const AddTask = (props: any) => {
    const [form] = useForm();
    const [state, setState] = useState({
        task: ''
    });

    const handleInputChange = (e: any) => {
        setState({ task: e.target.value });
    };

    const handleSubmit = (e: any) => {
        props.onAddTask(e.task);
        setState({ task: '' });
        form.setFieldValue('task', '');
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="task">
                <Input
                    className='widthAddInput'
                    placeholder="Add Task"
                    value={state.task}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit'>Add</Button>
            </Form.Item>
        </Form>
    );
};

export default AddTask;
import React, { useImperativeHandle } from 'react'
import { Form, Input, Button } from 'antd'

const UserLogin: React.FC<{ childRef: any }> = ({ childRef }) => {
  useImperativeHandle(childRef, () => ({
    onOk
  }))

  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onOk = () => {
    form.submit()
  }

  return (
    <>
      <Form form={form} name="Login" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form >
      <Button onClick={onOk}>OK</Button>
    </>
  )
}

export default UserLogin

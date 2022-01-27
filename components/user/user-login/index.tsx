import React from 'react'
import { Modal, Form, Input, Button } from 'antd'

type eventType = (e: React.MouseEvent<HTMLElement, MouseEvent>) => void

const UserLogin: React.FC<{ visible: boolean, closeModal: eventType, changeModal: eventType }> = ({ visible, closeModal, changeModal }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const handleLogin = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ a: 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <Modal title="Login" visible={visible} onOk={changeModal} onCancel={closeModal} okType="link" okText='Regist'>
      <Form form={form} name="Login" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item label="Email" name={['login', 'email']} rules={[{ type: 'email', required: true, message: 'Please input your email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name={['login', 'password']} rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-center space-x-4">
            <Button type="primary" htmlType="submit"> Login </Button>
            <Button htmlType="button" onClick={onReset}> Reset </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserLogin

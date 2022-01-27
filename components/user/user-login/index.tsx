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

  return (
    <Modal title="Regist" visible={visible} onOk={changeModal} onCancel={closeModal}>
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
    </Modal>
  )
}

export default UserLogin

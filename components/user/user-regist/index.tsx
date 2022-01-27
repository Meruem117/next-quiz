import React from 'react'
import { Modal, Form, Input, Button, Select } from 'antd'

const UserRegist: React.FC<{ visible: boolean, closeModal: VoidFunction, changeModal: VoidFunction }> = ({ visible, closeModal, changeModal }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <Modal title="Regist" visible={visible} onOk={changeModal} onCancel={closeModal} okType="link" okText='Login'>
      <Form form={form} name="Regist" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item label="Email" name={['regist', 'email']} rules={[{ type: 'email', required: true, message: 'Please input your email' }]}>
          <Input placeholder='Please input your email' />
        </Form.Item>
        <Form.Item label="Username" name={['regist', 'username']} rules={[{ required: true, message: 'Please input your username' }]}>
          <Input placeholder='Please input your username' />
        </Form.Item>
        <Form.Item label="Password" name={['regist', 'password']} rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password placeholder='Please input your password' />
        </Form.Item>
        <Form.Item label="Gender" name={['regist', 'gender']} rules={[{ required: true, message: 'Please select your gender' }]}>
          <Select placeholder='Please select your gender'>
            <Select.Option value={1}>Male</Select.Option>
            <Select.Option value={0}>Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location" name={['regist', 'location']}>
          <Input />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-center space-x-4">
            <Button type="primary" htmlType="submit">Regist</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserRegist

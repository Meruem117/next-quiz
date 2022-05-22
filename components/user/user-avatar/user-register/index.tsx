import React from 'react'
import { Modal, Form, Input, Select, Button, message } from 'antd'
import { useAppDispatch } from '@/app/hooks'
import { login } from '@/features/login/loginSlice'
import { set } from '@/features/user/userSlice'
import type { userRegisterItem } from '@/models/user'
import { handleRegister } from '@/services/user'

const UserRegister: React.FC<{ visible: boolean, closeModal: VoidFunction, changeModal: VoidFunction }> = ({ visible, closeModal, changeModal }) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const onFinish = async (values: { register: userRegisterItem }) => {
    const res = await handleRegister(values.register)
    if (res.data) {
      message.info('Register successfully')
      dispatch(set({ ...values.register, id: res.data }))
      dispatch(login())
      closeModal()
      onReset()
    } else {
      message.warn(res.message)
    }
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <Modal title="Regist" visible={visible} onOk={changeModal} onCancel={closeModal} okType="link" okText='Login'>
      <Form form={form} name="Regist" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item label="Email" name={['register', 'email']} rules={[{ type: 'email', required: true, message: 'Please input your email' }]}>
          <Input placeholder='Please input your email' />
        </Form.Item>
        <Form.Item label="Username" name={['register', 'name']} rules={[{ required: true, message: 'Please input your username' }]}>
          <Input placeholder='Please input your username' />
        </Form.Item>
        <Form.Item label="Password" name={['register', 'password']} rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password placeholder='Please input your password' />
        </Form.Item>
        <Form.Item label="Gender" name={['register', 'gender']} rules={[{ required: true, message: 'Please select your gender' }]}>
          <Select placeholder='Please select your gender'>
            <Select.Option value={1}>Male</Select.Option>
            <Select.Option value={0}>Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location" name={['register', 'location']}>
          <Input placeholder='Please input your location' />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-center space-x-4">
            <Button type="primary" htmlType="submit">Register</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserRegister

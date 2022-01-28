import React from 'react'
import { Modal, Form, Input, Button, message } from 'antd'
import { useAppDispatch } from '@/app/hooks'
import { login } from '@/features/login/loginSlice'
import { set } from '@/features/user/userSlice'
import type { userLoginItem } from '@/models/user'
import { handleLogin } from '@/services/user'

const UserLogin: React.FC<{ visible: boolean, closeModal: VoidFunction, changeModal: VoidFunction }> = ({ visible, closeModal, changeModal }) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const onFinish = async (values: { login: userLoginItem }) => {
    const res = await handleLogin(values.login)
    if (res.check === true) {
      dispatch(set(res.userInfo))
      dispatch(login())
      onReset()
      closeModal()
      message.success('Login successfully')
    } else {
      message.error('Wrong email or password')
    }
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <Modal title="Login" visible={visible} onOk={changeModal} onCancel={closeModal} okType="link" okText='Regist'>
      <Form form={form} name="Login" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item label="Email" name={['login', 'email']} rules={[{ type: 'email', required: true, message: 'Please input your email' }]}>
          <Input placeholder='Please input your email' />
        </Form.Item>
        <Form.Item label="Password" name={['login', 'password']} rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password placeholder='Please input your password' />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-center space-x-4">
            <Button type="primary" htmlType="submit">Login</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserLogin

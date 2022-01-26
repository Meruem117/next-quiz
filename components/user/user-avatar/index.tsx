import React, { useState, useRef } from 'react'
import { Avatar, Popover, Button, Modal, Form, Input } from 'antd'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { login, logout, selectLogin } from '@/features/login/loginSlice'
import type { userLoginItem } from '@/models/user'
import { GENDER_AVATAR_SRC } from '@/constant'
import UserLogin from '../user-login'

const UserAvatar: React.FC = () => {
  const dispatch = useAppDispatch()
  const loginState = useAppSelector(selectLogin)
  const [visible, setVisible] = useState(false)
  const childRef: React.MutableRefObject<any> = useRef()

  const showModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  const handleOk = () => {
    childRef.current.onOk()
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
    <div className="flex w-full justify-end py-1">
      {
        loginState.isLogin ?
          <Popover placement="bottomRight" content={<span>Not Login Yet</span>}>
            <Avatar size="large" src={GENDER_AVATAR_SRC[1]} />
          </Popover>
          : <Button type="primary" size="large" onClick={showModal}>Login</Button>
      }
      <Modal title="Login" visible={visible} onOk={handleOk} onCancel={closeModal}>
        <UserLogin childRef={childRef} />
      </Modal>
    </div>
  )
}

export default UserAvatar

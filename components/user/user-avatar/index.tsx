import React, { useState } from 'react'
import { Avatar, Popover, Button } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectLogin } from '@/features/login/loginSlice'
import { GENDER_AVATAR_SRC } from '@/constant'
import UserLogin from '../user-login'
import UserRegist from '../user-regist'

const UserAvatar: React.FC = () => {
  const loginState = useAppSelector(selectLogin)
  const [visible, setVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(true)

  const showModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const showLogin = () => setLoginVisible(true)
  const showRegist = () => setLoginVisible(false)

  return (
    <div className="flex w-full justify-end py-1">
      {
        loginState.isLogin ?
          <Popover placement="bottomRight" content={<span>Not Login Yet</span>}>
            <Avatar size="large" src={GENDER_AVATAR_SRC[1]} />
          </Popover>
          : <Button type="primary" size="large" onClick={showModal}>Login</Button>
      }
      <UserLogin visible={visible && loginVisible} closeModal={closeModal} changeModal={showRegist} />
      <UserRegist visible={visible && !loginVisible} closeModal={closeModal} changeModal={showLogin} />
    </div>
  )
}

export default UserAvatar

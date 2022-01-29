import React, { useState } from 'react'
import { Popover, Avatar, Button, message } from 'antd'
import { UserOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { selectLogin, logout } from '@/features/login/loginSlice'
import { selectUser, clear } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import { GENDER_AVATAR_SRC } from '@/constant'
import UserLogin from '../user-login'
import UserRegist from '../user-regist'

const UserAvatar: React.FC = () => {
  const dispatch = useAppDispatch()
  const loginState = useAppSelector(selectLogin)
  const userState = useAppSelector(selectUser)
  const [visible, setVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(true)

  const showModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const showLogin = () => setLoginVisible(true)
  const showRegist = () => setLoginVisible(false)
  const handleLogout = () => {
    dispatch(logout())
    dispatch(clear())
    message.info('logout successfully')
  }

  const content = (
    <div className="flex flex-col space-y-2 w-24 overflow-clip">
      <IconText icon={UserOutlined} text={userState.name} title={userState.name} />
      {userState.location ? <IconText icon={EnvironmentOutlined} text={userState.location} title={userState.location} /> : undefined}
      <Button size="small" href={`/user/${userState.id}`}>Mine</Button>
      <Button size="small" onClick={handleLogout}>Logout</Button>
    </div>
  )

  return (
    <div className="flex w-full justify-end py-1">
      {
        loginState.isLogin ?
          <Popover placement="bottomRight" content={content}>
            <Avatar size="large" src={GENDER_AVATAR_SRC[userState.gender]} />
          </Popover>
          : <Button type="primary" size="large" onClick={showModal}>Login</Button>
      }
      <UserLogin visible={visible && loginVisible} closeModal={closeModal} changeModal={showRegist} />
      <UserRegist visible={visible && !loginVisible} closeModal={closeModal} changeModal={showLogin} />
    </div>
  )
}

export default UserAvatar

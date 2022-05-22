import React, { ReactElement, useState } from 'react'
import { Popover, Avatar, Button, Popconfirm, message } from 'antd'
import { UserOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { selectLogin, logout } from '@/features/login/loginSlice'
import { selectUser, clear } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import UserLogin from './user-login'
import UserRegister from './user-register'
import { GENDER_AVATAR_SRC } from '@/constant'

const UserAvatar: React.FC = () => {
  const dispatch = useAppDispatch()
  const loginState = useAppSelector(selectLogin)
  const userState = useAppSelector(selectUser)
  const [visible, setVisible] = useState<boolean>(false)
  const [popconfirm, setPopconfirm] = useState<boolean>(false)
  const [loginVisible, setLoginVisible] = useState<boolean>(true)

  const showModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const showLogin = () => setLoginVisible(true)
  const showRegist = () => setLoginVisible(false)
  const handleLogout = () => {
    dispatch(logout())
    dispatch(clear())
    message.info('Logout successfully')
  }

  const content: ReactElement = (
    <div className="flex flex-col space-y-2 w-24 overflow-clip">
      <IconText icon={UserOutlined} text={userState.name} title={userState.name} />
      {userState.location ? <IconText icon={EnvironmentOutlined} text={userState.location} title={userState.location} /> : undefined}
      <Button size="small" href={`/user/${userState.id}`}>Mine</Button>
      <Popconfirm
        title='Are you sure to apply?'
        visible={popconfirm}
        onConfirm={handleLogout}
        onCancel={() => setPopconfirm(false)}
      >
        <Button size="small" onClick={() => setPopconfirm(true)}>Logout</Button>
      </Popconfirm>
    </div>
  )

  return (
    <div className="flex w-full justify-end py-1">
      {
        loginState.isLogin ?
          <Popover placement="bottomRight" content={content}>
            <Avatar size="large" src={GENDER_AVATAR_SRC[userState.gender || 2]} />
          </Popover>
          : <Button type="primary" size="large" onClick={showModal}>Login</Button>
      }
      <UserLogin visible={visible && loginVisible} closeModal={closeModal} changeModal={showRegist} />
      <UserRegister visible={visible && !loginVisible} closeModal={closeModal} changeModal={showLogin} />
    </div>
  )
}

export default UserAvatar

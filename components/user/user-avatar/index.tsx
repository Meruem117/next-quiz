import React from 'react'
import { Avatar, Popover } from 'antd'
import type { userItem } from '@/models/user'
import { GENDER_AVATAR_SRC } from '@/constant'

const User: React.FC<{ data: userItem }> = ({ data }) => {
  return (
    <Popover placement="bottomRight" content={<span>Not Login Yet</span>}>
      <Avatar size="large" src={GENDER_AVATAR_SRC[1]} />
    </Popover>
  )
}

export default User

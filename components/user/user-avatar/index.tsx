import React from 'react'
import { Avatar, Popover } from 'antd'
import type { userItem } from '@/models/user'
import { GENDER_AVATAR_SRC } from '@/constant'

const UserAvatar: React.FC<{ data: userItem }> = ({ data }) => {
  return (
    <Popover placement="bottomRight" content={<span>Not Login Yet</span>}>
      <Avatar size="large" src={GENDER_AVATAR_SRC[data.gender]} />
    </Popover>
  )
}

export default UserAvatar

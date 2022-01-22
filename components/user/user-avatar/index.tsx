import React from 'react'
import { Avatar } from 'antd'
import type { userItem } from '@/models/user'
import { GENDER_AVATAR_SRC } from '@/constant'

// const UserAvatar: React.FC<{ data: userItem }> = ({ data }) => {
const UserAvatar: React.FC = () => {
  return <Avatar size="large" src={GENDER_AVATAR_SRC[1]} />
}

export default UserAvatar

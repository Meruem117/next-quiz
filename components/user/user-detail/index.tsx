import React from 'react'
import type { userItem } from '@/models/user'

const UserDetail: React.FC<{ data: userItem }> = ({ data }) => {
  return (
    <div>{data.name}</div>
  )
}

export default UserDetail

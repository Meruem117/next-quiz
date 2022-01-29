import React from 'react'
import type { memberItem } from '@/models/member'

const MemberTeamList: React.FC<{ data: memberItem[] }> = ({ data }) => {
  return (
    <div>{data[0].teamName}</div>
  )
}

export default MemberTeamList

import React from 'react'
import { Typography } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { teamItem } from '@/models/team'

const TeamInfo: React.FC<{ data: teamItem }> = ({ data }) => {
  const userState = useAppSelector(selectUser)

  const onApply = async (): Promise<void> => {
    console.log(11)
  }

  return (
    <div className="base-info">
      <Typography.Title level={3}>{data.name}</Typography.Title>
      <IconLink icon={UserOutlined} text={data.leader} title={`Leader: ${data.leader}`} href={`/user/${data.leaderId}`} />
      <IconText icon={CalendarOutlined} text={data.createTime} title={`Create time: ${data.createTime}`} />
      <Typography.Paragraph
        type="secondary"
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        title={data.description}
      >{data.description}
      </Typography.Paragraph>
      <Typography.Link onClick={onApply}>Apply for the team.</Typography.Link>
    </div>
  )
}

export default TeamInfo

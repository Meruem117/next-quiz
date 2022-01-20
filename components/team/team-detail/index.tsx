import React from 'react'
import { Typography } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { teamItem } from '@/models/team'

const TeamDetail: React.FC<{ data: teamItem }> = ({ data }) => {
  return (
    <div className="base-info">
      <Typography.Title level={3}>{data.name}</Typography.Title>
      <IconText icon={UserOutlined} text={data.leader} title={`Leader: ${data.leader}`} />
      <IconText icon={CalendarOutlined} text={data.createTime} title={`Create time: ${data.createTime}`} />
      <Typography.Paragraph
        type="secondary"
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        title={data.description}
      >{data.description}
      </Typography.Paragraph>
    </div>
  )
}

export default TeamDetail

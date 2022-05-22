import React, { useState } from 'react'
import { Typography, Popconfirm, message } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { teamItem } from '@/models/team'
import { handleApply } from '@/services/member'

const TeamInfo: React.FC<{ data: teamItem }> = ({ data }) => {
  const userState = useAppSelector(selectUser)
  const [visible, setVisible] = useState<boolean>(false)

  const onApply = async (): Promise<void> => {
    const res = await handleApply({
      teamId: data.id,
      teamName: data.name,
      userId: userState.id,
      userName: userState.name
    })
    if (res.data) {
      message.info('Apply successfully')
    } else {
      message.warning(res.message)
    }
    setVisible(false)
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
      <Popconfirm
        title='Are you sure to apply?'
        visible={visible}
        onConfirm={onApply}
        onCancel={() => setVisible(false)}
      >
        <Typography.Link onClick={() => setVisible(true)}>Apply for the team.</Typography.Link>
      </Popconfirm>
    </div>
  )
}

export default TeamInfo

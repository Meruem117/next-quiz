import React, { useState, useEffect } from 'react'
import { Typography, Popconfirm, message } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { teamItem } from '@/models/team'
import { handleCheck, handleApply, handleQuit } from '@/services/member'

const TeamInfo: React.FC<{ data: teamItem }> = ({ data }) => {
  const userState = useAppSelector(selectUser)
  const [memberId, setMemberId] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    handleCheck(data.id, userState.id).then(res => {
      setMemberId(res.data || 0)
    })
  }, [data, userState])

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
      message.warn(res.message)
    }
    setVisible(false)
  }

  const onQuit = async (): Promise<void> => {
    const res = await handleQuit({ id: memberId })
    if (res.data) {
      message.info('Quit successfully')
    } else {
      message.warn('Fail to quit')
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
      {
        memberId > 0 ? (
          <Popconfirm
            title='Are you sure to quit?'
            visible={visible}
            onConfirm={onQuit}
            onCancel={() => setVisible(false)}
          >
            <Typography.Link onClick={() => setVisible(true)}>Quit the team.</Typography.Link>
          </Popconfirm>
        ) : (
          <Popconfirm
            title='Are you sure to apply?'
            visible={visible}
            onConfirm={onApply}
            onCancel={() => setVisible(false)}
          >
            <Typography.Link onClick={() => setVisible(true)}>Apply for the team.</Typography.Link>
          </Popconfirm>
        )
      }
    </div>
  )
}

export default TeamInfo

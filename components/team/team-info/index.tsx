import React, { useState, useEffect, ReactElement } from 'react'
import { Typography, Popconfirm, message } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { teamItem } from '@/models/team'
import { handleDelete } from '@/services/team'
import { handleCheck, handleApply, handleQuit, handleDismiss } from '@/services/member'

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

  const onDismiss = async (): Promise<void> => {
    const req = { id: data.id }
    const memberRes = await handleDismiss(req)
    const teamRes = await handleDelete(req)
    if (memberRes.data && teamRes.data) {
      message.info('Dismiss successfully')
    } else {
      message.warn('Fail to dismiss')
    }
    setVisible(false)
  }

  const TeamOperation = (): ReactElement => {
    let title = ''
    let text = ''
    let operation = undefined
    if (memberId > 0) {
      if (memberId === data.leaderId) {
        title = 'dismiss'
        text = 'Dismiss the team.'
        operation = onDismiss
      } else {
        title = 'quit'
        text = 'Quit the team.'
        operation = onQuit
      }
    } else {
      title = 'apply'
      text = 'Apply for the team.'
      operation = onApply
    }
    return (
      <Popconfirm
        title={`Are you sure to ${title}?`}
        visible={visible}
        onConfirm={operation}
        onCancel={() => setVisible(false)}
      >
        <Typography.Link onClick={() => setVisible(true)}>{text}</Typography.Link>
      </Popconfirm>
    )
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
      <TeamOperation />
    </div>
  )
}

export default TeamInfo

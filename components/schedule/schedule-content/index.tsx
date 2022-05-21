import React, { useState, useEffect, ReactElement } from 'react'
import { useRouter } from 'next/router'
import { Alert, Button, Dropdown, Menu, message } from 'antd'
import { UserOutlined, TeamOutlined, DownOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import type { scheduleItem } from '@/models/schedule'
import type { teamItem } from '@/models/team'
import type { questionItem } from '@/models/question'
import { handleTeam } from '@/services/team'
import { handleAttend, handleSign, handleReview } from '@/services/result'
import { STATUS, IS_TEAM } from '@/constant'

const ScheduleContent: React.FC<{ schedule: scheduleItem }> = ({ schedule }) => {
  const userState = useAppSelector(selectUser)
  const router = useRouter()
  const [teamList, setTeamList] = useState<teamItem[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const [role, setRole] = useState<string>(userState.name)
  const [participantId, setParticipantId] = useState<number>(userState.id)
  const [isTeam, setIsTeam] = useState<number>(IS_TEAM.USER)

  useEffect(() => {
    handleTeam(userState.id).then(res => setTeamList(res.data))
  }, [userState])

  const onAttend = async (): Promise<void> => {
    const res = await handleAttend(schedule.id, participantId, isTeam)
    if (res.data) {
      router.push({
        pathname: '/take',
        query: {
          resultId: res.data.id,
          scheduleId: schedule.id
        }
      })
    } else {
      message.warning(res.message)
    }
  }

  const onSign = async (): Promise<void> => {
    const { quizId, quizName, round, id, status } = schedule
    const res = await handleSign({
      quizId,
      quizName,
      round,
      scheduleId: id,
      participantId,
      participantName: role,
      isTeam,
      status
    })
    if (res.data) {
      message.success('Sign up successfully')
    } else {
      message.warning(res.message)
    }
  }

  const onReview = async (): Promise<void> => {
    const res = await handleReview(schedule.id, participantId, isTeam)
    if (res.data) {
      router.push({
        pathname: `/result/${res.data.id}`
      })
    } else {
      message.warning(res.message)
    }
  }

  const menu: ReactElement = (
    <Menu onClick={item => { setRole(item.key), setVisible(false) }}>
      <Menu.Item key={userState.name} icon={<UserOutlined />} onClick={() => { setIsTeam(IS_TEAM.USER), setParticipantId(userState.id) }}>
        {userState.name}
      </Menu.Item>
      {
        teamList.map(team => (
          <Menu.Item key={team.name} icon={<TeamOutlined />} onClick={() => { setIsTeam(IS_TEAM.TEAM), setParticipantId(team.id) }}>
            {team.name}
          </Menu.Item>
        ))
      }
    </Menu>
  )

  if (schedule.status === STATUS.END.value) {
    return (
      <Alert
        description="This quiz round has ended."
        type="success"
        className="base-alert"
        action={
          <div>
            <Button type="ghost" onClick={onReview}>Review</Button>
            <Dropdown overlay={menu} visible={visible}>
              <Button type="link" onClick={() => setVisible(!visible)}>
                as {role} <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        }
      />
    )
  } else if (schedule.status === STATUS.NOT_START.value) {
    return (
      <Alert
        description="This quiz round has not started yet."
        type="info"
        className="base-alert"
        action={
          <div>
            <Button type="ghost" onClick={onSign}>Sign up</Button>
            <Dropdown overlay={menu} visible={visible}>
              <Button type="link" onClick={() => setVisible(!visible)}>
                as {role} <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        }
      />
    )
  } else {
    return (
      <Alert
        description="This quiz round has started, you can join the quiz if you have signed up."
        type="warning"
        className="base-alert"
        action={
          <div>
            <Button type="ghost" onClick={onAttend}>Attend</Button>
            <Dropdown overlay={menu} visible={visible}>
              <Button type="link" onClick={() => setVisible(!visible)}>
                as {role} <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        }
      />
    )
  }
}

export default ScheduleContent

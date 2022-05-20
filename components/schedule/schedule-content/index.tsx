import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Alert, Button, Dropdown, Menu, message } from 'antd'
import { UserOutlined, TeamOutlined, DownOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import QuestionInfoList from '@/components/question/question-info-list'
import type { teamItem } from '@/models/team'
import type { questionItem } from '@/models/question'
import { handleTeam } from '@/services/team'
import { handleAttend } from '@/services/result'
import { STATUS, IS_TEAM } from '@/constant'

const ScheduleContent: React.FC<{ scheduleId: number, status: number, data: questionItem[] }> = ({ scheduleId, status, data }) => {
  const userState = useAppSelector(selectUser)
  const router = useRouter()
  const [teamList, setTeamList] = useState<teamItem[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const [role, setRole] = useState<string>(userState.name)
  const [participantId, setParticipantId] = useState<number>(userState.id)
  const [isTeam, setIsTeam] = useState<number>(IS_TEAM.USER)

  useEffect(() => {
    handleTeam(userState.id).then(res => setTeamList(res))
  }, [userState])

  const onAttend = async (): Promise<void> => {
    const res = await handleAttend(scheduleId, participantId, isTeam)
    if (res) {
      router.push({
        pathname: '/take',
        query: {
          resultId: res.id,
          scheduleId
        }
      })
    } else {
      message.error(`${role} has not signed up for the quiz!`)
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

  if (status === STATUS.END.value) {
    return <QuestionInfoList data={data} />
  } else if (status === STATUS.NOT_START.value) {
    return (
      <Alert
        description="This quiz round has not started yet."
        type="info"
        className="base-alert"
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

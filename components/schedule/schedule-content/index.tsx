import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Alert, Button } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import QuestionInfoList from '@/components/question/question-info-list'
import type { questionItem } from '@/models/question'
import { handleTeam } from '@/services/team'
import { STATUS } from '@/constant'

const ScheduleContent: React.FC<{ scheduleId: number, status: number, data: questionItem[] }> = ({ scheduleId, status, data }) => {
  const userState = useAppSelector(selectUser)
  const router = useRouter()

  useEffect(() => {
    handleTeam(userState.id).then(res => console.log(res))
  })

  const onAttend = (): void => {
    router.push({
      pathname: '/take',
      query: {
        scheduleId,
        userId: userState.id
      }
    })
  }

  if (status === STATUS.END.value) {
    return <QuestionInfoList data={data} />
  } else if (status === STATUS.NOT_START.value) {
    return <Alert
      description="This quiz round has not started yet."
      type="info"
      className="base-alert"
    />
  } else {
    return <Alert
      description="This quiz round has started, you can join the quiz if you have signed up."
      type="warning"
      className="base-alert"
      action={<Button type="ghost" onClick={onAttend}>Attend</Button>}
    />
  }
}

export default ScheduleContent

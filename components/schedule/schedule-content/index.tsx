import React from 'react'
import { Alert, Button } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import QuestionInfoList from '@/components/question/question-info-list'
import type { questionItem } from '@/models/question'
import { handleAttend, getAttendResult } from '@/services/result'
import { STATUS, IS_TEAM } from '@/constant'

const ScheduleContent: React.FC<{ scheduleId: number, status: number, data: questionItem[] }> = ({ scheduleId, status, data }) => {
  const userState = useAppSelector(selectUser)

  const onAttend = async (): Promise<void> => {
    const res = await getAttendResult({ scheduleId, participantId: userState.id, isTeam: IS_TEAM.USER })
    console.log(res.data)
  }

  if (status === STATUS.END.value) {
    return <QuestionInfoList data={data} />
  } else if (status === STATUS.NOT_START.value) {
    return <Alert
      description="This quiz round has not started yet, you can view the question list after it ends."
      type="info"
      className="shadow-md rounded-md"
    />
  } else {
    return <Alert
      description="This quiz round has started, you can join the quiz if you have signed up."
      type="warning"
      className="shadow-md rounded-md"
      action={<Button type="ghost" onClick={onAttend}>Attend</Button>}
    />
  }
}

export default ScheduleContent

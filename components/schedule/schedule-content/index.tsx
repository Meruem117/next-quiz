import React from 'react'
import { Alert, Button } from 'antd'
import QuestionInfoList from '@/components/question/question-info-list'
import type { questionItem } from '@/models/question'
import { STATUS } from '@/constant'

const ScheduleContent: React.FC<{ status: number, data: questionItem[] }> = ({ status, data }) => {
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
      action={<Button type="ghost">Attend</Button>}
    />
  }
}

export default ScheduleContent

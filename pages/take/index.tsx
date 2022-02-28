import type { NextPage } from 'next'
import { Alert } from 'antd'
import ScheduleTitle from '@/components/schedule/schedule-title'
import QuestionPaper from '@/components/question/question-paper'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import type { resultItem } from '@/models/result'
import { getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'
import { getResultWhenAttend } from '@/services/result'

type propsType = {
  resultData: resultItem,
  scheduleData: scheduleItem,
  questionData: questionItem[]
}

type contextType = {
  query: {
    scheduleId: number,
    userId: number
  }
}

const TakePage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      {
        props.resultData ?
          <div className="flex flex-col space-y-4 mx-auto w-full">
            <ScheduleTitle data={props.scheduleData} />
            <QuestionPaper data={props.questionData} />
          </div> :
          <Alert
            message="Alert"
            description="You have not signed up for the quiz."
            type="error"
            className="base-alert"
          />
      }
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const { scheduleId, userId } = context.query
  const resultRes = await getResultWhenAttend(scheduleId, userId, 0)
  const scheduleRes = await getScheduleById(scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      resultData: resultRes.data,
      scheduleData: scheduleRes.data,
      questionData: questionRes.data
    }
  }
}

export default TakePage
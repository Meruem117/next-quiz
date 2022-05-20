import type { NextPage } from 'next'
import ScheduleTitle from '@/components/schedule/schedule-title'
import QuestionPaper from '@/components/question/question-paper'
import type { resultItem } from '@/models/result'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import { getResultById } from '@/services/result'
import { getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'

type propsType = {
  resultData: resultItem,
  scheduleData: scheduleItem,
  questionList: questionItem[]
}

type contextType = {
  query: {
    resultId: number,
    scheduleId: number
  }
}

const TakePage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <ScheduleTitle data={props.scheduleData} />
      <QuestionPaper data={props.questionList} result={props.resultData} />
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const { resultId, scheduleId } = context.query
  const resultRes = await getResultById(resultId)
  const scheduleRes = await getScheduleById(scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      resultData: resultRes.data,
      scheduleData: scheduleRes.data,
      questionList: questionRes.data
    }
  }
}

export default TakePage

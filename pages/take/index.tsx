import type { NextPage } from 'next'
import ScheduleTitle from '@/components/schedule/schedule-title'
import QuestionPaper from '@/components/question/question-paper'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import type { participantItem } from '@/models/result'
import { getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'

type propsType = {
  scheduleData: scheduleItem,
  questionList: questionItem[],
  participantInfo: participantItem
}

type contextType = {
  query: {
    scheduleId: number,
    participantId: number,
    isTeam: number
  }
}

const TakePage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <ScheduleTitle data={props.scheduleData} />
      <QuestionPaper data={props.questionList} participantInfo={props.participantInfo} />
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const { scheduleId, participantId, isTeam } = context.query
  const scheduleRes = await getScheduleById(scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      scheduleData: scheduleRes.data,
      questionList: questionRes.data,
      participantInfo: { participantId, isTeam }
    }
  }
}

export default TakePage

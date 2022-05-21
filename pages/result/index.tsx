import type { NextPage } from 'next'
import QuestionInfoList from '@/components/question/question-info-list'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'
import { getResultById } from '@/services/result'
import { getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'

type propsType = {
  resultData: resultItem,
  questionList: questionItem[]
}

type contextType = {
  query: {
    resultId: number,
    scheduleId: number
  }
}

const ResultDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-x-container">
      <div className="w-4/5">
        <QuestionInfoList data={props.questionList} result={props.resultData} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const { resultId, scheduleId } = context.query
  let resultRes = null
  if (resultId) {
    resultRes = await getResultById(resultId)
  }
  const scheduleRes = await getScheduleById(scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      resultData: resultRes ? resultRes.data : null,
      questionList: questionRes.data
    }
  }
}

export default ResultDetailPage

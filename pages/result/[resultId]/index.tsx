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
  params: {
    resultId: number
  }
}

const ResultDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-x-container">
      <div className="w-4/5">
        <QuestionInfoList data={props.questionList} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: []
  }
}

export async function getStaticProps(context: contextType) {
  const resultId = context.params.resultId
  const resultRes = await getResultById(resultId)
  const scheduleRes = await getScheduleById(resultRes.data.scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      resultData: resultRes.data,
      questionList: questionRes.data
    },
    revalidate: 3600
  }
}

export default ResultDetailPage

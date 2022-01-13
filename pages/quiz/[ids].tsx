import type { NextPage } from 'next'
import QuizDetail from '@/components/quiz/quiz-detail'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
import { getQuizById } from '@/services/quiz'
import { getScheduleById } from '@/services/schedule'

type propsType = {
  quizInfo: quizItem,
  scheduleInfo: scheduleItem
}

type contextType = {
  params: {
    ids: string
  }
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <QuizDetail data={props} />
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { ids: '1-1' } }
    ]
  }
}

export async function getStaticProps(context: contextType) {
  const ids = context.params.ids.split('-')
  const quizId = parseInt(ids[0])
  const scheduleId = parseInt(ids[1])
  const quizRes = await getQuizById(quizId)
  const scheduleRes = await getScheduleById(scheduleId)

  return {
    props: {
      quizInfo: quizRes.data,
      scheduleInfo: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage

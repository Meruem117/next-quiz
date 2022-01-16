import type { NextPage } from 'next'
import QuizDetail from '@/components/quiz/quiz-detail'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
import { getQuizList, getQuizById } from '@/services/quiz'
import { getScheduleListByQuizId } from '@/services/schedule'

type propsType = {
  quizData: quizItem,
  scheduleData: scheduleItem[]
}

type contextType = {
  params: {
    quizId: number
  }
}

const QuizDetailPage: NextPage<propsType> = (props) => {
  return (
    <QuizDetail quiz={props.quizData} schedule={props.scheduleData} />
  )
}

export async function getStaticPaths() {
  const quizRes = await getQuizList()
  const quizList = quizRes.data

  return {
    fallback: false,
    paths: quizList.map(item => ({
      params: {
        quizId: item.id
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const quizId = context.params.quizId
  const quizRes = await getQuizById(quizId)
  const scheduleRes = await getScheduleListByQuizId(quizId)

  return {
    props: {
      quizData: quizRes.data,
      scheduleData: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default QuizDetailPage

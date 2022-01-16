import type { NextPage } from 'next'
import Link from 'next/link'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
import { getQuizList, getQuizById } from '@/services/quiz'
import { } from '@/services/schedule'

type propsType = {
  quiz: quizItem
}

type contextType = {
  params: {
    quizId: number
  }
}

const QuizDetailPage: NextPage<propsType> = (props) => {
  return (
    <></>
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

  return {
    props: {
      quizData: quizRes.data
    },
    revalidate: 3600
  }
}

export default QuizDetailPage

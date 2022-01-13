import type { NextPage } from 'next'
import QuizDetail from '@/components/quiz/quiz-detail'
import type { quizItem } from '@/models/quiz'
import { getQuizById } from '@/services/quiz'

type propsType = {
  quizDetail: quizItem[]
}

type contextType = {
  params: {
    quizId: number
  }
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <QuizDetail data={props.quizDetail} />
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { quizId: '1' } },
      { params: { quizId: '2' } },
      { params: { quizId: '3' } }
    ]
  }
}

export async function getStaticProps(context: contextType) {
  const id = context.params.quizId
  const quizRes = await getQuizById(id)

  return {
    props: {
      quizDetail: quizRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage

import type { NextPage } from 'next'
import QuizList from '@/components/quiz/quiz-list'
import type { quizItem } from '@/models/quiz'
import { getQuizList } from '@/services/quiz'

type propsType = {
  quizData: quizItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <QuizList data={props.quizData} />
  )
}

export async function getStaticProps() {
  const quizRes = await getQuizList()

  return {
    props: {
      quizData: quizRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage

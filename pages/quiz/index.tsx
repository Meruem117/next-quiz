import type { NextPage } from 'next'
import ExploreNav from '@/components/common/explore-nav'
import QuizList from '@/components/quiz/quiz-list'
import type { quizItem } from '@/models/quiz'
import { getQuizList } from '@/services/quiz'

type propsType = {
  quizData: quizItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-container">
      <ExploreNav select='quiz' />
      <QuizList data={props.quizData} />
    </div>
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

import type { NextPage } from 'next'
import ExploreNav from '@/components/common/explore-nav'
import QuizList from '@/components/quiz/quiz-list'
import type { quizItem } from '@/models/quiz'
import { getQuizList } from '@/services/quiz'

type propsType = {
  quizList: quizItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <ExploreNav select='quiz' />
      <QuizList data={props.quizList} />
    </div>
  )
}

export async function getStaticProps() {
  const quizRes = await getQuizList()

  return {
    props: {
      quizList: quizRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage

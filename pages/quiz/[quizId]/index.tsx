import type { NextPage } from 'next'
import QuizInfo from '@/components/quiz/quiz-info'
import ScheduleInfo from '@/components/schedule/schedule-info'
import QuestionList from '@/components/question/question-list'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
// import type { questionItem } from '@/models/question'
import { getQuizById } from '@/services/quiz'
import { getScheduleByQuizId } from '@/services/schedule'
// import { getQuestionById } from '@/services/question'

type propsType = {
  quizInfo: quizItem,
  scheduleInfo: scheduleItem,
  // questionList: questionItem[]
}

type contextType = {
  params: {
    quizId: number
  }
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex w-1/2 mx-auto p-4 space-x-4 bg-white rounded">
        <QuizInfo data={props.quizInfo} />
        <ScheduleInfo data={props.scheduleInfo} />
      </div>
      {/* <QuestionList data={props.questionList} /> */}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { quizId: '1' } }
    ]
  }
}

export async function getStaticProps(context: contextType) {
  const quizId = context.params.quizId
  const quizRes = await getQuizById(quizId)
  const scheduleRes = await getScheduleByQuizId(quizId)
  // const questionList: questionItem[] = []
  // const questions = scheduleRes.data.question.split('-')
  // questions.forEach(async item => {
  //   const questionId = parseInt(item)
  //   const questionRes = await getQuestionById(questionId)
  //   questionList.push(questionRes.data)
  // })

  return {
    props: {
      quizInfo: quizRes.data,
      scheduleInfo: scheduleRes.data,
      // questionList
    },
    revalidate: 3600
  }
}

export default QuizPage

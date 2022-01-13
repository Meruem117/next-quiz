import type { NextPage } from 'next'
import QuizDetail from '@/components/quiz/quiz-detail'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import { getQuizById } from '@/services/quiz'
import { getScheduleById } from '@/services/schedule'
import { getQuestionById } from '@/services/question'
import QuestionList from '@/components/question/question-list'

type propsType = {
  quizInfo: quizItem,
  scheduleInfo: scheduleItem,
  questionList: questionItem[]
}

type contextType = {
  params: {
    ids: string
  }
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex flex-col space-y-4">
      <QuizDetail data={props} />
      <QuestionList data={props.questionList} />
    </div>
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
  const questionList: questionItem[] = []
  const questions = scheduleRes.data.question.split('-')
  questions.forEach(async item => {
    const questionId = parseInt(item)
    const questionRes = await getQuestionById(questionId)
    questionList.push(questionRes.data)
  })

  return {
    props: {
      quizInfo: quizRes.data,
      scheduleInfo: scheduleRes.data,
      questionList
    },
    revalidate: 3600
  }
}

export default QuizPage

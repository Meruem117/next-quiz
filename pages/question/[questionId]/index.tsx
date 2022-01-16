import type { NextPage } from 'next'
import QuestionDetail from '@/components/question/question-detail'
import type { questionItem } from '@/models/question'
import { getQuestionById } from '@/services/question'

type propsType = {
  questionData: questionItem
}

type contextType = {
  params: {
    questionId: number
  }
}

const QuestionDetailPage: NextPage<propsType> = (props) => {
  return (
    <QuestionDetail data={props.questionData} />
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { questionId: '1' } },
      { params: { questionId: '2' } },
      { params: { questionId: '3' } }
    ]
  }
}

export async function getStaticProps(context: contextType) {
  const questionId = context.params.questionId
  const questionRes = await getQuestionById(questionId)

  return {
    props: {
      questionData: questionRes.data
    },
    revalidate: 3600
  }
}

export default QuestionDetailPage

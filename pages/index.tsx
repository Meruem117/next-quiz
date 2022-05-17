import type { NextPage } from 'next'
import TopicRadio from '@/components/topic/topic-radio'
import QuestionList from '@/components/question/question-list'
import QuizList from '@/components/quiz/quiz-list'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import type { quizItem } from '@/models/quiz'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'
import { getQuizList } from '@/services/quiz'

type propsType = {
  topic: string,
  topicList: topicItem[],
  questionList: questionItem[],
  quizList: quizItem[]
}

type contextType = {
  query: {
    topic: string
  }
}

const IndexPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex flex-col w-full h-full space-y-6">
      <TopicRadio data={props.topicList} select={props.topic} />
      <div className="flex w-full h-full space-x-6">
        <div className="w-3/4">
          <QuestionList data={props.questionList} topic={props.topic} topicList={props.topicList} />
        </div>
        <div className="w-1/4">
          <QuizList data={props.quizList} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const topic = context.query.topic || ''
  const topicRes = await getTopicList()
  const questionRes = await getQuestionListByTopic(topic)
  const quizRes = await getQuizList()

  return {
    props: {
      topic,
      topicList: topicRes.data,
      questionList: questionRes.data,
      quizList: quizRes.data
    }
  }
}

export default IndexPage

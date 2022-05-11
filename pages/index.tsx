import type { NextPage } from 'next'
import TopicRadio from '@/components/topic/topic-radio'
import QuestionList from '@/components/question/question-list'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import type { scheduleItem } from '@/models/schedule'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'

type propsType = {
  topicList: topicItem[],
  questionList: questionItem[],
  scheduleList: scheduleItem[]
}

type contextType = {
  query: {
    topic: string
  }
}

const IndexPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex w-full h-full space-x-6">
      <div className="flex flex-col w-3/4 h-full space-y-6">
        <TopicRadio data={props.topicList} />
        <QuestionList data={props.questionList} />
      </div>
      <div className="w-1/3 h-full">
      </div>
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const { topic } = context.query
  const topicRes = await getTopicList()
  const questionRes = await getQuestionListByTopic(topic)

  return {
    props: {
      topicList: topicRes.data,
      questionList: questionRes.data,
    }
  }
}

export default IndexPage

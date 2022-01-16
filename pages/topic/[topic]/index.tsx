import type { NextPage } from 'next'
import TopicBreadcrumb from '@/components/topic/topic-breadcrumb'
import QuestionList from '@/components/question/question-list'
import type { questionItem } from '@/models/question'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'

type propsType = {
  topic: string,
  questionData: questionItem[]
}

type contextType = {
  params: {
    topic: string
  }
}

const TopicDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex flex-col w-1/2 mx-auto space-y-4 rounded">
      <TopicBreadcrumb topic={props.topic} />
      <QuestionList data={props.questionData} />
    </div>
  )
}

export async function getStaticPaths() {
  const topicRes = await getTopicList()
  const topicList = topicRes.data

  return {
    fallback: false,
    paths: topicList.map(item => ({
      params: {
        topic: item.topic
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const topic = context.params.topic
  const questionRes = await getQuestionListByTopic(topic)

  return {
    props: {
      topic,
      questionData: questionRes.data
    },
    revalidate: 3600
  }
}

export default TopicDetailPage

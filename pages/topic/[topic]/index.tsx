import type { NextPage } from 'next'
import TopicBreadcrumb from '@/components/topic/topic-breadcrumb'
import QuestionList from '@/components/question/question-list'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'

type propsType = {
  topic: string,
  topicList: topicItem[],
  questionList: questionItem[]
}

type contextType = {
  params: {
    topic: string
  }
}

const TopicDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <TopicBreadcrumb topic={props.topic} />
      <QuestionList data={props.questionList} topic={props.topic} topicList={props.topicList} />
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
  const topic = context.params.topic || ''
  const topicRes = await getTopicList()
  const questionRes = await getQuestionListByTopic(topic)

  return {
    props: {
      topic,
      topicList: topicRes.data,
      questionList: questionRes.data
    },
    revalidate: 3600
  }
}

export default TopicDetailPage

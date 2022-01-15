import type { NextPage } from 'next'
import QuestionList from '@/components/question/question-list'
import type { questionItem } from '@/models/question'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'

type propsType = {
  questionList: questionItem[]
}

type contextType = {
  params: {
    topic: string
  }
}

const TopicDetailPage: NextPage<propsType> = (props) => {
  return (
    <QuestionList data={props.questionList} />
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
      questionList: questionRes.data
    },
    revalidate: 3600
  }
}

export default TopicDetailPage

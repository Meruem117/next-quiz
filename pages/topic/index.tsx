import type { NextPage } from 'next'
import TopicList from '@/components/topic/topic-list'
import type { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'

type propsType = {
  topicData: topicItem[]
}

const TopicPage: NextPage<propsType> = (props) => {
  return (
    <TopicList data={props.topicData} />
  )
}

export async function getStaticProps() {
  const topicRes = await getTopicList()

  return {
    props: {
      topicData: topicRes.data
    },
    revalidate: 3600
  }
}

export default TopicPage

import type { NextPage } from 'next'
import TopicDetailList from '@/components/topic/topic-detail-list'
import type { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'

type propsType = {
  topicList: topicItem[]
}

const TopicPage: NextPage<propsType> = (props) => {
  return (
    <TopicDetailList data={props.topicList} />
  )
}

export async function getStaticProps() {
  const topicRes = await getTopicList()

  return {
    props: {
      topicList: topicRes.data
    },
    revalidate: 3600
  }
}

export default TopicPage

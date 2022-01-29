import type { NextPage } from 'next'
import ExploreNav from '@/components/common/explore-nav'
import TopicList from '@/components/topic/topic-list'
import type { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'

type propsType = {
  topicData: topicItem[]
}

const TopicPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <ExploreNav select='topic' />
      <TopicList data={props.topicData} />
    </div>
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

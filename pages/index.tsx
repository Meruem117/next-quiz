import type { NextPage } from 'next'
import TopicList from '@/components/topic/topic-list'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'

type propsType = {
  data: topicItem[],
  list: questionItem[]
}

const IndexPage: NextPage<propsType> = (props) => {

  console.log(props.list[0].question)
  return (
    <div className="flex w-full h-full">
      {/* left */}
      <div className="flex flex-col w-3/4 h-full">
        <TopicList data={props.data} />
        {/* topic content - question list */}
      </div>
      {/* right */}
      <div className="w-1/4 h-full bg-white">ss</div>
    </div>
  )
}

export async function getStaticProps() {
  const res1 = await getTopicList()
  const res2 = await getQuestionListByTopic('Maths')
  return {
    props: {
      data: res1.data,
      list: res2.data
    },
    revalidate: 3600
  }
}

export default IndexPage

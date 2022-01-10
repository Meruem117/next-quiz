import type { NextPage } from 'next'
import { Radio } from 'antd'
import { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'

type propsType = {
  data: topicItem[]
}

const IndexPage: NextPage<propsType> = (props) => {
  const { data } = props

  return (
    <div className="flex w-full h-full">
      {/* left */}
      <div className="flex flex-col w-3/4 h-full">
        {/* topic list */}
        <Radio.Group defaultValue="1" size="large" className="space-x-1">
          {
            data.map(topic => (
              <Radio.Button value={topic.id} key={topic.id}>{topic.topic}</Radio.Button>
            ))
          }
        </Radio.Group>
        {/* topic content */}
      </div>
      {/* right */}
      <div className="w-1/4 h-full bg-white">ss</div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await getTopicList()
  return {
    props: {
      data: res.data
    },
    revalidate: 3600
  }
}

export default IndexPage

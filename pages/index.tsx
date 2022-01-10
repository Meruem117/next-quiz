import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Radio } from 'antd'
import { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'

type propsType = {
  data: topicItem[]
}

const IndexPage: NextPage<propsType> = (props) => {
  const { data } = props

  return (
    <Fragment>
      <Radio.Group defaultValue="1" size="large" className="flex space-x-1">
        {
          data.map(topic => (
            <Radio.Button value={topic.id} key={topic.id}>{topic.topic}</Radio.Button>
          ))
        }
      </Radio.Group>
    </Fragment>
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
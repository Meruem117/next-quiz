import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Radio, Button } from 'antd'
import { topicItem } from '@/models/topic'
import { getTopicList } from '@/services/topic'
import { TOPIC_PAGE_SIZE } from '@/constant'

type propsType = {
  data: topicItem[]
}

const IndexPage: NextPage<propsType> = (props) => {
  const data = { props }
  console.log(data)

  return (
    <Fragment>
      <Radio.Group defaultValue="1" size="middle">
        {/* {
          data.map(topic => (
            <Radio.Button value={topic.id} key={topic.id}>{topic.topic}</Radio.Button>
          ))
        } */}
      </Radio.Group>
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const data = await getTopicList({ pageNum: 1, pageSize: TOPIC_PAGE_SIZE })
  console.log(data, 111111111111)
  return {
    props: {
      data
    },
    revalidate: 3600
  }
}

export default IndexPage

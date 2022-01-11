import React from 'react'
import { Radio } from 'antd'
import type { topicItem } from '@/models/topic'

const TopicList: React.FC<{ data: topicItem[] }> = ({ data }) => {
  return (
    <Radio.Group defaultValue={data[0].id} size="large" className="space-x-1" >
      {
        data.map(topic => (
          <Radio.Button value={topic.id} key={topic.id} > {topic.topic} </Radio.Button>
        ))
      }
    </Radio.Group>
  )
}

export default TopicList

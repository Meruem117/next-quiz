import React from 'react'
import Link from 'next/link'
import { Radio } from 'antd'
import type { topicItem } from '@/models/topic'

const TopicList: React.FC<{ data: topicItem[] }> = ({ data }) => {
  const defaultAllValue = 0

  return (
    <Radio.Group defaultValue={defaultAllValue} size="large" className="space-x-1" >
      <Link href={`/?topic=`} key={defaultAllValue} passHref>
        <Radio.Button value={defaultAllValue} key={defaultAllValue}> All </Radio.Button>
      </Link>
      {
        data.map(item => (
          <Link href={`/?topic=${item.topic}`} key={item.id} passHref>
            <Radio.Button value={item.id} key={item.id} > {item.topic} </Radio.Button>
          </Link>
        ))
      }
    </Radio.Group>
  )
}

export default TopicList

import React from 'react'
import Router from 'next/router'
import { Radio, message, RadioChangeEvent } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectLogin } from '@/features/login/loginSlice'
import type { topicItem } from '@/models/topic'

const TopicList: React.FC<{ data: topicItem[] }> = ({ data }) => {
  const defaultAllKey = 0
  const defaultAllValue = ''
  const loginState = useAppSelector(selectLogin)

  const toTopic = (e: RadioChangeEvent): void => {
    const topic = e.target.value
    if (loginState.isLogin) {
      Router.push(`/?topic=${topic}`)
    } else {
      message.warn('You must login first!')
    }
  }

  return (
    <Radio.Group defaultValue={defaultAllValue} size="large" className="space-x-1" onChange={toTopic}>
      <Radio.Button value={defaultAllValue} key={defaultAllKey}>All</Radio.Button>
      {
        data.map(item => (
          <Radio.Button value={item.topic} key={item.id}>{item.topic}</Radio.Button>
        ))
      }
    </Radio.Group>
  )
}

export default TopicList

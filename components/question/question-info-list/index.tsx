import React from 'react'
import { List, Button } from 'antd'
import QuestionInfo from '../question-info'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'

const QuestionInfoList: React.FC<{ data: questionItem[], result?: resultItem }> = ({ data, result }) => {
  const answers = result?.answers.split(',') || []

  return (
    <List
      size="large"
      itemLayout="vertical"
      dataSource={data}
      className="base-box"
      renderItem={(item, index) => (
        <List.Item extra={<Button key={item.id} type="primary" href={`/question/${item.id}`}>Detail</Button>}>
          <div className="w-full">
            <QuestionInfo data={item} answer={answers[index]} />
          </div>
        </List.Item >
      )}
    />
  )
}

export default QuestionInfoList

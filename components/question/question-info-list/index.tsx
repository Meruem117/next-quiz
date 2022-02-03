import React from 'react'
import { List, Button } from 'antd'
import QuestionInfo from '../question-info'
import type { questionItem } from '@/models/question'

const QuestionInfoList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  return (
    <List
      size="large"
      itemLayout="vertical"
      dataSource={data}
      className="base-box"
      renderItem={item => (
        <List.Item extra={<Button key={item.id} type="primary" href={`/question/${item.id}`}>Detail</Button>}>
          <div className="w-full">
            <QuestionInfo data={item} />
          </div>
        </List.Item >
      )}
    />
  )
}

export default QuestionInfoList

import React from 'react'
import { List, Card, Tag } from 'antd'
import type { resultItem } from '@/models/result'
import { STATUS } from '@/constant'

const ResultQuizList: React.FC<{ data: resultItem[] }> = ({ data }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={`${item.quizName} #${item.round}`} className="cursor-pointer rounded-md shadow hover:shadow-xl duration-150">
            <Tag color={STATUS[item.status].color}>{STATUS[item.status].text}</Tag>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default ResultQuizList

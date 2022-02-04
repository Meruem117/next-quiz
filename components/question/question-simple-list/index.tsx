import React from 'react'
import Link from 'next/link'
import { List, Tag, Typography } from 'antd'
import type { questionItem } from '@/models/question'
import { QUESTION_TEXT } from '@/constant'

const QuestionSimpleList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 5,
      }}
      renderItem={item => (
        <Link href={`/question/${item.id}`} passHref>
          <List.Item
            className="p-2 cursor-pointer rounded-md hover:shadow-lg duration-150"
            actions={[
              <Tag color="blue" key={item.id}>{item.topic}</Tag>,
              <Tag color="magenta" key={item.id}>{QUESTION_TEXT[item.type]}</Tag>
            ]}
          >
            <List.Item.Meta
              title={<Typography.Title level={4} ellipsis={true} className="w-48" title={item.question}>{item.question}</Typography.Title>}
            />
          </List.Item>
        </Link>
      )}
    />
  )
}

export default QuestionSimpleList

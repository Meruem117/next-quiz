import React from 'react'
import Link from 'next/link'
import { List, Tag, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { quizItem } from '@/models/quiz'

const QuizList: React.FC<{ data: quizItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      className="w-1/2 mx-auto shadow-xl p-2 bg-white rounded"
      pagination={{
        pageSize: 6,
      }}
      renderItem={item => (
        <Link href={`/quiz/${item.id}`} passHref>
          <List.Item
            className="p-2 rounded group cursor-pointer hover:bg-gray-100 hover:shadow-lg"
            actions={[
              <Tag color="volcano" key={item.id}>{item.topic}</Tag>,
              <Tag color="magenta" key={item.id}>{item.round}</Tag>,
              <IconText key={item.id} icon={UserOutlined} text={item.creator} />
            ]}
          >
            <List.Item.Meta
              title={<Typography.Title level={4} title={item.quiz} className="group-hover:text-blue-400">{item.quiz}</Typography.Title>}
              description={item.description}
            />
          </List.Item>
        </Link>
      )}
    />
  )
}

export default QuizList

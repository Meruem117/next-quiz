import React from 'react'
import Link from 'next/link'
import { List, Tag, Typography } from 'antd'
import { UserOutlined, FlagOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { quizItem } from '@/models/quiz'

const QuizList: React.FC<{ data: quizItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="base-list"
      pagination={{
        pageSize: 6,
      }}
      renderItem={item => (
        <Link href={`/quiz/${item.id}`} passHref>
          <List.Item
            className="p-2 rounded-md cursor-pointer group hover:bg-gray-100 hover:shadow-lg ease-in-out duration-75"
            actions={[
              <Tag color="blue" key={item.id}>{item.topic}</Tag>,
              <IconText key={item.id} icon={UserOutlined} text={item.creator} title={`Creator: ${item.creator}`} />,
              <IconText key={item.id} icon={FlagOutlined} text={item.round} title={`Total Rounds: ${item.round}`} />
            ]}
          >
            <List.Item.Meta
              title={<Typography.Title level={4} title={item.quiz} className="group-hover:text-gray-500">{item.quiz}</Typography.Title>}
              description={
                <Typography.Paragraph
                  type="secondary"
                  ellipsis={true}
                  className="w-48"
                  title={item.description}
                >{item.description}
                </Typography.Paragraph>
              }
            />
          </List.Item>
        </Link>
      )}
    />
  )
}

export default QuizList

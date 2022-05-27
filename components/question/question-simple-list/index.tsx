import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { List, Tag, Typography } from 'antd'
import type { questionItem } from '@/models/question'
import { QUESTION_TEXT, PASS_TYPE } from '@/constant'

const QuestionSimpleList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showModal = (): void => {
    setVisible(true)
  }

  const closeModal = (): void => {
    setVisible(false)
  }

  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
        footer={
          <Typography.Link onClick={showModal}>Upload your question here.</Typography.Link>
        }
        renderItem={item => (
          <Link href={`/question/${item.id}`} passHref>
            <List.Item
              className="p-2 cursor-pointer rounded-md hover:shadow-lg duration-150"
              actions={[
                <Tag color="blue" key={item.id}>{item.topic}</Tag>,
                <Tag color="magenta" key={item.id}>{QUESTION_TEXT[item.type]}</Tag>,
                <div className="w-14 text-center" key={item.id}>
                  <Typography.Text type={PASS_TYPE[item.pass].type}>{PASS_TYPE[item.pass].name}</Typography.Text>
                </div>
              ]}
            >
              <List.Item.Meta
                title={<Typography.Title level={4} ellipsis={true} className="w-48" title={item.question}>{item.question}</Typography.Title>}
              />
            </List.Item>
          </Link>
        )}
      />
    </Fragment>
  )
}

export default QuestionSimpleList

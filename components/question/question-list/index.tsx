import React, { ReactElement } from 'react'
import { List, Button, Tag, Typography } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { questionItem } from '@/models/question'
import { QUESTION_TYPE_TEXT } from '@/constant'

const QuestionList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      className="bg-white shadow-xl p-2"
      pagination={{
        pageSize: 3,
      }}
      footer={
        <a>Add a Question</a>
      }
      renderItem={item => (
        <List.Item
          key={item.id}
          className="rounded p-2"
          actions={[
            <Tag color="volcano" key={item.id}>{item.topic}</Tag>,
            <Tag color="magenta" key={item.id}>{QUESTION_TYPE_TEXT[item.type]}</Tag>,
            <IconText key={item.id} icon={ClockCircleOutlined} text={item.updateTime.substring(0, 10)} title={`Last Update: ${item.updateTime}`} />
          ]}
          extra={
            <Button type="default" href={`/question/${item.id}`}>Detail</Button>
          }
        >
          <List.Item.Meta
            title={<Typography.Title level={4} title={item.question}>{item.question}</Typography.Title>}
          />
        </List.Item>
      )}
    />
  )
}

export default QuestionList

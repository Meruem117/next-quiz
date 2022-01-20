import React from 'react'
import { List, Button, Tag, Typography } from 'antd'
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { questionItem } from '@/models/question'
import { QUESTION_TYPE_TEXT } from '@/constant'

const QuestionList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      className="base-list"
      pagination={{
        pageSize: 3,
      }}
      footer={
        <a>Upload questions here</a>
      }
      renderItem={item => (
        <List.Item
          className="p-2 rounded-md"
          actions={[
            <Tag color="blue" key={item.id}>{item.topic}</Tag>,
            <Tag color="magenta" key={item.id}>{QUESTION_TYPE_TEXT[item.type]}</Tag>,
            <IconText key={item.id} icon={CalendarOutlined} text={item.updateTime.substring(0, 10)} title={`Last Update: ${item.updateTime}`} />,
            <IconText key={item.id} icon={UserOutlined} text={item.up} title={`Up: ${item.up}`} />
          ]}
          extra={
            <Button type="default" href={`/question/${item.id}`}>Detail</Button>
          }
        >
          <List.Item.Meta
            title={<Typography.Title level={4} ellipsis={true} className="w-48" title={item.question}>{item.question}</Typography.Title>}
          />
        </List.Item>
      )}
    />
  )
}

export default QuestionList

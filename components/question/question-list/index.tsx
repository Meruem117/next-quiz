import React, { ReactElement } from 'react'
import { List, Button, Tag, Space } from 'antd'
import { TagsOutlined, ClockCircleOutlined } from '@ant-design/icons'
import type { questionItem } from '@/models/question'
import { QUESTION_TYPE_TEXT } from '@/constant'

const QuestionList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  console.log(data)
  return (
    <List
      itemLayout="vertical"
      size="large"
      className="bg-white"
      dataSource={data}
      footer={
        <a className="pl-1 text-sm">Add your question here.</a>
      }
      renderItem={item => (
        <List.Item
          key={item.id}
          actions={[
            <Tag color="volcano" key={item.topic}>{item.topic}</Tag>,
            <IconText icon={TagsOutlined} text={QUESTION_TYPE_TEXT[item.type]} key={item.type} />,
            <IconText icon={ClockCircleOutlined} text={item.updateTime.substring(0, 10)} key={item.updateTime} />
          ]}
          extra={
            <Button type="primary">Detail</Button>
          }
        >
          <List.Item.Meta
            title={<div className="text-lg font-semibold">{item.question}</div>}
          />
        </List.Item>
      )}
    />
  )
}

const IconText = ({ icon, text }: { icon: React.FC, text: string }): ReactElement => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

export default QuestionList

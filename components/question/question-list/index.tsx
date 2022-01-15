import React, { ReactElement } from 'react'
import { List, Button, Tag, Typography } from 'antd'
import { TagOutlined, ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { questionItem } from '@/models/question'
import { QUESTION_TYPE_TEXT } from '@/constant'

const QuestionList: React.FC<{ data: questionItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      className="bg-white shadow-xl"
      dataSource={data}
      footer={
        <a className="text-sm pl-2">upload your question</a>
      }
      renderItem={item => (
        <List.Item
          key={item.id}
          className="rounded p-2"
          actions={[
            <Tag color="volcano" key={item.topic}>{item.topic}</Tag>,
            <IconText icon={TagOutlined} text={QUESTION_TYPE_TEXT[item.type]} key={item.type} />,
            <IconText icon={ClockCircleOutlined} text={item.updateTime.substring(0, 10)} key={item.updateTime} />
          ]}
          extra={
            <Button type="default" href={`/question/${item.id}`}>Detail</Button>
          }
        >
          <List.Item.Meta
            title={<Typography.Title level={4}>{item.question}</Typography.Title>}
          />
        </List.Item>
      )}
    />
  )
}

export default QuestionList

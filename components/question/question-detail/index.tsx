import React from 'react'
import { Typography, Tag, Collapse } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { questionItem } from '@/models/question'
import { QUESTION_TYPE_TEXT } from '@/constant'

type optionItem = {
  key: string,
  value: (keyof questionItem)
}

const QuestionDetail: React.FC<{ data: questionItem }> = ({ data }) => {
  const options: optionItem[] = [
    { key: 'A', value: 'optionA' },
    { key: 'B', value: 'optionB' },
    { key: 'C', value: 'optionC' },
    { key: 'D', value: 'optionD' }
  ]

  return (
    <div className="flex flex-col w-1/2 mx-auto bg-white p-4 space-y-4 shadow-xl">
      <Typography.Title level={3} title={data.question}>{data.question}</Typography.Title>
      <div className="flex space-x-2">
        <IconText icon={CalendarOutlined} text={data.createTime.substring(0, 10)} title={`Created: ${data.createTime}`} />
        <Typography.Text> - </Typography.Text>
        <IconText icon={CalendarOutlined} text={data.updateTime.substring(0, 10)} title={`Updated: ${data.updateTime}`} />
      </div>
      <div className="flex space-x-2">
        <Tag color="volcano">{data.topic}</Tag>
        <Tag color="blue">{QUESTION_TYPE_TEXT[data.type]}</Tag>
      </div>
      {
        options.map(option => {
          if (data[option.value]) {
            return (
              <div key={option.key} className="text-xl">{option.key}. {data[option.value]}</div>
            )
          }
        })
      }
      <Collapse collapsible="header">
        <Collapse.Panel header="Answer" key="question-answer">
          <Typography.Text>{data.answer}</Typography.Text>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default QuestionDetail

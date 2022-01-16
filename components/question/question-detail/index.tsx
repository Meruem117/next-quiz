import React from 'react'
import { Typography, Tag, Collapse } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
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
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col w-2/5 bg-white p-3 space-y-4 shadow-xl rounded">
        <Typography.Title level={3} title={data.question}>{data.question}</Typography.Title>
        {options.map(option => {
          if (data[option.value]) {
            return (
              <div key={option.key} className="text-xl">{option.key}. {data[option.value]}</div>
            )
          }
        })}
        <Collapse collapsible="header">
          <Collapse.Panel header="Answer" key="question-answer">
            <Typography.Text>{data.answer}</Typography.Text>
          </Collapse.Panel>
        </Collapse>
      </div>
      <div>
        <div className="flex flex-col bg-white space-y-4 p-4 shadow-xl rounded">
          <IconText icon={UserOutlined} text={data.up} title={`Up: ${data.up}`} />
          <div className="flex space-x-2">
            <Tag color="volcano">{data.topic}</Tag>
            <Tag color="blue">{QUESTION_TYPE_TEXT[data.type]}</Tag>
          </div>
          <div className="flex space-x-2">
            <IconText icon={CalendarOutlined} text={data.createTime.substring(0, 10)} title={`Created: ${data.createTime}`} />
            <Typography.Text> - </Typography.Text>
            <IconText icon={CalendarOutlined} text={data.updateTime.substring(0, 10)} title={`Updated: ${data.updateTime}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail

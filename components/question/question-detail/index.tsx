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
    <div className="base-x-container">
      <div className="flex flex-col w-2/5 bg-white space-y-4 p-3 shadow-xl rounded-lg">
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
        <div className="flex flex-col bg-white space-y-4 p-3 shadow-xl rounded-lg">
          <IconText icon={UserOutlined} text={data.up} title={`Up: ${data.up}`} />
          <div className="flex space-x-2">
            <Tag color="blue">{data.topic}</Tag>
            <Tag color="magenta">{QUESTION_TYPE_TEXT[data.type]}</Tag>
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

import React from 'react'
import { Typography, Collapse } from 'antd'
import type { questionItem } from '@/models/question'

type optionItem = {
  key: string,
  value: (keyof questionItem)
}

const QuestionInfo: React.FC<{ data: questionItem }> = ({ data }) => {
  const options: optionItem[] = [
    { key: 'A', value: 'optionA' },
    { key: 'B', value: 'optionB' },
    { key: 'C', value: 'optionC' },
    { key: 'D', value: 'optionD' }
  ]

  return (
    <div className="flex flex-col space-y-4">
      <Typography.Title level={3} title={data.question}>{data.question}</Typography.Title>
      {
        options.map(option => {
          if (data[option.value]) {
            return <div key={option.key} className="text-xl">{option.key}. {data[option.value]}</div>
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

export default QuestionInfo

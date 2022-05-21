import React from 'react'
import { Typography, Collapse, Tag } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import type { questionItem } from '@/models/question'

type optionItem = {
  key: string,
  value: (keyof questionItem)
}

const QuestionInfo: React.FC<{ data: questionItem, answer?: string }> = ({ data, answer }) => {
  const isCorrect = data.answer === answer
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
          <Typography.Text>Correct answer: {data.answer}</Typography.Text>
          {
            answer ? (
              <div className="flex mt-4">
                {isCorrect ?
                  <Tag icon={<CheckCircleOutlined />} color="success">Correct</Tag> :
                  <Tag icon={<CloseCircleOutlined />} color="error">Wrong</Tag>}
                <Typography.Text>Your answer: {answer}</Typography.Text>
              </div>
            ) : undefined
          }
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default QuestionInfo

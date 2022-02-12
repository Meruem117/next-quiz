import React, { useState, useEffect } from 'react'
import { Space, Typography, Radio, List, Button, message, RadioChangeEvent } from 'antd'
import { cloneDeep } from 'lodash'
import type { questionItem } from '@/models/question'

const QuestionPaper: React.FC<{ data: questionItem[] }> = ({ data }) => {
  const total = data.length
  const [index, setIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([])

  const onChange = (e: RadioChangeEvent) => {
    const currentAnswers = cloneDeep(answers)
    currentAnswers[index] = e.target.value
    setAnswers(currentAnswers)
  }

  const onNext = () => {
    if (index + 1 < total) {
      setIndex(index + 1)
    } else {
      message.info('This is the last question')
    }
  }

  const onSubmit = () => {
    console.log(answers)
  }

  return (
    <div className="base-x-container">
      <div className="base-box w-3/4">
        <div>
          <Typography.Title level={3}>{data[index].question}</Typography.Title>
          <Radio.Group onChange={onChange} value={answers[index]} size="large">
            <Space direction="vertical">
              <Radio value='a' className="text-lg">A. {data[index].optionA}</Radio>
              <Radio value='b' className="text-lg">B. {data[index].optionB}</Radio>
              <Radio value='c' className="text-lg">C. {data[index].optionC}</Radio>
              <Radio value='d' className="text-lg">D. {data[index].optionD}</Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="primary" onClick={onSubmit}>Submit</Button>
          <Button type="primary" onClick={onNext}>Next</Button>
        </div>
      </div>
      <div className="w-1/4">
        <List
          grid={{
            gutter: 2,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 5,
            xxl: 5,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Button onClick={() => setIndex(data.indexOf(item))}>{data.indexOf(item) + 1}</Button>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default QuestionPaper

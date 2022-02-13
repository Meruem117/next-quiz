import React, { useState } from 'react'
import { Space, Typography, Radio, List, Button, message, RadioChangeEvent } from 'antd'
import { cloneDeep } from 'lodash'
import type { questionItem } from '@/models/question'

const QuestionPaper: React.FC<{ data: questionItem[] }> = ({ data }) => {
  const total = data.length
  const [current, setCurrent] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [tags, setTags] = useState<boolean[]>([])

  const onChange = (e: RadioChangeEvent) => {
    const currentAnswers = cloneDeep(answers)
    currentAnswers[current] = e.target.value
    setAnswers(currentAnswers)
  }

  const onNext = () => {
    if (current + 1 < total) {
      setCurrent(current + 1)
    } else {
      message.info('This is the last question')
    }
  }

  const onTag = () => {
    const currentTags = cloneDeep(tags)
    currentTags[current] = currentTags[current] ? !currentTags[current] : true
    setTags(currentTags)
  }

  const onSubmit = () => {
    console.log(answers)
  }

  const NumberButton = ({ index }: { index: number }) => {
    let classes = 'w-9 h-9 p-1 text-base text-center cursor-pointer shadow-md bg-white'

    if (index === current) {
      classes += ' border border-solid border-gray-400'
    }
    if (answers[index] && !tags[index]) {
      classes += ' bg-green-300'
    }
    if (tags[index]) {
      classes += ' bg-yellow-300'
    }

    return (
      <div
        onClick={() => setCurrent(index)}
        className={classes}
        title={`${index + 1}`}
      >
        {index + 1}
      </div>
    )
  }

  return (
    <div className="base-x-container">
      <div className="base-box w-3/4">
        <div>
          <Typography.Title level={3}>{current + 1}. {data[current].question}</Typography.Title>
          <Radio.Group onChange={onChange} value={answers[current]} size="large">
            <Space direction="vertical">
              <Radio value='a' className="text-lg">A. {data[current].optionA}</Radio>
              <Radio value='b' className="text-lg">B. {data[current].optionB}</Radio>
              <Radio value='c' className="text-lg">C. {data[current].optionC}</Radio>
              <Radio value='d' className="text-lg">D. {data[current].optionD}</Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="primary" onClick={onTag}>Tag</Button>
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
            xxl: 5
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <NumberButton index={data.indexOf(item)} />
            </List.Item>
          )}
        />
      </div>
    </div >
  )
}

export default QuestionPaper

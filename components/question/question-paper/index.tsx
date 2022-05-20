import React, { useState, ReactElement } from 'react'
import { Space, Typography, Radio, List, Button, Popconfirm, message, RadioChangeEvent } from 'antd'
import { cloneDeep } from 'lodash'
import type { questionItem } from '@/models/question'
import type { resultItem } from '@/models/result'
import { handleSubmit } from '@/services/result'

const QuestionPaper: React.FC<{
  data: questionItem[], result: resultItem
}> = ({ data, result }) => {
  const total = data.length
  const [current, setCurrent] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [tags, setTags] = useState<boolean[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const onChange = (e: RadioChangeEvent): void => {
    const currentAnswers = cloneDeep(answers)
    currentAnswers[current] = e.target.value
    setAnswers(currentAnswers)
  }

  const onNext = (): void => {
    if (current + 1 < total) {
      setCurrent(current + 1)
    } else {
      message.info('This is the last question')
    }
  }

  const onTag = (): void => {
    const currentTags = cloneDeep(tags)
    currentTags[current] = currentTags[current] ? !currentTags[current] : true
    setTags(currentTags)
  }

  const onSubmit = (): void => {
    if (answers.length !== total) {
      setTitle('You have not finished all the questions, are you sure to submit?')
    } else {
      setTitle('Are you sure to submit?')
    }
    setVisible(true)
  }

  const onConfirm = async () => {
    result.answers = answers.join(',')
    const res = await handleSubmit(result)
    if (res) {
      message.info('Submit successfully')
    } else {
      message.error('Fail to submit')
    }
    setVisible(false)
  }

  const NumberButton = ({ index }: { index: number }): ReactElement => {
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
      <div className={classes} title={`${index + 1}`} onClick={() => setCurrent(index)}>
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
          <Popconfirm
            title={title}
            visible={visible}
            onConfirm={onConfirm}
            onCancel={() => setVisible(false)}
          >
            <Button type="primary" onClick={onSubmit}>Submit</Button>
          </Popconfirm>
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
    </div>
  )
}

export default QuestionPaper

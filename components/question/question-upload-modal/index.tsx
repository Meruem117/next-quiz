import React, { useState } from 'react'
import { Modal, Form, Input, Select, Checkbox, Radio, message } from 'antd'
import type { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import { uploadQuestion } from '@/services/question'
import { QUESTION, QUESTION_SELECT } from '@/constant'

const QuestionUploadModal: React.FC<{
  topic: string, topicList: topicItem[], visible: boolean, closeModal: VoidFunction
}> = ({ topic, topicList, visible, closeModal }) => {
  const [form] = Form.useForm()
  const userState = useAppSelector(selectUser)
  const [type, setType] = useState<number>(QUESTION.SINGLE_CHOICE)
  const [answer, setAnswer] = useState<string>('')
  const autoSize = { minRows: 1, maxRows: 5 }
  const answerOptions = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd' }
  ]

  const upload = (): void => {
    form.validateFields().then(async (values: questionItem) => {
      values.up = userState.name
      values.upId = userState.id
      if (typeof values.answer !== 'string') {
        values.answer = answer
      }
      const res = await uploadQuestion(values)
      if (res.data) {
        closeModal()
        form.resetFields()
        message.success('Upload successfully')
      } else {
        message.error('Fail to upload')
      }
    })
  }

  const cancel = (): void => {
    closeModal()
    form.resetFields()
  }

  return (
    <Modal title="Upload" visible={visible} onCancel={cancel} okText="Upload" onOk={upload} >
      <Form form={form} layout="vertical" initialValues={{ topic }}>
        <Form.Item name="question" label="Question">
          <Input.TextArea autoSize={autoSize} placeholder="Input question" />
        </Form.Item>
        <Form.Item name="topic" label="Topic">
          <Select placeholder="Select a topic" defaultValue={topic}>
            {
              topicList.map(item => (
                <Select.Option value={item.topic} key={item.topic}>{item.topic}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item name="type" label="Type">
          <Select placeholder="Select a type" onSelect={(value: number) => setType(value)}>
            {
              QUESTION_SELECT.map(item => (
                <Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item name="option_a" label="Option A">
          <Input.TextArea autoSize={autoSize} placeholder="Input option A" />
        </Form.Item>
        <Form.Item name="option_b" label="Option B">
          <Input.TextArea autoSize={autoSize} placeholder="Input option B" />
        </Form.Item>
        <Form.Item name="option_c" label="Option C">
          <Input.TextArea autoSize={autoSize} placeholder="Input option C" />
        </Form.Item>
        <Form.Item name="option_d" label="Option D">
          <Input.TextArea autoSize={autoSize} placeholder="Input option D" />
        </Form.Item>
        <Form.Item name="answer" label="Answer">
          {
            type === QUESTION.SINGLE_CHOICE ?
              <Radio.Group options={answerOptions} /> :
              <Checkbox.Group options={answerOptions} onChange={(checkedValue: CheckboxValueType[]) => setAnswer(checkedValue.join(','))} />
          }
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default QuestionUploadModal
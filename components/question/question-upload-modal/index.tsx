import React from 'react'
import { Modal, Form, Input, Select, message } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import { questionItem } from '@/models/question'
import { uploadQuestion } from '@/services/question'
import { QUESTION_SELECT } from '@/constant'

const QuestionUploadModal: React.FC<{ visible: boolean, closeModal: VoidFunction }> = ({ visible, closeModal }) => {
  const [form] = Form.useForm()
  const userState = useAppSelector(selectUser)
  const autoSize = { minRows: 1, maxRows: 5 }

  const upload = (): void => {
    form.validateFields().then((values: questionItem) => {
      console.log(values)
      console.log(userState.id, userState.name)
      closeModal()
      form.resetFields()
      message.success('Upload successfully')
    })
  }

  const cancel = (): void => {
    closeModal()
    form.resetFields()
  }

  return (
    <Modal title="Upload" visible={visible} onCancel={cancel} okText="Upload" onOk={upload} >
      <Form form={form} layout="vertical">
        <Form.Item name="question" label="Question" >
          <Input.TextArea autoSize={autoSize} placeholder="Input question" />
        </Form.Item>
        <Form.Item name="topic" label="Topic">
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Type">
          <Select placeholder="Select a type">
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
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default QuestionUploadModal
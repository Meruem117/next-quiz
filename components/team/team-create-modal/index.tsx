import React from 'react'
import { Modal, Form, Input, message } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import type { teamItem } from '@/models/team'
import { handleCreate } from '@/services/team'

const TeamCreateModal: React.FC<{ visible: boolean, closeModal: VoidFunction }> = ({ visible, closeModal }) => {
  const [form] = Form.useForm()
  const userState = useAppSelector(selectUser)

  const create = (): void => {
    form.validateFields().then(async (values: teamItem) => {
      values.leader = userState.name
      values.leaderId = userState.id
      const res = await handleCreate(values)
      if (res.data) {
        closeModal()
        form.resetFields()
        message.success('Create successfully')
      } else {
        message.error('Fail to create')
      }
    })
  }

  const cancel = (): void => {
    closeModal()
    form.resetFields()
  }

  return (
    <Modal title="Create" visible={visible} onCancel={cancel} okText="Create" onOk={create} >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name">
          <Input placeholder="Input team name" type="text" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Input team description" autoSize={{ minRows: 2, maxRows: 4 }} maxLength={240} showCount />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default TeamCreateModal

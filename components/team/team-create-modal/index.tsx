import React from 'react'
import { Modal, Form, Input, message } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import type { teamItem } from '@/models/team'
import { handleCreate } from '@/services/team'
import { handleApply } from '@/services/member'
import { PASS, QUIT } from '@/constant'

const TeamCreateModal: React.FC<{ visible: boolean, closeModal: VoidFunction }> = ({ visible, closeModal }) => {
  const [form] = Form.useForm()
  const userState = useAppSelector(selectUser)
  const userId = userState.id
  const userName = userState.name

  const create = (): void => {
    form.validateFields().then(async (values: teamItem) => {
      values.leader = userName
      values.leaderId = userId
      const res = await handleCreate(values)
      if (res.data) {
        handleApply({
          teamId: res.data,
          teamName: values.name,
          userId,
          userName,
          pass: PASS.PASS,
          quit: QUIT.NOT_QUIT
        })
        closeModal()
        form.resetFields()
        message.success('Team create successfully')
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

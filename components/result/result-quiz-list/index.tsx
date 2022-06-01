import React, { useState } from 'react'
import Link from 'next/link'
import { List, Radio, Space, Tag, Typography, Popconfirm, message } from 'antd'
import { groupBy, cloneDeep } from 'lodash'
import type { resultItem } from '@/models/result'
import { handleCancel } from '@/services/result'
import { STATUS, STATUS_TYPE, IS_TAKE_TEXT } from '@/constant'

const ResultQuizList: React.FC<{ data: resultItem[] }> = ({ data }) => {
  const [status, setStatus] = useState<number>(1)
  const [visible, setVisible] = useState<boolean[]>([])
  const dataSource = groupBy(data, 'status')

  const handleChange = (e: any): void => {
    setStatus(e.target.value)
  }

  const showPopconfirm = (index: number): void => {
    const currentVisible = cloneDeep(visible)
    currentVisible[index] = true
    setVisible(currentVisible)
  }

  const closePopconfirm = (index: number): void => {
    const currentVisible = cloneDeep(visible)
    currentVisible[index] = false
    setVisible(currentVisible)
  }

  const cancelResult = async (id: number, index: number): Promise<void> => {
    const res = await handleCancel({ id })
    if (res.data) {
      message.info('Cancel successfully')
    } else {
      message.error('Fail to cancel')
    }
    closePopconfirm(index)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Radio.Group onChange={handleChange} value={status}>
        <Radio.Button value={STATUS.START.value}>{STATUS.START.text}</Radio.Button>
        <Radio.Button value={STATUS.NOT_START.value}>{STATUS.NOT_START.text}</Radio.Button>
        <Radio.Button value={STATUS.END.value}>{STATUS.END.text}</Radio.Button>
      </Radio.Group>
      <List
        itemLayout="horizontal"
        dataSource={dataSource[status]}
        pagination={{
          pageSize: 5,
        }}
        renderItem={(item, index) => (
          <div className="flex space-x-3">
            <Link href={`/schedule/${item.scheduleId}`} passHref>
              <List.Item className="w-4/5 p-2 cursor-pointer rounded-md hover:shadow-lg duration-150">
                <Space size="middle">
                  <div className="text-xl font-semibold">{`${item.quizName} #${item.round}`}</div>
                  <Tag color={STATUS_TYPE[item.status].color}>{STATUS_TYPE[item.status].text}</Tag>
                  <Tag color="blue">{IS_TAKE_TEXT[item.isTake]}</Tag>
                </Space>
              </List.Item>
            </Link>
            <div className="flex flex-col justify-center">
              <Popconfirm
                title='Are you sure to cancel?'
                visible={visible[index]}
                onConfirm={() => cancelResult(item.id, index)}
                onCancel={() => closePopconfirm(index)}
              >
                <Typography.Link onClick={() => showPopconfirm(index)}>Cancel</Typography.Link>
              </Popconfirm>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default ResultQuizList

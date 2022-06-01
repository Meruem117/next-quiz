import React, { useState } from 'react'
import Link from 'next/link'
import { List, Radio, Space, Tag, Typography } from 'antd'
import { groupBy } from 'lodash'
import type { resultItem } from '@/models/result'
import { STATUS, STATUS_TYPE, IS_TAKE_TEXT } from '@/constant'

const ResultQuizList: React.FC<{ data: resultItem[] }> = ({ data }) => {
  const [status, setStatus] = useState<number>(1)
  const dataSource = groupBy(data, 'status')

  const handleChange = (e: any): void => {
    setStatus(e.target.value)
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
        renderItem={item => (
          <div className="flex space-x-3">
            <Link href={`/schedule/${item.scheduleId}`} passHref>
              <List.Item className="w-5/6 p-2 cursor-pointer rounded-md hover:shadow-lg duration-150">
                <Space size="middle">
                  <div className="text-xl font-semibold">{`${item.quizName} #${item.round}`}</div>
                  <Tag color={STATUS_TYPE[item.status].color}>{STATUS_TYPE[item.status].text}</Tag>
                  <Tag color="blue">{IS_TAKE_TEXT[item.isTake]}</Tag>
                </Space>
              </List.Item>
            </Link>
            <div className="flex flex-col justify-center">
              <Typography.Link>Cancel</Typography.Link>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default ResultQuizList

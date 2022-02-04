import React, { useState } from 'react'
import Link from 'next/link'
import { List, Radio, Space, Tag } from 'antd'
import { groupBy } from 'lodash'
import type { resultItem } from '@/models/result'
import { STATUS, STATUS_TYPE } from '@/constant'

const ResultQuizList: React.FC<{ data: resultItem[] }> = ({ data }) => {
  const [status, setStatus] = useState<number>(1)
  const dataSource = groupBy(data, 'status')

  const handleChange = (e: any): void => {
    setStatus(e.target.value)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Radio.Group onChange={handleChange} value={status}>
        <Radio.Button value={STATUS_TYPE.START.text}>{STATUS_TYPE.START.text}</Radio.Button>
        <Radio.Button value={STATUS_TYPE.NOT_START.text}>{STATUS_TYPE.NOT_START.text}</Radio.Button>
        <Radio.Button value={STATUS_TYPE.END.text}>{STATUS_TYPE.END.text}</Radio.Button>
      </Radio.Group>
      <List
        itemLayout="horizontal"
        dataSource={dataSource[status]}
        pagination={{
          pageSize: 5,
        }}
        renderItem={item => (
          <Link href={`/schedule/${item.scheduleId}`} passHref>
            <List.Item className="p-2 cursor-pointer rounded-md hover:shadow-lg duration-150">
              <Space size="middle">
                <div className="text-xl font-semibold">{`${item.quizName} #${item.round}`}</div>
                <Tag color={STATUS[item.status].color}>{STATUS[item.status].text}</Tag>
              </Space>
            </List.Item>
          </Link>
        )}
      />
    </div>
  )
}

export default ResultQuizList

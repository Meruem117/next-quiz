import React, { useState } from 'react'
import { List, Radio, Space, Typography, Tag } from 'antd'
import { groupBy } from 'lodash'
import type { resultItem } from '@/models/result'
import { STATUS } from '@/constant'

const ResultQuizList: React.FC<{ data: resultItem[] }> = ({ data }) => {
  const [status, setStatus] = useState<number>(1)
  const dataSource = groupBy(data, 'status')

  const handleChange = (e: any): void => {
    setStatus(e.target.value)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Radio.Group onChange={handleChange} value={status}>
        <Radio.Button value={1}>Start</Radio.Button>
        <Radio.Button value={2}>End</Radio.Button>
        <Radio.Button value={0}>Not Start</Radio.Button>
      </Radio.Group>
      <List
        itemLayout="horizontal"
        dataSource={dataSource[status]}
        pagination={{
          pageSize: 5,
        }}
        renderItem={item => (
          <List.Item className="p-2 cursor-pointer rounded-md shadow-md hover:shadow-lg duration-150">
            <Space size="middle">
              <div className="text-xl font-semibold">{`${item.quizName} #${item.round}`}</div>
              <Tag color={STATUS[item.status].color}>{STATUS[item.status].text}</Tag>
            </Space>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ResultQuizList

import React from 'react'
import { List, Tag, Space } from 'antd'
import type { scheduleItem } from '@/models/schedule'

const ScheduleList: React.FC<{ data: scheduleItem[] }> = ({ data }) => {
  return (
    <div className="flex flex-col bg-white space-y-4">
      <div className="flex p-2">
        <div className="text-xl font-semibold w-11/12">Conducting Quiz</div>
        <a className="w-1/12 text-sm pt-1">My Quiz</a>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            className="cursor-pointer hover:shadow-lg p-4 hover:shadow-green-300 duration-150 ease-in-out"
            extra={
              <Tag color="green">Conducting</Tag>
            }
          >
            <Space direction="vertical" size="small">
              <List.Item.Meta
                title={
                  <div className="flex space-x-3 text-xl font-semibold">
                    <p>{item.quizName}</p>
                    <a>#{item.round}</a>
                  </div>}
              />
              <div className="text-base text-gray-400 pl-2">
                <Space direction="horizontal">
                  <p className="w-12">Start:</p>
                  <p>{item.startTime}</p>
                </Space>
              </div>
              <div className="text-base text-gray-400 pl-2">
                <Space direction="horizontal">
                  <p className="w-12">End:</p>
                  <p>{item.endTime}</p>
                </Space>
              </div>
            </Space>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ScheduleList

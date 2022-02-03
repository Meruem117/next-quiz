import React from 'react'
import { Typography, Tag } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import QuestionInfo from '../question-info'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { questionItem } from '@/models/question'
import { QUESTION_TEXT } from '@/constant'

const QuestionDetail: React.FC<{ data: questionItem }> = ({ data }) => {
  return (
    <div className="base-x-container">
      <div className="w-2/5 bg-white shadow-xl rounded-lg p-3">
        <QuestionInfo data={data} />
      </div>
      <div>
        <div className="flex flex-col bg-white space-y-4 p-3 shadow-xl rounded-lg">
          <IconLink icon={UserOutlined} text={data.up} title={`Up: ${data.up}`} href={`/user/${data.upId}`} />
          <div className="flex space-x-2">
            <Tag color="blue">{data.topic}</Tag>
            <Tag color="magenta">{QUESTION_TEXT[data.type]}</Tag>
          </div>
          <div className="flex space-x-2">
            <IconText icon={CalendarOutlined} text={data.createTime.substring(0, 10)} title={`Created: ${data.createTime}`} />
            <Typography.Text> - </Typography.Text>
            <IconText icon={CalendarOutlined} text={data.updateTime.substring(0, 10)} title={`Updated: ${data.updateTime}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail

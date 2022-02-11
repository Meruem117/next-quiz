import React from 'react'
import { Typography } from 'antd'
import { CrownOutlined, TagOutlined, UserOutlined, FlagOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import IconLink from '@/components/common/icon-link'
import type { quizItem } from '@/models/quiz'

const QuizInfo: React.FC<{ data: quizItem }> = ({ data }) => {
  return (
    <div className="base-info">
      <Typography.Title level={3}>{data.quiz}</Typography.Title>
      <IconText icon={CrownOutlined} text={data.winner || '-'} title={`Winner: ${data.winner || 'Undecided'}`} />
      <IconLink icon={TagOutlined} text={data.topic} title={`Topic: ${data.topic}`} href={`/topic/${data.topic}`} />
      <IconLink icon={UserOutlined} text={data.creator} title={`Creator: ${data.creator}`} href={`/user/${data.creatorId}`} />
      <IconText icon={FlagOutlined} text={data.round} title={`Total Rounds: ${data.round}`} />
      <Typography.Paragraph
        type="secondary"
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        title={data.description}
      >{data.description}
      </Typography.Paragraph>
    </div>
  )
}

export default QuizInfo

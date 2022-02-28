import React from 'react'
import { Tabs } from 'antd'
import { TeamOutlined, SolutionOutlined } from '@ant-design/icons'
import MemberUserList from '@/components/member/member-user-list'
import ResultQuizList from '@/components/result/result-quiz-list'
import IconTab from '@/components/common/icon-tab'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'

type propsType = {
  memberData: memberItem[],
  resultData: resultItem[]
}

const TeamContent: React.FC<propsType> = (props) => {
  return (
    <Tabs defaultActiveKey="member" className="base-box">
      <Tabs.TabPane key="member" tab={<IconTab icon={TeamOutlined} text='Member' />} >
        <MemberUserList data={props.memberData} />
      </Tabs.TabPane>
      <Tabs.TabPane key="quiz" tab={<IconTab icon={SolutionOutlined} text='Quiz' />} >
        <ResultQuizList data={props.resultData} />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default TeamContent

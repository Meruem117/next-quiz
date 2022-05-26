import React from 'react'
import { Tabs } from 'antd'
import { TeamOutlined, SolutionOutlined, AuditOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import MemberUserList from '@/components/member/member-user-list'
import MemberApplyTable from '@/components/member/member-apply-table'
import ResultQuizList from '@/components/result/result-quiz-list'
import IconTab from '@/components/common/icon-tab'
import type { teamItem } from '@/models/team'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'

type propsType = {
  teamData: teamItem,
  memberData: memberItem[],
  memberApplyList: memberItem[],
  resultData: resultItem[]
}

const TeamContent: React.FC<propsType> = (props) => {
  const userState = useAppSelector(selectUser)
  const isLeader = props.teamData.leaderId === userState.id

  return (
    <Tabs defaultActiveKey="member" className="base-box">
      <Tabs.TabPane key="member" tab={<IconTab icon={TeamOutlined} text='Member' />} >
        <MemberUserList data={props.memberData} isLeader={isLeader} />
      </Tabs.TabPane>
      <Tabs.TabPane key="quiz" tab={<IconTab icon={SolutionOutlined} text='Quiz' />} >
        <ResultQuizList data={props.resultData} />
      </Tabs.TabPane>
      {
        isLeader ? (
          <Tabs.TabPane key="apply" tab={<IconTab icon={AuditOutlined} text='Apply' />} >
            <MemberApplyTable data={props.memberApplyList} />
          </Tabs.TabPane>
        ) : undefined
      }
    </Tabs>
  )
}

export default TeamContent

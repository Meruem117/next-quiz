import React, { ReactElement } from 'react'
import { Tabs } from 'antd'
import { TeamOutlined, SolutionOutlined, BookOutlined } from '@ant-design/icons'
import MemberTeamList from '@/components/member/member-team-list'
import ResultQuizList from '@/components/result/result-quiz-list'
import QuestionSimpleList from '@/components/question/question-simple-list'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'

type propsType = {
  memberData: memberItem[],
  resultData: resultItem[],
  questionData: questionItem[]
}

const UserContent: React.FC<propsType> = (props) => {
  const IconTab = ({ icon, text }: { icon: React.FC, text: string | number }): ReactElement => (
    <span>
      {React.createElement(icon)}
      {text}
    </span>
  )

  return (
    <Tabs defaultActiveKey="team" className="base-box">
      <Tabs.TabPane key="team" tab={<IconTab icon={TeamOutlined} text='Team' />} >
        <MemberTeamList data={props.memberData} />
      </Tabs.TabPane>
      <Tabs.TabPane key="quiz" tab={<IconTab icon={SolutionOutlined} text='Quiz' />} >
        <ResultQuizList data={props.resultData} />
      </Tabs.TabPane>
      <Tabs.TabPane key="question" tab={<IconTab icon={BookOutlined} text='Question' />} >
        <QuestionSimpleList data={props.questionData} />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default UserContent

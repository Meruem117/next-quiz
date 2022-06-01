import React from 'react'
import { Tabs } from 'antd'
import { TeamOutlined, SolutionOutlined, BookOutlined } from '@ant-design/icons'
import MemberTeamList from '@/components/member/member-team-list'
import ResultQuizList from '@/components/result/result-quiz-list'
import QuestionSimpleList from '@/components/question/question-simple-list'
import QuestionTable from '@/components/question/question-table'
import IconTab from '@/components/common/icon-tab'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'
import type { topicItem } from '@/models/topic'

type propsType = {
  memberList: memberItem[],
  resultList: resultItem[],
  questionList: questionItem[],
  topicList: topicItem[]
}

const UserContent: React.FC<propsType> = (props) => {
  return (
    <Tabs defaultActiveKey="team" className="base-box">
      <Tabs.TabPane key="team" tab={<IconTab icon={TeamOutlined} text='Team' />} >
        <MemberTeamList data={props.memberList} />
      </Tabs.TabPane>
      <Tabs.TabPane key="quiz" tab={<IconTab icon={SolutionOutlined} text='Quiz' />} >
        <ResultQuizList data={props.resultList} />
      </Tabs.TabPane>
      <Tabs.TabPane key="question" tab={<IconTab icon={BookOutlined} text='Question' />} >
        {/* <QuestionSimpleList data={props.questionList} list={props.topicList} /> */}
        <QuestionTable data={props.questionList} list={props.topicList} />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default UserContent

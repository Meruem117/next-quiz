import type { NextPage } from 'next'
import UserDetail from '@/components/user/user-detail'
import UserContent from '@/components/user/user-content'
import type { userItem } from '@/models/user'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'
import type { topicItem } from '@/models/topic'
import { getUserList, getUserById } from '@/services/user'
import { getTeamListByUserId } from '@/services/member'
import { getResultListByParticipantId } from '@/services/result'
import { getQuestionListByUpId } from '@/services/question'
import { getTopicList } from '@/services/topic'
import { IS_TEAM, PASS } from '@/constant'

type propsType = {
  userData: userItem,
  memberList: memberItem[],
  resultList: resultItem[],
  questionList: questionItem[],
  topicList: topicItem[]
}

type contextType = {
  params: {
    userId: number
  }
}

const UserDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <UserDetail data={props.userData} />
      <UserContent memberList={props.memberList} resultList={props.resultList} questionList={props.questionList} topicList={props.topicList} />
    </div>
  )
}

export async function getStaticPaths() {
  const userRes = await getUserList()
  const userList = userRes.data

  return {
    fallback: true,
    paths: userList.map(item => ({
      params: {
        userId: item.id.toString()
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const userId = context.params.userId
  const userRes = await getUserById(userId)
  const memberRes = await getTeamListByUserId(userId, PASS.PASS)
  const resultRes = await getResultListByParticipantId(userId, IS_TEAM.USER)
  const questionRes = await getQuestionListByUpId(userId)
  const topicRes = await getTopicList()

  return {
    props: {
      userData: userRes.data,
      memberList: memberRes.data,
      resultList: resultRes.data,
      questionList: questionRes.data,
      topicList: topicRes.data
    },
    revalidate: 3600
  }
}

export default UserDetailPage

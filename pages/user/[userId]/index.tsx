import type { NextPage } from 'next'
import UserDetail from '@/components/user/user-detail'
import UserContent from '@/components/user/user-content'
import type { userItem } from '@/models/user'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import type { questionItem } from '@/models/question'
import { getUserList, getUserById } from '@/services/user'
import { getTeamListByUserId } from '@/services/member'
import { getResultListByParticipantId } from '@/services/result'
import { getQuestionListByUpId } from '@/services/question'
import { IS_TEAM } from '@/constant'

type propsType = {
  userData: userItem,
  memberList: memberItem[],
  resultList: resultItem[],
  questionList: questionItem[]
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
      <UserContent memberData={props.memberList} resultData={props.resultList} questionData={props.questionList} />
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
  const memberRes = await getTeamListByUserId(userId)
  const resultRes = await getResultListByParticipantId(userId, IS_TEAM.USER)
  const questionRes = await getQuestionListByUpId(userId)

  return {
    props: {
      userData: userRes.data,
      memberList: memberRes.data,
      resultList: resultRes.data,
      questionList: questionRes.data
    },
    revalidate: 3600
  }
}

export default UserDetailPage

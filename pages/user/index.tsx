import type { NextPage } from 'next'
import UserDetail from '@/components/user/user-detail'
import UserContent from '@/components/user/user-content'
import type { userItem } from '@/models/user'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import { questionItem } from '@/models/question'
import { getUserById } from '@/services/user'
import { getTeamListByUserId } from '@/services/member'
import { getResultListByParticipantId } from '@/services/result'
import { getQuestionListByUpId } from '@/services/question'
import { IS_TEAM } from '@/constant'

type propsType = {
  userData: userItem,
  memberData: memberItem[],
  resultData: resultItem[],
  questionData: questionItem[]
}

type contextType = {
  query: {
    id: number
  }
}

const UserPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <UserDetail data={props.userData} />
      <UserContent memberData={props.memberData} resultData={props.resultData} questionData={props.questionData} />
    </div>
  )
}

export async function getServerSideProps(context: contextType) {
  const userId = context.query.id
  const userRes = await getUserById(userId)
  const memberRes = await getTeamListByUserId(userId)
  const resultRes = await getResultListByParticipantId(userId, IS_TEAM.USER)
  const questionRes = await getQuestionListByUpId(userId)

  return {
    props: {
      userData: userRes.data,
      memberData: memberRes.data,
      resultData: resultRes.data,
      questionData: questionRes.data
    }
  }
}

export default UserPage

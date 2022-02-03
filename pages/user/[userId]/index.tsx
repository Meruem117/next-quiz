import type { NextPage } from 'next'
import UserDetail from '@/components/user/user-detail'
import UserContent from '@/components/user/user-content'
import type { userItem } from '@/models/user'
import type { memberItem } from '@/models/member'
import { getUserById, getUserList } from '@/services/user'
import { getTeamListByUserId } from '@/services/member'

type propsType = {
  userData: userItem,
  memberData: memberItem[]
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
      <UserContent memberData={props.memberData} />
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

  return {
    props: {
      userData: userRes.data,
      memberData: memberRes.data
    },
    revalidate: 3600
  }
}

export default UserDetailPage

import type { NextPage } from 'next'
import TeamDetail from '@/components/team/team-detail'
import MemberUserList from '@/components/member/member-user-list'
import type { teamItem } from '@/models/team'
import type { memberItem } from '@/models/member'
import { getTeamList, getTeamById } from '@/services/team'
import { getUserListByTeamId } from '@/services/member'

type propsType = {
  teamData: teamItem,
  memberData: memberItem[]
}

type contextType = {
  params: {
    teamId: number
  }
}

const TeamDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-container">
      <TeamDetail data={props.teamData} />
      <MemberUserList data={props.memberData} />
    </div>
  )
}

export async function getStaticPaths() {
  const teamRes = await getTeamList()
  const teamList = teamRes.data

  return {
    fallback: false,
    paths: teamList.map(item => ({
      params: {
        teamId: item.id.toString()
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const teamId = context.params.teamId
  const teamRes = await getTeamById(teamId)
  const memberRes = await getUserListByTeamId(teamId)

  return {
    props: {
      teamData: teamRes.data,
      memberData: memberRes.data
    },
    revalidate: 3600
  }
}

export default TeamDetailPage

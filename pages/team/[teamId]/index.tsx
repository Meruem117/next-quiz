import type { NextPage } from 'next'
import TeamInfo from '@/components/team/team-info'
import TeamContent from '@/components/team/team-content'
import type { teamItem } from '@/models/team'
import type { memberItem } from '@/models/member'
import type { resultItem } from '@/models/result'
import { getTeamList, getTeamById } from '@/services/team'
import { getUserListByTeamId } from '@/services/member'
import { getResultListByParticipantId } from '@/services/result'
import { IS_TEAM } from '@/constant'

type propsType = {
  teamData: teamItem,
  memberList: memberItem[],
  resultList: resultItem[]
}

type contextType = {
  params: {
    teamId: number
  }
}

const TeamDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-x-container">
      <div style={{ width: '12.5%' }}>
        <TeamInfo data={props.teamData} />
      </div>
      <div className="w-1/3">
        <TeamContent memberData={props.memberList} resultData={props.resultList} />
      </div>
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
  const resultRes = await getResultListByParticipantId(teamId, IS_TEAM.TEAM)

  return {
    props: {
      teamData: teamRes.data,
      memberList: memberRes.data,
      resultList: resultRes.data
    },
    revalidate: 3600
  }
}

export default TeamDetailPage

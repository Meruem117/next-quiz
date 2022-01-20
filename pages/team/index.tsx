import type { NextPage } from 'next'
import ExploreNav from '@/components/common/explore-nav'
import TeamList from '@/components/team/team-list'
import type { teamItem } from '@/models/team'
import { getTeamList } from '@/services/team'

type propsType = {
  teamData: teamItem[]
}

const TeamPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-container">
      <ExploreNav select='team' />
      <TeamList data={props.teamData} />
    </div>
  )
}

export async function getStaticProps() {
  const teamRes = await getTeamList()

  return {
    props: {
      teamData: teamRes.data
    },
    revalidate: 3600
  }
}

export default TeamPage

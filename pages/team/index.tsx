import type { NextPage } from 'next'
import ExploreNav from '@/components/common/explore-nav'
import TeamList from '@/components/team/team-list'
import type { teamItem } from '@/models/team'
import { getTeamList } from '@/services/team'

type propsType = {
  teamList: teamItem[]
}

const TeamPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
      <ExploreNav select='team' />
      <TeamList data={props.teamList} />
    </div>
  )
}

export async function getStaticProps() {
  const teamRes = await getTeamList()

  return {
    props: {
      teamList: teamRes.data
    },
    revalidate: 3600
  }
}

export default TeamPage

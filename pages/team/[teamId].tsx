import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const TeamPage: NextPage = () => {
  const router = useRouter()
  const team = router.query.teamId

  return (
    <>
      <h1>{team}</h1>
    </>
  )
}

export default TeamPage

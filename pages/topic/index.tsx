import type { NextPage } from 'next'
import Link from 'next/link'
import type { topicItem } from '@/models/topic'

type propsType = {
  topicList: topicItem[]
}

const TopicPage: NextPage<propsType> = (props) => {
  return (
    <>
      <h1>About</h1>
      <Link href={'/team/a'}>To Team A</Link>
    </>
  )
}

export default TopicPage

import type { NextPage } from 'next'
import Link from 'next/link'

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>About</h1>
      <Link href={'/team/a'}>To Team A</Link>
    </>
  )
}

export default AboutPage

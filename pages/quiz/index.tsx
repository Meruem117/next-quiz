import type { NextPage } from 'next'
import Link from 'next/link'

const QuizPage: NextPage = () => {
  return (
    <>
      <h1>About</h1>
      <Link href={'/team/a'}>To Team A</Link>
    </>
  )
}

export default QuizPage

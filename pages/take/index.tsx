import type { NextPage } from 'next'

type propsType = {
}

const TakePage: NextPage<propsType> = (props) => {
  return (
    <div className="base-y-container">
    </div>
  )
}

export async function getStaticProps() {

  return {
    props: {
    },
    revalidate: 3600
  }
}

export default TakePage

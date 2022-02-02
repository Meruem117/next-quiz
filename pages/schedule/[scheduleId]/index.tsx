import type { NextPage } from 'next'
import ScheduleDetail from '@/components/schedule/schedule-detail'
import type { scheduleItem } from '@/models/schedule'
import { getScheduleList, getScheduleById } from '@/services/schedule'

type propsType = {
  scheduleData: scheduleItem
}

type contextType = {
  params: {
    scheduleId: number
  }
}

const ScheduleDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-x-container">
      <ScheduleDetail data={props.scheduleData} />
    </div>
  )
}

export async function getStaticPaths() {
  const scheduleRes = await getScheduleList()
  const scheduleList = scheduleRes.data

  return {
    fallback: false,
    paths: scheduleList.map(item => ({
      params: {
        scheduleId: item.id.toString()
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const scheduleId = context.params.scheduleId
  const scheduleRes = await getScheduleById(scheduleId)

  return {
    props: {
      scheduleData: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default ScheduleDetailPage

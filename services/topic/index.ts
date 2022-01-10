import { topicItem } from '@/models/topic'
import { responseItem, pageRequestItem } from '@/models/base'

export async function getTopicList(pageRequest: pageRequestItem): Promise<responseItem<topicItem[]>> {
  const response = await fetch('http://localhost:8080/topic/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pageRequest)
  })
  return response.json()
}
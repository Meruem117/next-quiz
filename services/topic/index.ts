import { responseItem } from '@/models/base'
import { topicItem } from '@/models/topic'

export async function getTopicList(): Promise<responseItem<topicItem[]>> {
  const response = await fetch('http://localhost:8080/topic/list')
  return response.json()
}
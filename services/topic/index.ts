import { responseItem } from '@/models/base'
import { topicItem } from '@/models/topic'
import { baseUrl } from '@/constant'

export async function getTopicList(): Promise<responseItem<topicItem[]>> {
  const response = await fetch(baseUrl + '/topic/list')
  return response.json()
}
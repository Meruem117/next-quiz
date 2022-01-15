import { responseItem, pageRequestItem, pageResponseItem } from '@/models/base'
import { topicItem } from '@/models/topic'
import { baseUrl } from '@/constant'
import { jsonToQuery } from '@/utils'

export async function getTopicList(): Promise<responseItem<topicItem[]>> {
  const response = await fetch(baseUrl + '/topic/list')
  return response.json()
}

export async function getTopicPages(pageRequest: pageRequestItem): Promise<pageResponseItem<topicItem[]>> {
  const response = await fetch(baseUrl + '/topic/list', {
    method: 'GET',
    body: jsonToQuery(pageRequest),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  return response.json()
}
import { responseItem } from '@/models/base'
import { questionItem } from '@/models/question'
import { baseUrl } from '@/constant'

export async function getQuestionListByTopic(topic: string): Promise<responseItem<questionItem[]>> {
  const response = await fetch(baseUrl + '/question/list?topic=' + topic)
  return response.json()
}
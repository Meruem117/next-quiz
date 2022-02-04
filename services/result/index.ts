import type { responseItem } from '@/models/base'
import type { resultItem } from '@/models/result'
import { baseUrl } from '@/constant'

export async function getUserResultListByUserId(userId: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + '/result/users?id=' + userId)
  return response.json()
}
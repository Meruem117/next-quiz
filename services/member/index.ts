import { responseItem } from '@/models/base'
import { memberItem } from '@/models/member'
import { baseUrl } from '@/constant'

export async function getTeamListByUserId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/team?id=' + id)
  return response.json()
}

export async function getUserListByTeamId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/user?id=' + id)
  return response.json()
}
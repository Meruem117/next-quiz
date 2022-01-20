import { responseItem } from '@/models/base'
import { teamItem } from '@/models/team'
import { baseUrl } from '@/constant'

export async function getTeamList(): Promise<responseItem<teamItem[]>> {
  const response = await fetch(baseUrl + '/team/list')
  return response.json()
}

export async function getTeamById(id: number): Promise<responseItem<teamItem>> {
  const response = await fetch(baseUrl + '/team/get?id=' + id)
  return response.json()
}
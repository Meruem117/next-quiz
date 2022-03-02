import type { responseItem } from '@/models/base'
import type { teamItem } from '@/models/team'
import { baseUrl } from '@/constant'

export async function getTeamById(id: number): Promise<responseItem<teamItem>> {
  const response = await fetch(baseUrl + '/team/get?id=' + id)
  return response.json()
}

export async function getTeamList(): Promise<responseItem<teamItem[]>> {
  const response = await fetch(baseUrl + '/team/list')
  return response.json()
}

export async function getTeamListByLeaderId(id: number): Promise<responseItem<teamItem[]>> {
  const response = await fetch(baseUrl + '/team/leader?id=' + id)
  return response.json()
}

export async function handleTeam(id: number): Promise<{ id: number }> {
  const response = await fetch('/api/team?id=' + id)
  return response.json()
}
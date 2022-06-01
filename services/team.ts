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

export async function createTeam(data: teamItem): Promise<responseItem<number>> {
  const response = await fetch(baseUrl + '/team/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleLeader(id: number): Promise<responseItem<teamItem[]>> {
  const response = await fetch('/api/team/leader?id=' + id)
  return response.json()
}

export async function handleCreate(data: teamItem): Promise<responseItem<number>> {
  const response = await fetch('/api/team/create', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
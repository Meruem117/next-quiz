import type { responseItem } from '@/models/base'
import type { questionItem, disableItem } from '@/models/question'
import { baseUrl } from '@/constant'

export async function getQuestionById(id: number): Promise<responseItem<questionItem>> {
  const response = await fetch(baseUrl + '/question/get?id=' + id)
  return response.json()
}

export async function getQuestionListByUpId(id: number): Promise<responseItem<questionItem>> {
  const response = await fetch(baseUrl + '/question/up?id=' + id)
  return response.json()
}

export async function getQuestionListByTopic(topic: string): Promise<responseItem<questionItem[]>> {
  const response = await fetch(baseUrl + '/question/list?topic=' + topic)
  return response.json()
}

export async function getQuestionListBySchedule(question: string): Promise<responseItem<questionItem[]>> {
  const response = await fetch(baseUrl + '/question/schedule?question=' + question)
  return response.json()
}

export async function uploadQuestion(data: questionItem): Promise<responseItem<number>> {
  const response = await fetch(baseUrl + '/question/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function disableQuestion(data: disableItem): Promise<responseItem<boolean>> {
  const response = await fetch(baseUrl + '/question/disable', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleUpload(data: questionItem): Promise<responseItem<number>> {
  const response = await fetch('/api/question/upload', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleDisable(data: disableItem): Promise<responseItem<boolean>> {
  const response = await fetch('/api/question/disable', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
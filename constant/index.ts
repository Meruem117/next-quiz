import type { BaseType } from 'antd/lib/typography/Base'

//* base
export const baseUrl = 'http://localhost:8080'

//* user
export const GENDER = {
  Female: 0,
  Male: 1
}
export const GENDER_TEXT = [
  'Female',
  'Male'
]
export const GENDER_AVATAR_SRC = [
  'https://joeschmoe.io/api/v1/female/random',
  'https://joeschmoe.io/api/v1/male/random',
  'https://joeschmoe.io/api/v1/random'
]

//* quiz
export const IS_TEAM = {
  USER: 0,
  TEAM: 1
}
export const IS_TEAM_TYPE: { text: string, color: string }[] = [
  { text: 'User', color: 'green' },
  { text: 'Team', color: 'blue' },
]

//* schedule
export const STATUS = {
  NOT_START: { value: 0, text: 'Not Start', color: 'magenta' },
  START: { value: 1, text: 'Start', color: 'green' },
  END: { value: 2, text: 'End', color: 'red' }
}
export const STATUS_TYPE: { text: string, color: string }[] = [
  { text: 'Not Start', color: 'magenta' },
  { text: 'Start', color: 'green' },
  { text: 'End', color: 'red' }
]

//* question
export const QUESTION = {
  MULTIPLE_CHOICE: 0,
  SINGLE_CHOICE: 1
}
export const QUESTION_TEXT = [
  'Multiple Choice',
  'Single Choice'
]
export const QUESTION_SELECT: { name: string, value: number }[] = [
  { name: 'Single Choice', value: 1 },
  { name: 'Multiple Choice', value: 0 }
]
export const PASS: { [key: string]: { name: string, type: BaseType } } = {
  '0': { name: 'Pending', type: 'secondary' },
  '1': { name: 'Pass', type: 'success' },
  '2': { name: 'Denied', type: 'danger' }
}

//* result
export const IS_TAKE = {
  NOT_TAKE: 0,
  TAKE: 1
}
export const IS_TAKE_TEXT = [
  'Not Take',
  'Taken'
]
export const IS_OUT = {
  PENDING: '0',
  NOT_OUT: '1',
  OUT: '2'
}

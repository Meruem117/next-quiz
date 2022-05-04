//* base
export const baseUrl = 'http://localhost:8080'

//* user
export const GENDER = {
  Female: 0,
  Male: 1
}
export const GENDER_TEXT: string[] = [
  'Female',
  'Male'
]
export const GENDER_AVATAR_SRC: string[] = [
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
export const QUESTION_TEXT: string[] = [
  'Multiple Choice',
  'Single Choice'
]

//* result
export const IS_TAKE = {
  NOT_TAKE: 0,
  TAKE: 1
}
export const IS_TAKE_TEXT: string[] = [
  'Not Take',
  'Taken'
]

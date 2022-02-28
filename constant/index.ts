//* base
export const baseUrl = 'http://localhost:8080'

//* user
export const GENDER = {
  Male: 1,
  Female: 0
}
export const GENDER_TEXT: string[] = [
  'Male',
  'Female'
]
export const GENDER_AVATAR_SRC: string[] = [
  'https://joeschmoe.io/api/v1/male/random',
  'https://joeschmoe.io/api/v1/female/random'
]

//* quiz
export const IS_TEAM = {
  TEAM: 1,
  USER: 0
}
export const IS_TEAM_TEXT: string[] = [
  'Team',
  'User'
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
  SINGLE_CHOICE: 1,
  MULTIPLE_CHOICE: 0
}
export const QUESTION_TEXT: string[] = [
  'Single Choice',
  'Multiple Choice'
]

//* result
export const IS_TAKE = {
  TAKE: 1,
  NOT_TAKE: 0
}
export const IS_TAKE_TEXT: string[] = [
  'Not Take',
  'Take'
]

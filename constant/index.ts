export const baseUrl = 'http://localhost:8080'

//* user
export const ROLE = {
  ROOT: 2,
  ADMIN: 1,
  USER: 0
}
export const ROLE_TYPE: { [key: number]: { text: string, color: string } } = {
  0: { text: 'User', color: 'cyan' },
  1: { text: 'Admin', color: 'green' },
  2: { text: 'Root', color: 'volcano' }
}
export const GENDER = {
  Male: 1,
  Female: 0
}
export const GENDER_TEXT: { [key: number]: string } = {
  1: 'Male',
  0: 'Female'
}
export const GENDER_AVATAR_SRC: { [key: number]: string } = {
  1: 'https://joeschmoe.io/api/v1/male/random',
  0: 'https://joeschmoe.io/api/v1/female/random'
}

//* quiz
export const IS_TEAM = {
  TEAM: 1,
  USER: 0
}
export const IS_TEAM_TEXT: { [key: number]: string } = {
  1: 'Team',
  0: 'User'
}

//* schedule
export const SCHEDULE = {
  START: 1,
  NOT_START: 0,
  END: 1,
  NOT_END: 0
}
export const SCHEDULE_STATUS = {
  START: { text: 'Start', color: 'green' },
  REMAIN: { text: 'Remain', color: 'magenta' },
  END: { text: 'End', color: 'red' }
}

//* question
export const QUESTION = {
  SINGLE_CHOICE: 1,
  MULTIPLE_CHOICE: 0
}
export const QUESTION_TEXT: { [key: number]: string } = {
  1: 'Single Choice',
  0: 'Multiple Choice'
}

//* result
export const STATUS: { [key: number]: { text: string, color: string } } = {
  0: { text: 'Remain', color: 'magenta' },
  1: { text: 'Start', color: 'green' },
  2: { text: 'End', color: 'red' }
}
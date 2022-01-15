export const baseUrl = 'http://localhost:8080'
export const PAGE_SIZE = 10
//* user
export const ROLE = {
  ROOT: 2,
  ADMIN: 1,
  USER: 0
}
//* quiz
export const IS_TEAM_TYPE = {
  TEAM: 1,
  USER: 0
}
export const IS_TEAM_TYPE_TEXT: { [key: number]: string } = {
  1: 'team',
  0: 'user'
}
//* schedule
export const SCHEDULE_TYPE = {
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
export const QUESTION_TYPE = {
  SINGLE_CHOICE: 1,
  MULTIPLE_CHOICE: 0
}
export const QUESTION_TYPE_TEXT: { [key: number]: string } = {
  1: 'Single Choice',
  0: 'Multiple Choice'
}
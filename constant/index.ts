export const baseUrl = 'http://localhost:8080'
export const PAGE_SIZE = 10
//* user
export const ROLE = {
  ROOT: 2,
  ADMIN: 1,
  USER: 0
}
//* question
export const QUESTION_TYPE = {
  SINGLE_CHOICE: 1,
  MULTIPLE_CHOICE: 0
}
export const QUESTION_TYPE_TEXT: { [key: number]: string } = {
  1: 'single choice',
  0: 'multiple choice'
}
//* schedule
export const CONDUCTING_QUIZ_NUMBER = 3
//* quiz
export const IS_TEAM_TYPE = {
  TEAM: 1,
  USER: 0
}
export const IS_TEAM_TYPE_TEXT: { [key: number]: string } = {
  1: 'team',
  0: 'user'
}
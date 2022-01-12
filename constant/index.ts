export const baseUrl: string = 'http://localhost:8080'
export const PAGE_SIZE: number = 10
//* user
export const ROLE: { [key: string]: number } = {
  ROOT: 2,
  ADMIN: 1,
  USER: 0
}
//* question
export const QUESTION_TYPE: { [key: string]: number } = {
  SINGLE_CHOICE: 1,
  MULTIPLE_CHOICE: 0
}
export const QUESTION_TYPE_TEXT: { [key: number]: string } = {
  1: 'single choice',
  0: 'multiple choice'
}
//* schedule
export const CONDUCTING_QUIZ_NUMBER: number = 3
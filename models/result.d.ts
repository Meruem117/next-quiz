export interface resultItem {
  id: number,
  quizId: number,
  quizName: string,
  round: number,
  scheduleId: number,
  participantId: number,
  participantName: string,
  isTeam: number,
  status: number,
  isTake: number,
  correct: number,
  correctRate: number,
  answers: string,
  errors: string,
  isOut: string,
  takeTime: string,
  createTime: string
}

export interface attendItem {
  scheduleId: number,
  participantId: number,
  isTeam: number
}
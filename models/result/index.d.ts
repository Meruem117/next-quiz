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
  correct: number,
  correctRate: number,
  errorList: string,
  isOut: number
}
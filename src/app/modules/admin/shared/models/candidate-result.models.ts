export interface CandidateResultResponse {
  statusCode: number
  isSuccess: boolean
  response: CandidateResult[]
  message: string
  exceptionMessage: string
}

export interface CandidateResult {
  id: number
  candidateExamId: number
  userId: string
  examDate: string
  fullname: string
  totalScore: number
  obtainedScore: number
}

export interface ResultDetailsResponse {
  statusCode: number
  isSuccess: boolean
  response: ResultDetails[]
  message: string
  exceptionMessage: string
}

export interface ResultDetails {
  id: number
  candidateExamId: number
  questionId: number
  selectedAnswerId: number
  userSelectedAnswer: string
  correctAnswer: string
  technology: string
  question: string
  candiateExamUserId: number
  isCorrect: boolean
  marks: number
}

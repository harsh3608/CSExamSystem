import { Question } from "src/app/modules/shared-module/models/question.model"

export interface ExamResponse {
  statusCode: number
  isSuccess: boolean
  response: CandidateExam[]
  message: string
  exceptionMessage: string
}

export interface CandidateExam {
  id: number
  candidateExamId: number
  questionId: number
  selectedAnswerId: number
  userSelectedAnswer: string
  correctAnswer: string
  technology: string
  question: Question,
  candiateExamUserId: number
}

export interface ExamUserStatus {
  id: number
  selectedAnswerId: number
  correctAnswer: string
  statusId: number
  candidateExamUserId: number
}

export interface ExamUserStatusResponse {
  statusCode: number
  isSuccess: boolean
  response: string
  message: string
  exceptionMessage: string
}

export interface SubmitExamResponse {
  statusCode: number,
  isSuccess: boolean,
  response: string,
  message: string,
  exceptionMessage: string
}

//side panel question status
export interface Status {
  index: number,
  checked: boolean,
  id: number,
  optionId: number,
  selected: string,
  candiateExamUserId: number,
}

export interface SelectedAnswer {
  id: number,
  optionId: number,
  selected: string,
  candiateExamUserId: number,
}

export interface FinishExamResponse {
  statusCode: number
  isSuccess: boolean
  response: Result
  message: string
  exceptionMessage: string
}

export interface Result {
  createdBy: string
  createdOn: string
  modifiedBy: string
  lastModifiedOn: string
  id: number
  userId: string
  candidateExamId: number
  totalScore: number
  obtainedScore: number
  examDate: string
}

export interface ExamTimeResponse {
  statusCode: number
  isSuccess: boolean
  response: string
  message: string
  exceptionMessage: string
}

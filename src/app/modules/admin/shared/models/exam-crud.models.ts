export interface Exam{
  createdBy?: string,
  createdOn?: string,
  modifiedBy?: string,
  lastModifiedOn?: string,
  id?: number,
  examDate: string,
  ipAddress?: string,
  location?: string,
  statusId: number,
  userList: string[],
  technologies: number[]
}

export interface ExamReturnResponse {
  statusCode: number,
  isSuccess: boolean,
  response: Exam,
  message: string,
  exceptionMessage: string
}

export interface RescheduleCandidateExamUserResponse {
  statusCode: number
  isSuccess: boolean
  response: RescheduleCandidateExamUser
  message: string
  exceptionMessage: string
}

export interface RescheduleCandidateExamUser {
  createdBy: string
  createdOn: string
  modifiedBy: string
  lastModifiedOn: string
  id: number
  examDate: string
  ipAddress: string
  location: string
  statusId: number
  userList: string[]
  technologies: number[]
  previousCandidateExamId: number
  userId: string
}

export interface RescheduleCandidateExam {
  id: number
  examDate: string
  technologies: number[]
}

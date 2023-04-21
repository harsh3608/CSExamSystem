export interface ScheduleResponse {
  statusCode: number
  isSuccess: boolean
  response: ScheduleExams[]
  message: string
  exceptionMessage: string
}

export interface ScheduleExams {
  id: number
  examDate: string
  presentCandidates: PresentCandidate[]
  absentCandidates: AbsentCandidate[]
  statusId: number
  status: string
}

export interface PresentCandidate {
  id: string
  fullname: string
  statusId: number
  status: string
}

export interface AbsentCandidate {
  id: string
  fullname: string
  statusId: number
  status: string
}

export interface CandidateDialogData {
  candidates :PresentCandidate[],
  candidateExamId: number
}

export interface RescheduleExamDialogData {
  candidateExamId: number,
  userId: string,
  username: string
}


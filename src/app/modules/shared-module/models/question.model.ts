export interface Question {
  createdBy: string
  createdOn: string
  modifiedBy: string
  lastModifiedOn: string
  id: number
  technologyId: number
  experienceLevelId: number
  questionName: string
  marks: number
  timeSlot: number
  isActive: boolean
  options: Option[]
  isActiveVM?: string
  experienceLevelVM?: string
  technologyVM?: string
}

export interface Option {
  id: number
  questionId: number
  questionOptionName: string
  questionLabelOption: string
  createdBy: string
  createdOn: string
  modifiedBy: string
  lastModifiedOn: string
  correctAnswer: boolean
}

export interface QuestionsResponse {
  statusCode: number,
  isSuccess: boolean,
  response: Question[],
  message: string,
  exceptionMessage: string
}

export interface QuestionReturnResponse {
  statusCode: number,
  isSuccess: boolean,
  response: string,
  message: string,
  exceptionMessage: string
}

export interface QuesByIdResponse {
  statusCode: number,
  isSuccess: boolean,
  response: Question,
  message: string,
  exceptionMessage: string
}

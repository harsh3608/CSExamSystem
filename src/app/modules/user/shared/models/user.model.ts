export interface User {
  userName: string
  email: string
  firstName: string
  lastName: string
  countryCode: string
  phoneNumber: string
  mobileNumber: string
  address1: string
  address2: string
  city: string
  state: string
  country: string
  postalCode: string
  gender: string
  password: string
  isAdmin: boolean
}

export interface UserLogin{
  email: string,
  password: string
}

export interface Response{
  token: string,
  userId: string,
  fullName: string,
  userRole: string,
  email: string
}

export interface ReturnResponse{
  statusCode: number,
  isSuccess: boolean,
  response: Response,
  message: string,
  exceptionMessage: string
}

export interface UserAddReturnResponse{
  statusCode: number,
  isSuccess: boolean,
  response: string,
  message: string,
  exceptionMessage: string
}

export interface CandidatesReturnResponse {
  statusCode: number
  isSuccess: boolean
  response: Candidate[]
  message: string
  exceptionMessage: string
}

export interface Candidate {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
}

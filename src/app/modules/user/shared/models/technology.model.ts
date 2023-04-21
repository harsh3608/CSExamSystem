export interface Technology {
  id: number,
  technologyName: string,
  isActive: boolean
}

export interface TechnologyStack{
  statusCode: number,
  isSuccess: boolean,
  response: Technology[],
  message: string,
  exceptionMessage: string
}

export interface DialogData{
  id: number,
  technologyName: string

}

export interface TechnologyResponse{
  statusCode: number,
  isSuccess: boolean,
  response: Technology,
  message: string,
  exceptionMessage: string
}

// export type LoginRequest = { studentPassword: string; studentEmail: string }

export type { LoginRequest } from '../../forms/login.form'

export type PlacementType = {
  placementId: number
  branch: ('CSE' | 'ECE' | 'CIVIL' | 'MECH')[]
  eligibilityCritarias: string[]
  applicationLink: string
  lastDateToApply: string
  companyDetails: {
    companyName: string
    logo: string
    salary: number
    description?: string
  }
}

export type GetAllPlacements = {
  data: PlacementType[]
  total: number
  page: number
  limit: number
  hasNext: boolean
  hasPrevious: boolean
}

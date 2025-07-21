export type PlacementType = {
  placementId: number
  branch: ("CSE" | "ECE" | "CIVIL" | "MECH")[]
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

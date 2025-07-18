export interface StudentsDetails {
  studentid: number
  studentName: string
  studentPassword: string
  studentEmail: string
}

export type Auth_RequestBody = Pick<
  StudentsDetails,
  "studentEmail" | "studentPassword"
>

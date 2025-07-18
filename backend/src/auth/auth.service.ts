import { Injectable, UnauthorizedException } from "@nestjs/common"
import { Auth_RequestBody } from "./index.types"
import { DummyStudentDetails } from "./students.dummyData"

@Injectable()
export class AuthService {
  signinService(body: Auth_RequestBody) {
    const { studentEmail, studentPassword } = body
    const student = DummyStudentDetails.find(
      (i) => i.studentEmail === studentEmail
    )
    if (student === undefined)
      throw new UnauthorizedException(
        `Incorrect Credential, Please Retry with valid credentials`
      )

    if (student.studentPassword !== studentPassword) {
      throw new UnauthorizedException(
        `Incorrect Credential, Please Retry with valid credentials`
      )
    }
    return {
      message: "Authentication Successfull",
      token: student.studentid,
    }
  }
}

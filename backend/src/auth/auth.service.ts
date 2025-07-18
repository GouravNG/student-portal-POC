import { Injectable } from "@nestjs/common"

@Injectable()
export class AuthService {
  signinService() {
    return { message: "Login Success" }
  }
}

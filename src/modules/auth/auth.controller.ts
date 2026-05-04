import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './DTOs/RegisterDto';
import { LoginDto } from './DTOs/LoginDto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.auth.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.auth.login(body.email, body.password);
  }
}
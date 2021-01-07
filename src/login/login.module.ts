import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { LoginResolver } from './login.resolver';

@Module({
  imports: [AuthModule],
  providers: [LoginResolver],
})
export class LoginModule {}

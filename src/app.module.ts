import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { AdminModule } from './modules/admin/admin.module';
@Module({
  imports: [PrismaModule, AuthModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

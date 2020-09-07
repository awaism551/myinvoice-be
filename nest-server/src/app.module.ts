import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { categoriesModule } from './categories/categories.module';

@Module({
  imports: [categoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

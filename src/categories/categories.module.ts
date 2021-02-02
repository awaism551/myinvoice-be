import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CategoryService } from './categories.service';
import { CategoryResolver } from './categories.resolver';

@Module({
  imports: [
    SequelizeModule.forFeature([Category])
  ],
  providers: [CategoryService, CategoryResolver],
})
export class CategoriesModule {}

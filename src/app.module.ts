import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './categories/categories.model';
import { CategoriesModule } from './categories/categories.module';
import { Item } from './items/items.model';
import { ItemsModule } from './items/items.module';

const dbConnection: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'myinvoice',
  models: [Category, Item],
};

@Module({
  imports: [
    SequelizeModule.forRoot(dbConnection),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types.ts'),
      },
    }),
    CategoriesModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

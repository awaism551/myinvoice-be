import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Category } from './categories/categories.model';
import { CategoriesModule } from './categories/categories.module';
import { Item } from './items/items.model';
import { ItemsModule } from './items/items.module';
import { LoginModule } from './login/login.module';
import { RolesGuard } from './roles/roles.guard';
import { Role } from './roles/roles.model';
import { RolesModule } from './roles/roles.module';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';

const dbConnection: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'myinvoice',
  models: [Category, Item, Role, User],
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
    RolesModule,
    UsersModule,
    AuthModule,
    LoginModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

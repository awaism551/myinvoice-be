import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
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

// const dbConnection: SequelizeModuleOptions = {
//   dialect: 'mysql',
//   host: process.env.host,
//   port: (process.env.dbPort as unknown) as number,
//   username: process.env.username,
//   password: process.env.password,
//   database: process.env.database,
//   models: [Category, Item, Role, User],
// };

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        models: [Category, Item, Role, User],
      }),
      inject: [ConfigService],
    }),
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
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

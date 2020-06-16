import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/nest'),
		PlayersModule
	],
	controllers: [
		AppController
	],
	providers: [
		AppService
	],
})
export class AppModule { }

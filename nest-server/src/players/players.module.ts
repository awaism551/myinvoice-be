import { Module } from '@nestjs/common';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerSchema } from 'src/schemas/player.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Player', schema: PlayerSchema }
		])
	],
	controllers: [
		PlayerController
	],
	providers: [
		PlayerService
	]
})
export class PlayersModule {

}

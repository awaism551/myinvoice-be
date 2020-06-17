import { Module } from '@nestjs/common';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';

@Module({
	imports: [
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

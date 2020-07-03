import { Controller, Get, Post, Param, Patch, Body, Put, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {

	constructor(
		private playerService: PlayerService
	) {
		console.log('player controller');
	}

	@Get('getAll')
	getPlayers() {
		// return 'player::getAll function';
		return this.playerService.getPlayers();
	}

	@Get('get/:id')
	getSinglePlayer(
		@Param('id') id: string
	) {
		// return 'player::get single player fun';
		return this.playerService.getSinglePlayer(id);
	}

	@Post('create')
	async createPlayer(
		@Body('name') name: string,
		@Body('role') role: string
	) {
		const newPlayerId = await this.playerService.createPlayer(name, role);
		return newPlayerId;
	}

	@Patch('update/:id')
	async updatePlayer(
		@Param('id') playerId: string,
		@Body('name') name: string,
		@Body('role') role: string,
	) {
		// await this.playerService.updatePlayer(playerId, name, role);
		// return "updated";
	}

	@Delete('remove/:id')
	async removePlayer(@Param('id') playerId: string) {
		// await this.playerService.removePlayer(playerId);
		// return "removed";
	}

}

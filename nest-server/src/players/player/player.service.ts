import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerInterface } from './player.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlayerService {

	constructor(@InjectModel('Player') private readonly playerModel: Model<PlayerInterface>) { }

	async createPlayer(name, role): Promise<PlayerInterface> {
		const newPlayer = new this.playerModel({
			name: name,
			role: role
		});
		const result = await newPlayer.save();
		return result._id;
	}

	// private items = new Array<PlayerInterface>(
	// 	{ id: 1, name: "Ter Stegen", role: "Goalkeeper" },
	// 	{ id: 3, name: "Piqué", role: "Defender" },
	// 	{ id: 4, name: "I. Rakitic", role: "Midfielder" },
	// 	{ id: 5, name: "Sergio", role: "Midfielder" },
	// 	{ id: 6, name: "Denis Suárez", role: "Midfielder" },
	// 	{ id: 7, name: "Arda", role: "Midfielder" },
	// 	{ id: 8, name: "A. Iniesta", role: "Midfielder" },
	// 	{ id: 9, name: "Suárez", role: "Forward" },
	// 	{ id: 10, name: "Messi", role: "Forward" },
	// 	{ id: 11, name: "Neymar", role: "Forward" },
	// 	{ id: 12, name: "Rafinha", role: "Midfielder" },
	// 	{ id: 13, name: "Cillessen", role: "Goalkeeper" },
	// 	{ id: 14, name: "Mascherano", role: "Defender" },
	// 	{ id: 17, name: "Paco Alcácer", role: "Forward" },
	// 	{ id: 18, name: "Jordi Alba", role: "Defender" },
	// 	{ id: 19, name: "Digne", role: "Defender" },
	// 	{ id: 20, name: "Sergi Roberto", role: "Midfielder" },
	// 	{ id: 21, name: "André Gomes", role: "Midfielder" },
	// 	{ id: 22, name: "Aleix Vidal", role: "Midfielder" },
	// 	{ id: 23, name: "Umtiti", role: "Defender" },
	// 	{ id: 24, name: "Mathieu", role: "Defender" },
	// 	{ id: 25, name: "Masip", role: "Goalkeeper" }
	// );

	async getPlayers(): Promise<PlayerInterface[]> {
		const players = await this.playerModel.find().exec();
		return players;
	}

	async getSinglePlayer(id: string): Promise<PlayerInterface> {
		let player;
		try {
			player = await this.playerModel.findById(id).exec();
		} catch (error) {
			throw new NotFoundException('Player not found');
		}
		if (!player) {
			throw new NotFoundException('Player not found');
		}
		return player;
	}

	async updatePlayer(
		playerId: string,
		name: string,
		role: string
	) {
		const player = await this.getSinglePlayer(playerId);
		player.name = name;
		player.role = role;
		player.save();
	}

	async removePlayer(playerId: string) {
		const result = await this.playerModel.deleteOne({ _id: playerId }).exec();
		if (result.n === 0) {
			throw new NotFoundException('Could not find player.');
		}
	}
}


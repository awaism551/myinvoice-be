import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerInterface } from './player.interface';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
const fetch = require("node-fetch");

@Injectable()
export class PlayerService {

	// constructor(@InjectModel('Player') private readonly playerModel: Model<PlayerInterface>) { }

	// async createPlayer(name, role): Promise<PlayerInterface> {
	// 	const newPlayer = new this.playerModel({
	// 		name: name,
	// 		role: role
	// 	});
	// 	const result = await newPlayer.save();
	// 	return result._id;
	// }

	async getPlayers() {

		// const players = await this.playerModel.find().exec();
		// return players;

		const projectID = 'nestjs-firebasefunctions';
		const key = 'AIzaSyCNEHEAglO4h1aCqljJ2MIWezTAc3G1Oms';
		const doc = 'players/jJT2S65Xi46JHo8IhhQt';
		const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}?key=${key}`
		// Use fetch to request the API information
		let res = await fetch(url)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				return json;
			});
		return res;
	}

	// async getSinglePlayer(id: string): Promise<PlayerInterface> {
	// 	let player;
	// 	try {
	// 		player = await this.playerModel.findById(id).exec();
	// 	} catch (error) {
	// 		throw new NotFoundException('Player not found');
	// 	}
	// 	if (!player) {
	// 		throw new NotFoundException('Player not found');
	// 	}
	// 	return player;
	// }

	// async updatePlayer(
	// 	playerId: string,
	// 	name: string,
	// 	role: string
	// ) {
	// 	const player = await this.getSinglePlayer(playerId);
	// 	player.name = name;
	// 	player.role = role;
	// 	player.save();
	// }

	// async removePlayer(playerId: string) {
	// 	const result = await this.playerModel.deleteOne({ _id: playerId }).exec();
	// 	if (result.n === 0) {
	// 		throw new NotFoundException('Could not find player.');
	// 	}
	// }

}


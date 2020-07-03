import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerInterface } from './player.interface';
import { database as db } from 'src';
import { firebaseConfig } from 'firebase-functions';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// const fetch = require("node-fetch");
@Injectable()
export class PlayerService {

	// constructor(@InjectModel('Player') private readonly playerModel: Model<PlayerInterface>) { }

	collection;

	constructor() {
		// this.getCollectionRef();
	}

	async getCollectionRef() {
	}

	async createPlayer(name, role) {

		this.collection = await db.collection('players');
		console.log('create player fun');
		this.collection.add(
			{
				name: name,
				role: role
			}
		)
			.then(documentReference => {
				console.log(`Added document with name: ${documentReference.id}`);
				return documentReference.id;
			})
			.catch(error => {
				console.log('error::', error);
			});

		// let collectionRef = firestore.collection('col');
		// const newPlayer = new this.playerModel({
		// 	name: name,
		// 	role: role
		// });
		// const result = await newPlayer.save();
		// return result._id;
	}

	async getPlayers() {

		// const players = await this.playerModel.find().exec();
		// return players;

		// const projectID = 'nestjs-firebasefunctions';
		// const key = 'AIzaSyCNEHEAglO4h1aCqljJ2MIWezTAc3G1Oms';
		// const doc = 'players/PukkOtkUlV0eoXc4oona';
		// const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}?key=${key}`
		// // Use fetch to request the API information
		// let res = await fetch(url)
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		console.log(json);
		// 		return json;
		// 	});
		// return res;
		// console.log('get players');

		this.collection = await db.collection('players');
		let players = await this.collection.get()
			.then((snapshot) => {
				let players = [];
				snapshot.forEach(doc => {
					// console.log(doc.id, '=>', doc.data());
					players.push(doc.data());
				});
				// console.log('player1s::', players);
				return players;
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
		// console.log('players2::', players);

		return players;
	}

	async getSinglePlayer(id: string) {

		this.collection = await db.collection('players');
		let player;
		try {
			player = await this.collection.doc(id).get()
				.then((docRef) => {
					console.log(docRef.data());
					return docRef.data();
				})
				.catch((error) => {
					console.log('error getting doc::', error);
				});
			// const data = this.collection.docs.map(doc => doc.data());
			// player = await this.playerModel.findById(id).exec();
		} catch (error) {
			throw new NotFoundException('Player not found');
		}
		if (!player) {
			throw new NotFoundException('Player not found');
		}
		return player;
	}

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


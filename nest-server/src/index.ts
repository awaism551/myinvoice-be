import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const server = express();
const firebaseApp = admin.initializeApp();
const database = firebaseApp.firestore();

database.settings({
	ignoreUndefinedProperties: true
});

export const createNestServer = async (expressInstance) => {
	const app = await NestFactory.create(
		AppModule,
		new ExpressAdapter(expressInstance),
	);

	return app.init();
};

createNestServer(server)
	.then(v => console.log('Nest Ready'))
	.catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
export {
	database
};
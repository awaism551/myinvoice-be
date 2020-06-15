import * as mongoose from 'mongoose';

export interface PlayerInterface extends mongoose.Document {
	name: string,
	role: string
}
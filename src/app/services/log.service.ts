import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	logs: Log[];

	constructor() {
		this.logs = [
			{
				id: '1',
				text: 'Generated components',
				date: new Date('3/10/2017 12:54:23')
			},
			{
				id: '2',
				text: 'Added Bootstrap',
				date: new Date('4/06/2016 12:54:23')
			},
			{
				id: '3',
				text: 'Added Login',
				date: new Date('8/03/2018 12:54:23')
			}
		];
	}

	getLogs() {
		return this.logs;
	}
}

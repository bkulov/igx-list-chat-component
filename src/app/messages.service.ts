import { Injectable } from '@angular/core';

export interface IMessage {
    authorId: number,
    timestamp: Date,
    message: string
}

@Injectable({
    providedIn: 'root'
})
export class MessagesService {

    private _mockMessages: IMessage[] = [
        {
            authorId: 1,
            timestamp: new Date(2018, 9, 4, 15, 0),
            message: 'Hi guys'
        },
        {
            authorId: 1,
            timestamp: new Date(2018, 9, 4, 15, 1),
            message: 'How are you?'
        },
        {
            authorId: 2,
            timestamp: new Date(2018, 9, 4, 15, 3),
            message: 'Hi dude'
        },
        {
            authorId: 2,
            timestamp: new Date(2018, 9, 4, 15, 3),
            message: 'I\'m fine. Thank you!'
        },
        {
            authorId: 2,
            timestamp: new Date(2018, 9, 4, 15, 3),
            message: 'I hope you too?'
        },
        {
            authorId: 4,
            timestamp: new Date(2018, 9, 4, 15, 10),
            message: 'Hello'
        },
        {
            authorId: 4,
            timestamp: new Date(2018, 9, 4, 15, 10),
            message: 'I\'m Lisa'
        },
        {
            authorId: 4,
            timestamp: new Date(2018, 9, 4, 15, 10),
            message: 'and I just joined the company'
        },
        {
            authorId: 5,
            timestamp: new Date(2018, 9, 4, 15, 12),
            message: 'Hi Lisa'
        },
        {
            authorId: 5,
            timestamp: new Date(2018, 9, 4, 15, 13),
            message: 'Welcome to the party :)'
        }
    ];

    constructor() { }

    public getMessages() : IMessage[] {
        return this._mockMessages;
    }
}

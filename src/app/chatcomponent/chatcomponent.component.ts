import { Component, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';

interface IContact {
    id: number,
    name: string,
    phone: string,
    photo: string
}

interface IMessage {
    authorId: number,
    timestamp: Date,
    message: string
}

@Component({
    selector: 'app-chatcomponent',
    templateUrl: './chatcomponent.component.html',
    styleUrls: ['./chatcomponent.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatComponentComponent {
    public contacts : IContact[] = [
        {
            id: 1,
            name: 'Terrance Orta',
            phone: '770-504-2217',
            photo: 'https://randomuser.me/api/portraits/men/27.jpg',

        },
        {
            id: 2,
            name: 'Richard Mahoney',
            phone: '423-676-2869',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 3,
            name: 'Donna Price',
            phone: '859-496-2817',
            photo: 'https://randomuser.me/api/portraits/women/50.jpg'
        },
        {
            id: 4,
            name: 'Lisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg'
        },
        {
            id: 5,
            name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'https://randomuser.me/api/portraits/women/67.jpg'
        }
    ];

    public messages : IMessage[] = [
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

    @ViewChild('myMessage') myMessageTemplate : TemplateRef<any>;
    @ViewChild('othersMessage') othersMessageTemplate : TemplateRef<any>;

    private _myId : number = 4;

    constructor() { }

    getMessageTemplate(message : IMessage) : TemplateRef<any> {
        if (message.authorId === this._myId) {
            return this.myMessageTemplate;
        }

        return this.othersMessageTemplate;
    }

    isFirstMessage(messageIndex : number) : boolean {
        if (messageIndex === 0) {
            return true;
        }

        if (messageIndex >= this.messages.length) {
            return false;
        }

        const currentMessage = this.messages[messageIndex];
        const previousMessage = this.messages[messageIndex-1];

        return currentMessage.authorId !== previousMessage.authorId;
    }

    getContact(id : number) : IContact {
        return this.contacts.find(c => c.id === id);
    }
}

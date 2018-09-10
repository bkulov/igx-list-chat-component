import { Component, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { IContact, ContactsService } from '../contacts.service';
import { IMessage, MessagesService } from '../messages.service';

@Component({
    selector: 'app-chatcomponent',
    templateUrl: './chatcomponent.component.html',
    styleUrls: ['./chatcomponent.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatComponentComponent {

    @ViewChild('myMessage') myMessageTemplate : TemplateRef<any>;
    @ViewChild('othersMessage') othersMessageTemplate : TemplateRef<any>;

    private _myId : number = 4;

    constructor(public messagesService: MessagesService, private _contactsService: ContactsService) { }

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

        const messages = this.messagesService.getMessages();
        if (messageIndex >= messages.length) {
            return false;
        }

        const currentMessage = messages[messageIndex];
        const previousMessage = messages[messageIndex-1];

        return currentMessage.authorId !== previousMessage.authorId;
    }

    getContact(id : number) : IContact {
        return this._contactsService.getMockContacts().find(c => c.id === id);
    }
}

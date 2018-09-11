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

    public message : string;

    @ViewChild('myMessage') myMessageTemplate : TemplateRef<any>;
    @ViewChild('othersMessage') othersMessageTemplate : TemplateRef<any>;

    private _myId : number = 4;

    constructor(public messagesService: MessagesService, public contactsService: ContactsService) { }

    public getMessageTemplate(message : IMessage) : TemplateRef<any> {
        if (message.authorId === this._myId) {
            return this.myMessageTemplate;
        }

        return this.othersMessageTemplate;
    }

    public isFirstMessage(messageIndex : number) : boolean {
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

    public onMessageKeypress(event) {
        if (event.key === "Enter") {
            this._addMessage(this.message);
            this.message = null;
        }
    }

    private _addMessage(message : string) {
        if (message) {
            const messageInstance : IMessage = {
                authorId: this._myId,
                timestamp: new Date(Date.now()),
                message: message
            };
            this.messagesService.addMessage(messageInstance);
        }
    }
}

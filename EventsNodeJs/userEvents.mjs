import * as Events from 'events';
export class UserEvents extends Events.EventEmitter{
    // Event
    createPost(content){
        console.log('Post is created');
        this.emit('PostCreated');
    }
}
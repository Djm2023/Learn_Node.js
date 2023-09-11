import { UserEvents } from "./userEvents.mjs";

const UserEvent = new UserEvents();

function saveToDatabase(){
    console.log('Saving the post to Database');
}
function sendNotification(){
    console.log('Sending Notifiaction');
}
function UpdateTimeline(){
    console.log('Update Timeline');
}

UserEvent.addListener('PostCreated' , saveToDatabase);
UserEvent.addListener('PostCreated' , sendNotification);
UserEvent.addListener('PostCreated' , UpdateTimeline);

UserEvent.createPost("This is my First Post");
// pewarisan

class mailService {
    constructor (sender) {
        this.sender = sender;
    }


    sendMessage(message , receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// subclass
class WhatsaapService extends mailService {
 sendBroadcastMessage (message , receivers) {
    for (const receiver of receivers){
        this.sendMessage(message , receiver);
    }
 }
}

class EmailService extends mailService {
 sendDelayMessage (message , receiver , delay ){
    setTimeout(() => {
        this.sendMessage(message , receiver)
    } , delay)
 }
}

const Whatsaap = new WhatsaapService ('+62085156390652');
const email = new EmailService ('juliansa837@gmail.com')
// overriding 
class MailService {
    constructor (sender) {
        this.sender = sender;
    }

    sendMessage(message , receiver) {
        console.log(`${this.sender} ${message} to ${receiver}`);
    }
}
class WhatsAppService extends MailService {
// constuctor overriding 
constructor(sender , isBusiness){
    // memanggil super class
    super(sender);

    this.isBusiness = isBusiness;
}
// overriding method 
    sendMessage(message , receiver) {
        // console.log(`${this.sender} ${message} to ${receiver} via whatsapp`);
        super.sendMessage(message , receiver) ;

        console.log('message sent via whatsaap')
    }
} 

const mailservice = new MailService ('some sender');
const whatsappService = new WhatsAppService ('085156390652' , true);

mailservice.sendMessage('hai apa kabar' , 'some receiver');
whatsappService.sendMessage('hai apa kabar?' , '085156390652');


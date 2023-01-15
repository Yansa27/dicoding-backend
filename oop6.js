// overriding 
class MailService {
    constructor (sender) {
        this.sender = sender;
    }
}
class WhatsAppService extends MailService {
// constuctor overriding 
constructor(sender , isBusiness){
    super(sender);

    this.isBusiness = isBusiness;
}
} 



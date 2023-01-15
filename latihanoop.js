

class Pesan {
    constructor (sender){
        this.sender = sender;
    }

    sendPesan (message , receiver){
        console.log(`${this.sender} : ${message} to ${receiver}`);
    }
}

class SmS extends Pesan {
    constructor(sender , iBussines){
      super(sender );

      this.iBussines = iBussines;
    }

    sendPesan(message , receiver) {
        super.sendPesan(message , receiver)

        console.log('send via sms');
    }
   
}

const pesan = new Pesan ('some sender');
const sms = new SmS ('085156390652' , true);

pesan.sendPesan('hai apa kabar' , 'some receiver');
sms.sendPesan('hai apa kabar' , '081368947173')
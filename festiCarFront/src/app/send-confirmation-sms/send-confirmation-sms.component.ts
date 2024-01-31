import { Component } from '@angular/core';
// import * as QRCode from 'qrcode';
// import * as TwilioSDK from 'twilio'; // Renommé de twilio à TwilioSDK pour éviter les conflits de noms

@Component({
  selector: 'app-send-confirmation-sms',
  templateUrl: './send-confirmation-sms.component.html',
  styleUrls: ['./send-confirmation-sms.component.scss']
})
export class SendConfirmationSmsComponent {

  constructor() {}

  // generateQRCodeAndSendSMS(): void {
  //   const billetInfo = "Informations du billet";
  //   QRCode.toDataURL(billetInfo, (err, url) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     const client = TwilioSDK('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');
  //     client.messages.create({
  //       body: 'Votre billet avec QR code',
  //       to: 'NUMERO_DE_DESTINATAIRE',
  //       from: 'VOTRE_NUMERO_TWILIO',
  //       mediaUrl: url
  //     }).then(message => console.log(message.sid))
  //       .catch(err => console.error(err));
  //   });
  // }

  // Appelez cette méthode où vous avez besoin de générer le QR code et d'envoyer le SMS
  // Par exemple, dans un gestionnaire d'événements ou une méthode du cycle de vie Angular
}

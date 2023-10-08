import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  okButtonText:string = "Ok"
 
  generateUniqueId(): string {
    return 'modal_' + uuid;
  }

  // Finances
  finaceHeadingText: string= "Financial Services"
  // Chase
  chaseBank:string = 'Chase Bank';
  chaseLink:string = 'https://www.chase.com/';
  chaseImgLink:string = 'https://img.icons8.com/color/48/000000/chase-bank.png';
  chaseCardsArray = ['Chase Sapphire', 'Chase Unlimited', ' Amazon Prime'];
  chaseHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];
  
  // TD Bank
  tdBank:string = 'TD Bank';
  tdLink:string = 'https://onlinebanking.tdbank.com/#/authentication/login';
  tdImgLink:string = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Toronto-Dominion_Bank_logo.svg';
  tdCardsArray = ['TD 7979'];
  tdHeadingArray = ['Account Name','Statement Date'];

  // Amex
  amex:string = 'American Express';
  amexLink:string = 'https://www.americanexpress.com/en-us/';
  amexImgLink:string = 'https://img.icons8.com/color/48/000000/amex.png';
  amexCardsArray = ['Amex Blue Cash'];
  amexHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];

  // Capital One
  capitalOne:string = 'Capital One';
  capitalOneLink:string = 'https://www.capitalone.com/';
  capitalOneImgLink:string = 'https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo.png';
  capitalOneCardsArray = ['Capital One Venture'];
  capitalOneHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];
  

  // Bills
  billsHeadingText: string= "Bills"

  // Conservice Utilities

  // The Royal Worthington
  // Verizon


  // Subscriptions
 
}

import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  okButtonText:string = "Ok"
 

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
  // Capital One
  

  // Bills
  // Conservice Utilities

  // The Royal Worthington
  // Verizon


  // Subscriptions
 
}

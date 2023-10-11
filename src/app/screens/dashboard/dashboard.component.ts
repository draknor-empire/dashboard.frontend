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
  financeHeadingText: string= "Financial Services"
  // Chase
  chaseBank:string = 'Chase Bank';
  chaseLink:string = 'https://www.chase.com/';
  chaseImgLink:string = 'https://img.icons8.com/color/48/000000/chase-bank.png';
  chaseHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];
  chaseCardsArray = ['Chase Sapphire', 'Chase Unlimited', ' Amazon Prime'];

  
  // TD Bank
  tdBank:string = 'TD Bank';
  tdLink:string = 'https://onlinebanking.tdbank.com/#/authentication/login';
  tdImgLink:string = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Toronto-Dominion_Bank_logo.svg';
  tdHeadingArray = ['Account Name','Statement Date'];
  tdCardsArray = ['TD 7979'];


  // Amex
  amex:string = 'American Express';
  amexLink:string = 'https://www.americanexpress.com/en-us/';
  amexImgLink:string = 'https://img.icons8.com/color/48/000000/amex.png';
  amexHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];
  amexCardsArray = ['Amex Blue Cash'];


  // Capital One
  capitalOne:string = 'Capital One';
  capitalOneLink:string = 'https://www.capitalone.com/';
  capitalOneImgLink:string = 'https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo.png';
  capitalOneHeadingArray = ['Card Name',"Closing Date", 'Due Date', "IsAutomated"];
  capitalOneCardsArray = ['Capital One Platinum', 'Capital One Cash'];


  // Bills
  billsHeadingText: string= "Bills"

  // Conservice Utilities
  conservice:string = 'Conservice Utilities';
  conserviceLink:string = 'https://utilitiesinfo.conservice.com/';
  conserviceImgLink:string = 'https://f.hubspotusercontent20.net/hubfs/8057972/ConserviceLogo_2022_Main_fullcolor-1.png';
  conserviceHeadingArray = ['Account Name','Closing Date', 'Due Date', 'IsAutomated'];
  conserviceDataArray = ['Conservice Utilities'];

  // The Royal Worthington
  royalWorthington:string = 'The Royal Worthington';
  royalWorthingtonLink:string = 'https://theroyalworthington.securecafe.com/residentservices/the-royal-worthington/userlogin.aspx#tab_MakePayments';
  royalWorthingtonImgLink:string = 'https://theroyalworthington.com/wp-content/themes/scotchpress/img/logo-light-stacked.png';
  royalWorthingtonHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  royalWorthingtonDataArray = ['Rent: 1 bedroom (753 SQ. FT):'];
  
  // Verizon
  verizon:string = 'Verizon';
  verizonLink:string = 'https://www.verizon.com/home/myverizon/';
  verizonImgLink:string = 'https://www.edigitalagency.com.au/wp-content/uploads/verizon-red-icon-black.png';
  verizonHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  verizonDataArray = ['Verizon Fios: Internet'];
  
  // Mint Mobile
  mintMobile:string = 'Mint Mobile';
  mintMobileLink:string = 'https://my.mintmobile.com/login';
  mintMobileImgLink:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mint_Mobile_Logo.svg/2560px-Mint_Mobile_Logo.svg.png';
  mintMobileHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  mintMobileDataArray = ['Mint Mobile: Phone'];

  // Subscriptions
  subscriptionsHeadingText: string= "Subscriptions"

  // Spotify
  spotify:string = 'Spotify';
  spotifyLink:string = 'https://www.spotify.com/us/';
  spotifyImgLink:string = 'https://img.icons8.com/color/48/000000/spotify--v1.png';
  spotifyHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  spotifyDataArray = ['Spotify: Music'];

  // Amazon Prime
  amazonPrime:string = 'Amazon Prime';
  amazonPrimeLink:string = 'https://www.amazon.com/gp/prime';
  amazonPrimeImgLink:string = 'https://img.icons8.com/color/48/000000/amazon-prime.png';
  amazonPrimeHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  amazonPrimeDataArray = ['Amazon Prime: Video'];

  
  
  // Shopping
  shoppingHeadingText: string= "Shopping";

  // Macy's
  macys:string = 'Macy\'s';
  macysLink:string = 'https://www.macys.com/';
  macysImgLink:string = 'https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png';
  macysHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  macysDataArray = ['Macy\'s: Credit Card'];

  // Target
  target:string = 'Target';
  targetLink:string = 'https://www.target.com/';
  targetImgLink:string = 'https://img.icons8.com/color/48/000000/target.png';
  targetHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  targetDataArray = ['Target: Credit Card'];

  // Wegmans
  wegmans:string = 'Wegmans';
  wegmansLink:string = 'https://www.wegmans.com/';
  wegmansImgLink:string = 'https://www.hajim.rochester.edu/senior-design-day/wp-content/uploads/2020/04/19-wegmanslogo-1024x1024.jpg';
  wegmansHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  wegmansDataArray = ['Wegmans: Credit Card'];

  //Aldi  
  aldi:string = 'Aldi';
  aldiLink:string = 'https://www.aldi.us/';
  aldiImgLink:string = 'https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png';
  aldiHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  aldiDataArray = ['Aldi: Credit Card'];

  // BJ's
  bjs:string = 'BJ\'s';
  bjsLink:string = 'https://www.bjs.com/';
  bjsImgLink:string = 'https://seeklogo.com/images/B/bj-s-logo-25AB362B50-seeklogo.com.png';
  bjsHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  bjsDataArray = ['BJ\'s: Credit Card'];

  // Giant Food Stores
  giant:string = 'Giant Food Stores';
  giantLink:string = 'https://giantfoodstores.com/';
  giantImgLink:string = 'https://arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OZ2NZ6HDPVCL7GYZHCL7AGS5OE.jpeg';
  giantHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  giantDataArray = ['Giant Food Stores: Credit Card'];

  // Dollar Tree
  dollarTree:string = 'Dollar Tree';
  dollarTreeLink:string = 'https://www.dollartree.com/';
  dollarTreeImgLink:string = 'https://1000logos.net/wp-content/uploads/2020/10/Dollar-Tree-Logo-1991.jpg';
  dollarTreeHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  dollarTreeDataArray = ['Dollar Tree: Credit Card'];

  // Medical
  medicalHeadingText: string= "Medical";

  // Hospitals and Urgent Care
  hospitalsHeadingText:string = 'Hospitals and Urgent Care';

  // Tower Health Urgent Care
  towerHealth:string = 'Tower Health Urgent Care';
  towerHealthLink:string = 'https://towerhealthurgentcare.org/';
  towerHealthImgLink:string = 'https://towerhealth.org/sites/default/files/2021-01/TowerHealthProviders%28R%29_HZ_RGB.png';
  towerHealthHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  towerHealthDataArray = ['Tower Health Urgent Care: Medical'];
  
  // Main Line Health
  mainLineHealth:string = 'Main Line Health';
  mainLineHealthLink:string = 'https://www.mainlinehealth.org/';
  mainLineHealthImgLink:string = 'https://www.mainlinehealth.org/-/media/images/news/2020/mlh_4c_logo/mlh_4c_logo_blog_float_right.jpg?h=266&w=400&la=en&hash=B1D30114192C1486D07FA4F2DEB5D3C2';
  mainLineHealthHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  mainLineHealthDataArray = ['Main Line Health: Medical'];

  // Pharmacy
  pharmacyHeadingText:string = 'Pharmacy';
  
  // CVS
  cvs:string = 'CVS';
  cvsLink:string = 'https://www.cvs.com/';
  cvsImgLink:string = 'https://logowik.com/content/uploads/images/cvs-pharmacy5801.logowik.com.webp';
  cvsHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  cvsDataArray = ['CVS: Pharmacy'];

  // Wegmans Pharmacy
  wegmansPharmacy:string = 'Wegmans Pharmacy';
  wegmansPharmacyLink:string = 'https://www.wegmans.com/pharmacy/';
  wegmansPharmacyImgLink:string = 'https://i.ytimg.com/vi/MQx5Slusqhs/maxresdefault.jpg';
  wegmansPharmacyHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  wegmansPharmacyDataArray = ['Wegmans Pharmacy: Pharmacy'];

  // Consolidated Medical Supply
  consolidatedMedicalSupply:string = 'Consolidated Medical Supply';
  consolidatedMedicalSupplyLink:string = 'https://www.consolidatedmedical.com/';
  consolidatedMedicalSupplyImgLink:string = 'https://www.cmedsupply.com/wp-content/uploads/2021/05/ConsolidatedMedicalSupply_horz_Logo_CMYK.png';
  consolidatedMedicalSupplyHeadingArray = ['Account Type','Due Date', 'IsAutomated'];
  consolidatedMedicalSupplyDataArray = ['Consolidated Medical Supply: Pharmacy'];
}

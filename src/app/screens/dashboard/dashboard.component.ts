import { Statement } from '@angular/compiler';
import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  okButtonText: string = 'Ok';
  currentDate = new Date();

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  today = this.formatDate(this.currentDate);

  calculateNextDate(
    currentDate: Date,
    billFrequency: string,
    typicalDueDay: number,
    nextDueMonth?: number
  ): Date {
    // Create a copy of the current date to avoid modifying it
    const nextDueDate = new Date(currentDate);

    // Define the mapping of bill frequencies to their corresponding time units
    const frequencyMapping: { [key: string]: string } = {
      monthly: 'M',
      annually: 'Y',
      // You can add more frequencies as needed
    };

    // Get the time unit corresponding to the bill frequency
    const timeUnit = frequencyMapping[billFrequency];

    // If the current day of the month is after the typical due day or nextDueMonth is less than the current month, increment the month or year
    if (
      nextDueDate.getDate() > typicalDueDay ||
      (nextDueMonth && nextDueMonth <= nextDueDate.getMonth())
    ) {
      if (timeUnit === 'M') {
        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
      } else if (timeUnit === 'Y') {
        nextDueDate.setFullYear(nextDueDate.getFullYear() + 1);
      }
    }

    // Set the day of the month
    nextDueDate.setDate(typicalDueDay);

    // If it's an annual bill and nextDueMonth is specified, set the month
    if (timeUnit === 'Y' && nextDueMonth !== undefined) {
      nextDueDate.setMonth(nextDueMonth - 1); // JavaScript months are zero-based
    }

    return nextDueDate;
  }

  // Finances
  financeHeadingText: string = 'Financial Services';
  // Chase
  chaseBank: string = 'Chase Bank';
  chaseLink: string = 'https://www.chase.com/';
  chaseImgLink: string =
    'https://img.icons8.com/color/48/000000/chase-bank.png';
  chaseHeadingArray = [
    'Card Name',
    'Closing Date',
    'Due Date',
    'Autopay',
    'Annual fee',
  ];
  chaseCardsArray: Array<Array<string>> = [
    [
      'Freedom Sapphire',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        18
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        15
      ).toLocaleDateString(),
      'Yes',
      '$95',
    ],
    [
      'Freedom Unlimited',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        18
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        15
      ).toLocaleDateString(),
      'Yes',
      '0',
    ],
    [
      'Amazon Prime',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        18
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        15
      ).toLocaleDateString(),
      'Yes',
      '0',
    ],
  ];

  // TD Bank
  tdBank: string = 'TD Bank';
  tdLink: string = 'https://onlinebanking.tdbank.com/#/authentication/login';
  tdImgLink: string =
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Toronto-Dominion_Bank_logo.svg';
  tdHeadingArray = ['Account Name', 'Statement Closing Date'];
  tdCardsArray = [
    [
      'TD 7979',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        23
      ).toLocaleDateString(),
    ],
  ];

  // Amex
  amex: string = 'American Express';
  amexLink: string = 'https://www.americanexpress.com/en-us/';
  amexImgLink: string = 'https://img.icons8.com/color/48/000000/amex.png';
  amexHeadingArray = ['Card Name', 'Closing Date', 'Due Date', 'Autopay'];
  amexCardsArray = [
    [
      'Amex Blue Cash',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        20
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        4
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Capital One
  capitalOne: string = 'Capital One';
  capitalOneLink: string = 'https://www.capitalone.com/';
  capitalOneImgLink: string =
    'https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo.png';
  capitalOneHeadingArray = ['Card Name', 'Closing Date', 'Due Date', 'Autopay'];
  capitalOneCardsArray = [
    ['Capital One Platinum', '', '', 'Yes'],
    ['Capital One Cash', '', '', 'Yes'],
  ];
  // Macy's
  macys: string = "Macy's";
  macysLink: string = 'https://www.macys.com/';
  macysImgLink: string =
    'https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png';
  macysHeadingArray = [
    'Account Type',
    'Statement Closing Date',
    'Due Date',
    'Autopay',
  ];
  macysCardArray = [
    [
      "Macy's Star Rewards: Credit Card",
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        28
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        25
      ).toLocaleDateString(),
      'No',
    ],
  ];

  // Target
  target: string = 'Target';
  targetLink: string = 'https://www.target.com/';
  targetImgLink: string = 'https://img.icons8.com/color/48/000000/target.png';
  targetHeadingArray = [
    'Account Type',
    'Statement Closing Date',
    'Due Date',
    'Autopay',
  ];
  targetDataArray = [
    [
      'Target: RedCard',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        17
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        14
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Bills
  billsHeadingText: string = 'Bills';

  // Conservice Utilities
  conservice: string = 'Conservice Utilities';
  conserviceLink: string = 'https://utilitiesinfo.conservice.com/';
  conserviceImgLink: string =
    'https://f.hubspotusercontent20.net/hubfs/8057972/ConserviceLogo_2022_Main_fullcolor-1.png';
  conserviceHeadingArray = [
    'Account Name',
    'Statement Closing Date',
    'Due Date',
    'Autopay',
  ];
  conserviceDataArray = [
    [
      'Conservice Utilities',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        28
      ).toLocaleDateString(),
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        15
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // The Royal Worthington
  royalWorthington: string = 'The Royal Worthington';
  royalWorthingtonLink: string =
    'https://theroyalworthington.securecafe.com/residentservices/the-royal-worthington/userlogin.aspx#tab_MakePayments';
  royalWorthingtonImgLink: string =
    'https://theroyalworthington.com/wp-content/themes/scotchpress/img/logo-light-stacked.png';
  royalWorthingtonHeadingArray = ['Account Type', 'Due Date', 'Autopay'];
  royalWorthingtonDataArray = [
    [
      'Rent: 1 bedroom (753 SQ. FT):',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        1
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Verizon
  verizon: string = 'Verizon';
  verizonLink: string = 'https://www.verizon.com/home/myverizon/';
  verizonImgLink: string =
    'https://www.edigitalagency.com.au/wp-content/uploads/verizon-red-icon-black.png';
  verizonHeadingArray = [
    'Account Type',
    'Statement Closing Date',
    'Due Date',
    'Autopay',
  ];
  verizonDataArray = [
    [
      'Verizon Fios: Internet',
      '?',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        6
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Mint Mobile
  mintMobile: string = 'Mint Mobile';
  mintMobileLink: string = 'https://my.mintmobile.com/login';
  mintMobileImgLink: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mint_Mobile_Logo.svg/2560px-Mint_Mobile_Logo.svg.png';
  mintMobileHeadingArray = ['Account Type', 'Due Date', 'Autopay'];
  mintMobileDataArray = [
    [
      'Mint Mobile: Phone',
      this.calculateNextDate(
        this.currentDate,
        'annually',
        16,
        1
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Subscriptions
  subscriptionsHeadingText: string = 'Subscriptions';

  // Spotify
  spotify: string = 'Spotify';
  spotifyLink: string = 'https://www.spotify.com/us/';
  spotifyImgLink: string =
    'https://img.icons8.com/color/48/000000/spotify--v1.png';
  spotifyHeadingArray = ['Account Type', 'Due Date', 'Autopay'];
  spotifyDataArray = [
    [
      'Spotify Primiem Duo',
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        27
      ).toLocaleDateString(),
      'Yes',
    ],
  ];

  // Amazon Prime
  amazonPrime: string = 'Amazon Prime';
  amazonPrimeLink: string = 'https://www.amazon.com/gp/prime';
  amazonPrimeImgLink: string =
    'https://img.icons8.com/color/48/000000/amazon-prime.png';
  amazonPrimeHeadingArray = [
    'Account Type',
    'Due Date',
    'Autopay',
    'Cost w/ tax)',
  ];
  amazonPrimeDataArray = [
    [
      'Amazon Prime',
      this.calculateNextDate(
        this.currentDate,
        'annually',
        12,
        1
      ).toLocaleDateString(),
      'Yes',
      '$73.14',
    ],
  ];

  // BJ's
  bjs: string = "BJ's";
  bjsLink: string = 'https://www.bjs.com/';
  bjsImgLink: string =
    'https://seeklogo.com/images/B/bj-s-logo-25AB362B50-seeklogo.com.png';
  bjsHeadingArray = ['Account Type', 'Due Date', 'Autopay', 'Cost w/ tax)'];
  bjsDataArray = [
    [
      "BJ's Membership",
      this.calculateNextDate(
        this.currentDate,
        'monthly',
        1,
        11
      ).toLocaleDateString(),
      'Yes',
      '$58.30',
    ],
  ];

  // Microsoft 365
  microsoft365: string = 'Microsoft 365 Business Standard';
  microsoft365Link: string = 'https://www.microsoft.com/en-us/microsoft-365';
  microsoft365ImgLink: string =
    'https://circyl.co.uk/wp-content/uploads/2023/02/logo_microsoft365.png';
  microsoft365HeadingArray = [
    'Account Type',
    'Due Date',
    'Autopay',
    'Cost w/ tax)',
  ];
  microsoft365DataArray = [
    [
      'Microsoft 365 Business Standard',
      this.calculateNextDate(
        this.currentDate,
        'annually',
        21,
        11
      ).toLocaleDateString(),
      'Yes',
      '$159',
    ],
  ];

  // githubCopilot
  githubCopilot: string = 'Github Copilot';
  githubCopilotLink: string = 'https://copilot.github.com/';
  githubCopilotImgLink: string =
    'https://www.podfeet.com/blog/wp-content/uploads/2021/09/GitHub-Copilot-logo-1040x650.png';
  githubCopilotHeadingArray = ['Account Type', 'Due Date', 'Autopay', 'Cost w/ tax)'];
  githubCopilotDataArray = [['Github Copilot', 'Free Trial Ends - 11/7/2023', 'Yes', '$100']];

  // Shopping
  shoppingHeadingText: string = 'Shopping';

  // Wegmans
  wegmans: string = 'Wegmans';
  wegmansLink: string = 'https://www.wegmans.com/';
  wegmansImgLink: string =
    'https://www.hajim.rochester.edu/senior-design-day/wp-content/uploads/2020/04/19-wegmanslogo-1024x1024.jpg';
  wegmansHeadingArray = ['', 'Malvern StoreHours'];
  wegmansDataArray = [
    ['Sunday', '6:00 AM - 12:00 AM'],
    ['Monday', '6:00 AM - 12:00 AM'],
    ['Tuesday', '6:00 AM - 12:00 AM'],
    ['Wednesday', '6:00 AM - 12:00 AM'],
    ['Thursday', '6:00 AM - 12:00 AM'],
    ['Friday', '6:00 AM - 12:00 AM'],
    ['Saturday', '6:00 AM - 12:00 AM'],
  ];

  //Aldi
  aldi: string = 'Aldi';
  aldiLink: string = 'https://www.aldi.us/';
  aldiImgLink: string =
    'https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png';
  aldiHeadingArray = ['', 'Malvern Hours'];
  aldiDataArray = [
    ['Sunday', '9:00 AM - 8:00 PM'],
    ['Monday', '9:00 AM - 8:00 PM'],
    ['Tuesday', '9:00 AM - 8:00 PM'],
    ['Wednesday', '9:00 AM - 8:00 PM'],
    ['Thursday', '9:00 AM - 8:00 PM'],
    ['Friday', '9:00 AM - 8:00 PM'],
    ['Saturday', '9:00 AM - 8:00 PM'],
  ];

  // Giant Food Stores
  giant: string = 'Giant Food Stores';
  giantLink: string = 'https://giantfoodstores.com/';
  giantImgLink: string =
    'https://arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OZ2NZ6HDPVCL7GYZHCL7AGS5OE.jpeg';
  giantHeadingArray = ['', 'Malvern Hours'];
  giantDataArray = [
    ['Sunday', '6:00 AM - 10:00 PM'],
    ['Monday', '6:00 AM - 10:00 PM'],
    ['Tuesday', '6:00 AM - 10:00 PM'],
    ['Wednesday', '6:00 AM - 10:00 PM'],
    ['Thursday', '6:00 AM - 10:00 PM'],
    ['Friday', '6:00 AM - 10:00 PM'],
    ['Saturday', '6:00 AM - 10:00 PM'],
  ];

  // Dollar Tree
  dollarTree: string = 'Dollar Tree';
  dollarTreeLink: string = 'https://www.dollartree.com/';
  dollarTreeImgLink: string =
    'https://1000logos.net/wp-content/uploads/2020/10/Dollar-Tree-Logo-1991.jpg';
  dollarTreeHeadingArray = ['', 'Frazer Hours'];
  dollarTreeDataArray = [
    ['Sunday', '10:00 AM - 8:00 PM'],
    ['Monday', '8:00 AM - 9:00 PM'],
    ['Tuesday', '8:00 AM - 9:00 PM'],
    ['Wednesday', '8:00 AM - 9:00 PM'],
    ['Thursday', '8:00 AM - 9:00 PM'],
    ['Friday', '8:00 AM - 9:00 PM'],
    ['Saturday', '8:00 AM - 9:00 PM'],
  ];

  // Medical
  medicalHeadingText: string = 'Medical';

  // Hospitals and Urgent Care
  hospitalsHeadingText: string = 'Hospitals and Urgent Care';

  // Tower Health Urgent Care
  towerHealth: string = 'Tower Health Urgent Care';
  towerHealthLink: string = 'https://towerhealthurgentcare.org/';
  towerHealthImgLink: string =
    'https://towerhealth.org/sites/default/files/2021-01/TowerHealthProviders%28R%29_HZ_RGB.png';
  towerHealthHeadingArray = ['', 'Malvern Hours'];
  towerHealthDataArray = [
    ['Sunday', '8:00 AM - 5:00 PM'],
    ['Monday', '8:00 AM - 8:00 PM'],
    ['Tuesday', '8:00 AM - 8:00 PM'],
    ['Wednesday', '8:00 AM - 8:00 PM'],
    ['Thursday', '8:00 AM - 8:00 PM'],
    ['Friday', '8:00 AM - 8:00 PM'],
    ['Saturday', '8:00 AM - 5:00 PM'],
  ];

  // Main Line Health
  mainLineHealth: string = 'Main Line Health';
  mainLineHealthLink: string = 'https://www.mainlinehealth.org/';
  mainLineHealthImgLink: string =
    'https://www.mainlinehealth.org/-/media/images/news/2020/mlh_4c_logo/mlh_4c_logo_blog_float_right.jpg?h=266&w=400&la=en&hash=B1D30114192C1486D07FA4F2DEB5D3C2';
  mainLineHealthHeadingArray = ['', 'Paoli Hours'];
  mainLineHealthDataArray = [
    ['Sunday', 'CLOSED'],
    ['Monday', '8:00 AM - 7:00 PM'],
    ['Tuesday', '7:30 AM - 7:00 PM'],
    ['Wednesday', '7:30 AM - 7:00 PM'],
    ['Thursday', '8:00 AM - 5:00 PM'],
    ['Friday', '8:00 AM - 8:00 PM'],
    ['Saturday', 'CLOSED'],
  ];

  // Pharmacy
  pharmacyHeadingText: string = 'Pharmacy';

  // CVS
  cvs: string = 'CVS';
  cvsLink: string = 'https://www.cvs.com/';
  cvsImgLink: string =
    'https://logowik.com/content/uploads/images/cvs-pharmacy5801.logowik.com.webp';

  // Wegmans Pharmacy
  wegmansPharmacy: string = 'Wegmans Pharmacy';
  wegmansPharmacyLink: string = 'https://www.wegmans.com/pharmacy/';
  wegmansPharmacyImgLink: string =
    'https://i.ytimg.com/vi/MQx5Slusqhs/maxresdefault.jpg';
  wegmansPharmacyHeadingArray = ['', 'Malvern Hours'];
  wegmansPharmacyDataArray = [
    ['Sunday', '9:00 AM - 4:00 PM`'],
    ['Monday', '9:00 AM - 4:00 PM'],
    ['Tuesday', '8:30 AM - 9:00 PM'],
    ['Wednesday', '8:30 AM - 9:00 PM'],
    ['Thursday', '8:30 AM - 9:00 PM'],
    ['Friday', '8:30 AM - 9:00 PM'],
    ['Saturday', '8:30 AM - 6:00 PM'],
  ];

  // Consolidated Medical Supply
  consolidatedMedicalSupply: string = 'Consolidated Medical Supply';
  consolidatedMedicalSupplyLink: string =
    'https://www.consolidatedmedical.com/';
  consolidatedMedicalSupplyImgLink: string =
    'https://www.cmedsupply.com/wp-content/uploads/2021/05/ConsolidatedMedicalSupply_horz_Logo_CMYK.png';
  consolidatedMedicalSupplyHeadingArray = ['', 'PaoliHours'];
  consolidatedMedicalSupplyDataArray = [
    ['Sunday', 'CLOSED'],
    ['Monday', '9:00 AM - 4:00 PM'],
    ['Tuesday', '9:00 AM - 4:00 PM'],
    ['Wednesday', '9:00 AM - 4:00 PM'],
    ['Thursday', '9:00 AM - 4:00 PM'],
    ['Friday', '9:00 AM - 4:00 PM'],
    ['Saturday', 'CLOSED'],
  ];
}

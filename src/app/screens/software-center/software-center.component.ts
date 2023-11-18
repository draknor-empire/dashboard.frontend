import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'software-center',
    templateUrl: './software-center.component.html',
    styleUrls: ['./software-center.component.scss']
})
export class SoftwareCenterComponent {
    
    // Developer Tools
    developerToolsText = 'Developer Tools';

    // Runtime Environments
    runtimeEnvironmentsText = 'Runtime Environments';

    // Web Browsers
    webBrowsersText = 'Web Browser';

    // Image & 3D Editors
    imageEditorsText = 'Image & 3D Editors';

    // Tools
    toolsText = 'Tools';

    // Messaging & Video
    messagingVideoText = 'Messaging & Video';

    // Document Editors
    documentEditorsText = 'Document Editors';

    // File Compression
    fileCompressionText = 'Compression';

    // Media Players
    mediaPlayersText = 'Media Players';

    // Game Engines 
    gameEnginesText = 'Game Engine';    

}

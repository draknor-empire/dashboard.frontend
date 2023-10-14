import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'software-center',
    templateUrl: './software-center.component.html',
    styleUrls: ['./software-center.component.scss']
})
export class SoftwareCenterComponent {
    
    developerToolsText = 'Developer Tools';
    runtimeEnvironmentsText = 'Runtime Environments';
    webBrowsersText = 'Web Browser';
    imageEditorsText = 'Image & 3D Editors';
    toolsText = 'Tools';
    messagingVideoText = 'Messaging & Video';
    documentEditorsText = 'Document Editors';
    fileCompressionText = 'Compression';
    mediaPlayersText = 'Media Players';
    gameEnginesText = 'Game Engine';    
}

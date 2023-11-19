import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'software-center',
    templateUrl: './software-center.component.html',
    styleUrls: ['./software-center.component.scss']
})
export class SoftwareCenterComponent {
    
    // Developer Tools
    developerToolsText = 'Developer Tools';

    // Visual Studio Code
    visualStudioCodeText = 'Visual Studio Code';
    visualStudioCodeImgUrl = 'https://img.icons8.com/fluency/100/visual-studio-code-2019.png';
    visualStudioCodeDownloadUrl = 'https://code.visualstudio.com/download';

    // Visual Studio
    visualStudioText = 'Visual Studio';
    visualStudioImgUrl = 'https://img.icons8.com/color/480/000000/visual-studio.png';
    visualStudioDownloadUrl = 'https://visualstudio.microsoft.com/downloads/';

    // IntelliJ IDEA
    intellijIdeaText = 'IntelliJ IDEA';
    intellijIdeaImgUrl = 'https://img.icons8.com/color/480/000000/intellij-idea.png';
    intellijIdeaDownloadUrl = 'https://www.jetbrains.com/idea/download/';

    // PyCharm
    pyCharmText = 'PyCharm';
    pyCharmImgUrl = 'https://img.icons8.com/color/480/000000/pycharm.png';
    pyCharmDownloadUrl = 'https://www.jetbrains.com/pycharm/download/';


    // Notepad++
    notepadPlusPlusText = 'Notepad++';
    notepadPlusPlusImgUrl = 'https://img.icons8.com/color/480/000000/notepad-plus-plus.png';
    notepadPlusPlusDownloadUrl = 'https://notepad-plus-plus.org/downloads/';

    // Jetbrains Toolbox
    jetbrainsToolboxText = 'Jetbrains Toolbox';
    jetbrainsToolboxImgUrl = 'https://img.icons8.com/color/480/000000/jetbrains.png';
    jetbrainsToolboxDownloadUrl = 'https://www.jetbrains.com/toolbox-app/';

    // Python 3
    python3Text = 'Python 3';
    python3ImgUrl = 'https://img.icons8.com/color/480/000000/python.png';
    python3DownloadUrl = 'https://www.python.org/downloads/';

    // JDK
    jdkText = 'JDK';
    jdkImgUrl = 'https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-java-computer-programming-flaticons-flat-flat-icons.png';
    jdkDownloadUrl = 'https://www.oracle.com/java/technologies/javase-jdk16-downloads.html';

    // node.js
    nodejsText = 'node.js';
    nodejsImgUrl = 'https://img.icons8.com/color/100/nodejs.png';
    nodejsDownloadUrl = 'https://nodejs.org/en/download/';

    // npm  (node package manager)
    npmText = 'npm';
    npmImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png';
    npmDownloadUrl = 'https://www.npmjs.com/get-npm';


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

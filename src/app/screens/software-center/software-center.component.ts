import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'software-center',
  templateUrl: './software-center.component.html',
  styleUrls: ['./software-center.component.scss'],
})
export class SoftwareCenterComponent {
  //*** Developer Tools ***//
  developerToolsText = 'Developer Tools';

  // Visual Studio Code
  visualStudioCodeText = 'Visual Studio Code';
  visualStudioCodeImgUrl =
    'https://img.icons8.com/fluency/100/visual-studio-code-2019.png';
  visualStudioCodeDownloadUrl = 'https://code.visualstudio.com/download';

  // Visual Studio
  visualStudioText = 'Visual Studio';
  visualStudioImgUrl =
    'https://img.icons8.com/color/480/000000/visual-studio.png';
  visualStudioDownloadUrl = 'https://visualstudio.microsoft.com/downloads/';

  // IntelliJ IDEA
  intellijIdeaText = 'IntelliJ IDEA';
  intellijIdeaImgUrl =
    'https://img.icons8.com/color/480/000000/intellij-idea.png';
  intellijIdeaDownloadUrl = 'https://www.jetbrains.com/idea/download/';

  // PyCharm
  pyCharmText = 'PyCharm';
  pyCharmImgUrl = 'https://img.icons8.com/color/480/000000/pycharm.png';
  pyCharmDownloadUrl = 'https://www.jetbrains.com/pycharm/download/';

  // Notepad++
  notepadPlusPlusText = 'Notepad++';
  notepadPlusPlusImgUrl =
    'https://img.icons8.com/color/480/000000/notepad-plus-plus.png';
  notepadPlusPlusDownloadUrl = 'https://notepad-plus-plus.org/downloads/';

  // Jetbrains Toolbox
  jetbrainsToolboxText = 'Jetbrains Toolbox';
  jetbrainsToolboxImgUrl =
    'https://img.icons8.com/color/480/000000/jetbrains.png';
  jetbrainsToolboxDownloadUrl = 'https://www.jetbrains.com/toolbox-app/';

  // Python 3
  python3Text = 'Python 3';
  python3ImgUrl = 'https://img.icons8.com/color/480/000000/python.png';
  python3DownloadUrl = 'https://www.python.org/downloads/';

  // Bluestacks
  bluestacksText = 'Bluestacks';
  bluestacksImgUrl = 'https://img.icons8.com/color/480/000000/bluestacks.png';
  bluestacksDownloadUrl = 'https://www.bluestacks.com/download.html';

  // Docker
  dockerText = 'Docker';
  dockerImgUrl = 'https://img.icons8.com/color/480/docker.png';
  dockerDownloadUrl = 'https://www.docker.com/';

  //*** Runtime Environments ***//
  runtimeEnvironmentsText = 'Runtime Environments';

  // Git
  gitText = 'Git';
  gitImgUrl = 'https://img.icons8.com/color/480/000000/git.png';
  gitDownloadUrl = 'https://git-scm.com/downloads';

  // JDK
  jdkText = 'JDK';
  jdkImgUrl =
    'https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-java-computer-programming-flaticons-flat-flat-icons.png';
  jdkDownloadUrl =
    'https://www.oracle.com/java/technologies/javase-jdk16-downloads.html';

  // node.js
  nodejsText = 'node.js';
  nodejsImgUrl = 'https://img.icons8.com/color/100/nodejs.png';
  nodejsDownloadUrl = 'https://nodejs.org/en/download/';

  // npm  (node package manager)
  npmText = 'npm';
  npmImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png';
  npmDownloadUrl = 'https://www.npmjs.com/get-npm';

  // Ruby
  rubyText = 'Ruby';
  rubyImgUrl =
    'https://img.icons8.com/color/480/000000/ruby-programming-language.png';
  rubyDownloadUrl = 'https://www.ruby-lang.org/en/downloads/';

  // Rust
  rustText = 'Rust';
  rustImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/106px-Rust_programming_language_black_logo.svg.png';
  rustDownloadUrl = 'https://www.rust-lang.org/tools/install';

  //*** Web Browsers ***//
  webBrowsersText = 'Web Browser';

  // Google Chrome
  googleChromeText = 'Google Chrome';
  googleChromeImgUrl = 'https://img.icons8.com/officel/100/chrome.png';
  googleChromeDownloadUrl = 'https://www.google.com/chrome/';

  // Mozilla Firefox
  mozillaFirefoxText = 'Mozilla Firefox';
  mozillaFirefoxImgUrl = 'https://img.icons8.com/color/480/000000/firefox.png';
  mozillaFirefoxDownloadUrl = 'https://www.mozilla.org/en-US/firefox/new/';

  // Brave
  braveText = 'Brave';
  braveImgUrl = 'https://img.icons8.com/color/480/000000/brave-web-browser.png';
  braveDownloadUrl = 'https://brave.com/download/';

  // LibreWolf
  libreWolfText = 'LibreWolf';
  libreWolfImgUrl = 'https://librewolf.net/icon.svg';
  libreWolfDownloadUrl = 'https://librewolf-community.gitlab.io/';

  //*** Image & 3D Editors ***//
  imageEditorsText = 'Image & 3D Editors';

  // GIMP
  gimpText = 'GIMP';
  gimpImgUrl = 'https://img.icons8.com/color/480/000000/gimp.png';
  gimpDownloadUrl = 'https://www.gimp.org/downloads/';

  // Inkscape
  inkscapeText = 'Inkscape';
  inkscapeImgUrl = 'https://img.icons8.com/color/480/000000/inkscape.png';
  inkscapeDownloadUrl = 'https://inkscape.org/release/';

  // Krita
  kritaText = 'Krita';
  kritaImgUrl = 'https://img.icons8.com/color/480/000000/krita.png';
  kritaDownloadUrl = 'https://krita.org/en/download/krita-desktop/';

  // PenPot
  penPotText = 'PenPot';
  penPotImgUrl =
    'https://site-assets.plasmic.app/5a092f8c015ea24a9c0953e5ca065580.svg';
  penPotDownloadUrl = 'https://penpot.app/en/download/';

  // Blender
  blenderText = 'Blender';
  blenderImgUrl = 'https://img.icons8.com/color/480/000000/blender-3d.png';
  blenderDownloadUrl = 'https://www.blender.org/download/';

  //*** Tools ***//
  toolsText = 'Tools';

  // Everthing
  everthingText = 'Everything';
  everthingImgUrl = 'https://www.voidtools.com/Everything.ico';
  everthingDownloadUrl = 'https://www.voidtools.com/downloads/';

  // TeamViewer
  teamviewerText = 'TeamViewer';
  teamviewerImgUrl =
    'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-teamviewer-is-proprietary-software-for-remote-control-desktop-sharing-logo-color-tal-revivo.png';
  teamviewerDownloadUrl = 'https://www.teamviewer.com/en/download/';

  // OBS Studio
  obsStudioText = 'OBS Studio';
  obsStudioImgUrl = 'https://img.icons8.com/color/480/000000/obs-studio.png';
  obsStudioDownloadUrl = 'https://obsproject.com/download';

  //mpv
  mpvText = 'mpv';
  mpvImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/7/73/Mpv_logo_%28official%29.png';
  mpvDownloadUrl = 'https://mpv.io/installation/';

  // Rufus
  rufusText = 'Rufus';
  rufusImgUrl = 'https://rufus.ie/pics/rufus-128.png';
  rufusDownloadUrl = 'https://rufus.ie/en_US/';

  // VMware Workstation
  vmwareWorkstationText = 'VMware Workstation';
  vmwareWorkstationImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/1024px-Vmware_workstation_16_icon.svg.png';
  vmwareWorkstationDownloadUrl = 'https://www.vmware.com/go/getworkstation-win';

  // CCleaner
  ccleanerText = 'CCleaner';
  ccleanerImgUrl = 'https://img.icons8.com/color/480/000000/ccleaner.png';
  ccleanerDownloadUrl = 'https://www.ccleaner.com/ccleaner/download';

  // VLC
  vlcText = 'VLC';
  vlcImgUrl = 'https://img.icons8.com/color/480/000000/vlc.png';
  vlcDownloadUrl = 'https://www.videolan.org/vlc/download-windows.html';

  // Putty
  puttyText = 'Putty';
  puttyImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PuTTY_Icon_upstream.svg/512px-PuTTY_Icon_upstream.svg.png';
  puttyDownloadUrl =
    'https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html';

  // Raspberry Pi Imager
  raspberryPiImagerText = 'Raspberry Pi Imager';
  raspberryPiImagerImgUrl =
    'https://img.icons8.com/color/480/000000/raspberry-pi.png';
  raspberryPiImagerDownloadUrl = 'https://www.raspberrypi.org/software/';

  // SD Card Formatter
  sdCardFormatterText = 'SD Card Formatter';
  sdCardFormatterImgUrl = 'https://img.icons8.com/color/480/000000/sd.png';
  sdCardFormatterDownloadUrl = 'https://www.sdcard.org/downloads/formatter/';

  // Asus Armoury Crate
  asusArmouryCrateText = 'Asus Armoury Crate';
  asusArmouryCrateImgUrl = 'https://rog-forum.asus.com/t5/image/serverpage/image-id/73391iA598552191C4FB7E/image-size/large?v=v2&px=999';
  asusArmouryCrateDownloadUrl =
    'https://www.asus.com/campaign/ArmouryCrate/Download.html';

// Resource Hacker
    resourceHackerText = 'Resource Hacker';
    resourceHackerImgUrl = 'https://upload.wikimedia.org/wikipedia/en/0/08/Resource_hacker_icon2.png';
    resourceHackerDownloadUrl = 'https://www.angusj.com/resourcehacker/';

// Notion
    notionText = 'Notion';
    notionImgUrl = 'https://img.icons8.com/color/480/000000/notion--v2.png';
    notionDownloadUrl = 'https://www.notion.so/desktop';

// Malwarebyte
    malwarebyteText = 'Malwarebyte';
    malwarebyteImgUrl = 'https://img.icons8.com/color/480/malwarebytes.png';
    malwarebyteDownloadUrl = 'https://www.malwarebytes.com/';

  // Ninite
  niniteText = 'Ninite';
  niniteImgUrl = 'https://diios.ie/wp-content/uploads/2021/10/Ninite.jpg';
  niniteDownloadUrl = 'https://ninite.com/';

  //*** Messaging & Video ***//
  messagingVideoText = 'Messaging & Video';

  // Discord
  discordText = 'Discord';
  discordImgUrl = 'https://img.icons8.com/color/480/000000/discord-logo.png';
  discordDownloadUrl = 'https://discord.com/download';

  // WhatsApp
  whatsAppText = 'WhatsApp';
  whatsAppImgUrl = 'https://img.icons8.com/color/480/000000/whatsapp--v1.png';
  whatsAppDownloadUrl = 'https://www.whatsapp.com/download';

  // Zoom
  zoomText = 'Zoom';
  zoomImgUrl = 'https://img.icons8.com/color/480/000000/zoom.png';
  zoomDownloadUrl = 'https://zoom.us/download';

  //*** Document Editors ***//
  documentEditorsText = 'Document Editors';

  //*** Media Players ***//
  mediaPlayersText = 'Media Players';

  //*** Gaming***//
  gamingPlatformText = 'Gaming';

  // Steam
  steamText = 'Steam';
  steamImgUrl = 'https://img.icons8.com/color/480/000000/steam.png';
  steamDownloadUrl = 'https://store.steampowered.com/about/';

  // Epic Games
  epicGamesText = 'Epic Games';
  epicGamesImgUrl = 'https://img.icons8.com/color/480/000000/epic-games.png';
  epicGamesDownloadUrl = 'https://www.epicgames.com/store/en-US/download';

  // Unity
  unityText = 'Unity';
  unityImgUrl = 'https://img.icons8.com/ios-filled/480/000000/unity.png';
  unityDownloadUrl = 'https://unity3d.com/get-unity/download';

  // Guild Wars
    guildWarsText = 'Guild Wars';
    guildWarsImgUrl = 'https://1000logos.net/wp-content/uploads/2021/07/Guild-Wars-Logo-2005.png';
    guildWarsDownloadUrl = 'https://cloudfront.guildwars2.com/client/GwSetup.exe';

    // Guild Wars
    guildWars2Text = 'Guild Wars 2';
    guildWars2ImgUrl = 'https://1000logos.net/wp-content/uploads/2021/07/Guild-Wars-Emblem.png';
    guildWars2DownloadUrl = 'https://account.arena.net/content/download/gw2/win/64';

  //*** File Compression ***//
  fileCompressionText = 'File Compression';

  // WinRAR
  winrarText = 'WinRAR';
  winrarImgUrl = 'https://img.icons8.com/color/480/000000/winrar.png';
  winrarDownloadUrl = 'https://www.rarlab.com/download.htm';
}

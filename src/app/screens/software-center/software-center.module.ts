import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadPinModule } from 'src/app/common/download-pin/download.module';
import { PinnedModalModule } from 'src/app/common/pinned-modal/pinned-modal.module';

@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      PinnedModalModule,
      DownloadPinModule,
    ],
    providers: [],
    bootstrap: []
  })
export class SoftwareCenterModule {
    // component logic here
}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadPinComponent } from './download.component';

@NgModule({
  declarations: [DownloadPinComponent],
  exports: [BrowserModule, DownloadPinComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class DownloadPinModule {}

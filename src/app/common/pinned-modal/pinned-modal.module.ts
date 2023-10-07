import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PinnedModalComponent } from 'src/app/common/pinned-modal/pinned-modal.component';

@NgModule({
  declarations: [PinnedModalComponent],
  exports: [BrowserModule, PinnedModalComponent],
  imports: [
    BrowserModule,

  ],
})
export class PinnedModalModule {

}

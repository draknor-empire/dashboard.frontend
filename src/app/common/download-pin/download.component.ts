import { Component, Input } from '@angular/core';

@Component({
  selector: 'download-pin',
  templateUrl: 'download-pin.component.html',
  styleUrls: ['download-pin.component.scss'],
})
export class DownloadPinComponent {
  @Input() softwareName: string | undefined;
  @Input() imgWidth: string = '100';
  @Input() imgHeight: string = '100';
  @Input() softwareImgUrl: string | undefined;
  @Input() downloadText: string = 'Download';
  @Input() downloadUrl: string | undefined;
}

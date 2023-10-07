import { Component, Input } from '@angular/core';

@Component({
  selector: 'pinned-modal',
  templateUrl: 'pinned-modal.component.html',
  styleUrls: ['pinned-modal.component.scss']
})
export class PinnedModalComponent {
  @Input() hyperlink:string = 'hyperlink';
  @Input() imageUrl:string = 'imageUrl';
  @Input() linkName:string = 'linkName';
  @Input() modalTitle:string = 'modalTitle';
  @Input() modalBody:string = 'modalBody';
  @Input() primaryButton:string = 'primaryButton';
  @Input() secondaryButton:string = 'secondaryButton';

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  modalHidden() {
    if (!this.showModal) {
      document.body.classList.remove('modal-open');
    }
  }
}

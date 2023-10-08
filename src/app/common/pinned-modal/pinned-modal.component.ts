import { Component, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

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
  @Input() tableHeadingArray = ['tableHeading'];
  @Input() tableRowArray = ['tableRow'];
  @Input() uniqueId:string = 'uniqueId';
  @Input() imgWidth:string = '50';
  @Input() imgHeight:string = '60';

  ngOnInit() {
    // Generate a unique ID using uuidv4()
    this.uniqueId = uuid();
  }

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

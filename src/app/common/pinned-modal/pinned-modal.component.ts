import { Component, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'pinned-modal',
  templateUrl: 'pinned-modal.component.html',
  styleUrls: ['pinned-modal.component.scss']
})
export class PinnedModalComponent {
  @Input() hyperlink:string | null = null;
  @Input() imageUrl:string | null = null;
  @Input() linkName:string | null = null;
  @Input() modalTitle:string | null = null;
  @Input() modalBody:string | null = null;
  @Input() primaryButton:string | null = null;
  @Input() tableHeadingArray: Array<string> | null = null;
  @Input() tableRowArray: Array<Array<string>> | null = null;
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

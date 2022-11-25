import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from 'src/interfaces/Vehicle';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() displayModal: boolean = false;
  @Input() modalData!: Vehicle | null;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  createHeader() {
    return `${this.modalData?.number} (${this.modalData?.type})`
  }

  hideModal() {
    this.modalClosed.emit();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TYPES_OF_DEVICES } from 'src/app/constants';
import { Device } from 'src/interfaces/Device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device!: Device;
  deviceImage!: string;

  ngOnInit(): void {
  }

  assignImage(type: string) {
    switch (type) {
      case TYPES_OF_DEVICES.COMPUTER:
        // Skrócić te Pathy
        return "../../../../../assets/images/computer.png"
      case TYPES_OF_DEVICES.PAYMENT:
        return "../../../../../assets/images/terminal.png"
      case TYPES_OF_DEVICES.QR:
        return "../../../../../assets/images/qr.png"
      case TYPES_OF_DEVICES.PRINTER:
        return "../../../../../assets/images/printer.png"
      default:
        return ""
    }
  }
}

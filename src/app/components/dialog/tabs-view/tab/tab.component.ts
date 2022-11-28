import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/interfaces/Device';
import { TicketMachine } from 'src/interfaces/TicketMachine';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() ticketMachines!: TicketMachine[];
  @Input() computer!: Device;

  ngOnInit(): void {
  }

  checkDevices(machine: TicketMachine) {
    let anyWarnings: boolean = false;
    let anyFailures: boolean = false;

    machine.devices.forEach((device): void => {
      if (device.status === "Failure") {
        anyFailures = true;
        return
      } else if (device.status === "Warning") {
        anyWarnings = true;
      }
    });

    if (anyFailures) {
      return "red"
    } else if (anyWarnings) {
      return "orange"
    } else {
      return "black"
    }
  }
}

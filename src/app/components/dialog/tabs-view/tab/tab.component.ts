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
  isMoreThanOneDevice!: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.ticketMachines);
  }
}

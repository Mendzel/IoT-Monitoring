import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/interfaces/Device';
import { TicketMachine } from 'src/interfaces/TicketMachine';

@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.scss']
})
export class TabsViewComponent implements OnInit {
  @Input() ticketMachines!: TicketMachine[];
  @Input() onboardComputer!: Device;
  constructor() { }

  ngOnInit(): void {
  }
}

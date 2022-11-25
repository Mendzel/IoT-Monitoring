import { Component, Input, OnInit } from '@angular/core';

import { STATUSES, TYPES_OF_VEHICLES } from 'src/app/constants';
import { Vehicle } from 'src/interfaces/Vehicle';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData: Vehicle[] = [];
  typesOfVehicles: String[] = TYPES_OF_VEHICLES;
  statuses: String[] = STATUSES;

  constructor() { }

  ngOnInit(): void {
  }
}

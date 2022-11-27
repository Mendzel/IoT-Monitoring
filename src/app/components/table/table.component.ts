import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TYPES_OF_VEHICLES } from 'src/app/constants';

import { Vehicle } from 'src/interfaces/Vehicle';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() vehiclesArray: Vehicle[] = [];
  @Output() vehicleSelection: EventEmitter<Vehicle> = new EventEmitter();
  dataToDisplay: Vehicle[] = [];

  ngOnInit(): void {
    this.dataToDisplay = this.vehiclesArray;
  }

  onVehicleSelection(vehicle: Vehicle) {
    this.vehicleSelection.emit(vehicle);
  }

  assignVehicleIcon(type: string) {
    switch (type) {
      case TYPES_OF_VEHICLES.BUS:
        return "../../../assets/images/bus-icon.png"
      case TYPES_OF_VEHICLES.TRAIN:
        return "../../../assets/images/train-icon.png"
      case TYPES_OF_VEHICLES.TRAM:
        return "../../../assets/images/tram-icon.png"
      default:
        return ""
    }
  }

  onFilterSelection(typeSelected: string) {
    typeSelected === TYPES_OF_VEHICLES.ALL ? this.dataToDisplay = this.vehiclesArray : this.filterTable(typeSelected);
  }

  filterTable(type: string) {
    this.dataToDisplay = this.vehiclesArray.filter(vehicle => {
      return vehicle.type === type
    });
  }
}

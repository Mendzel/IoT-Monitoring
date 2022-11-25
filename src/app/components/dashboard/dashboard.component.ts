import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/classes/Bus';
import { Train } from 'src/classes/Train';
import { Tram } from 'src/classes/Tram';
import { Vehicle } from 'src/interfaces/Vehicle';
import { VehiclesService } from 'src/services/vehicles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  vehiclesArray: Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((fetchedVehicles) => {
      fetchedVehicles.forEach(vehicle => {
        this.assignVehicleType(vehicle)
      })
    })
  }

  assignVehicleType(vehicle: Vehicle) {
    switch (vehicle.type) {
      case "Bus":
        this.vehiclesArray.push(new Bus(vehicle));
        break;
      case "Train":
        this.vehiclesArray.push(new Train(vehicle));
        break;
      case "Tram":
        this.vehiclesArray.push(new Tram(vehicle));
        break;
      default:
        console.log(`Check your database, ${vehicle.type} is not a type of vehicle.`);
    }
  }
}

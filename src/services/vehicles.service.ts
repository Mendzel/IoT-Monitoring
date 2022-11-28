import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/app/constants';
import { Vehicle } from 'src/interfaces/Vehicle';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    // TODO Obsługa błędu
    return this.http.get<Vehicle[]>(SERVER_URL + '/vehicles');
  }

  updateVehicle(vehicleToUpdate: Vehicle): Observable<Vehicle> {
    const url = SERVER_URL + '/vehicles/' + vehicleToUpdate.id;

    return this.http.put<Vehicle>(url, vehicleToUpdate);
  }
}

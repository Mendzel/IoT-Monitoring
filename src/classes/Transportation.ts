import { Device } from "src/interfaces/Device";
import { TicketMachine } from "src/interfaces/TicketMachine";
import { Vehicle } from "src/interfaces/Vehicle";

export abstract class Transportation implements Vehicle {
    id: number;
    type: string;
    number: string;
    ticketMachines: TicketMachine[];
    onboardComputer: Device;
    status: string = '';

    constructor(passedVehicle: Vehicle) {
        this.id = passedVehicle.id;
        this.type = passedVehicle.type;
        this.number = passedVehicle.number;
        this.ticketMachines = passedVehicle.ticketMachines;
        this.onboardComputer = passedVehicle.onboardComputer;
        this.status = passedVehicle.status;
    }
}
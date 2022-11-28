import { STATUSES } from "src/app/constants";
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

    checkStatuses() {
        const computerStatus = this.onboardComputer.status;
        const ticketMachineStatus = this.checkTicketMachinesStatus();

        if (computerStatus === STATUSES.FAIL || ticketMachineStatus === STATUSES.FAIL) {
            return this.checkIfStatusChanged(STATUSES.FAIL);
        } else if (computerStatus === STATUSES.WARN || ticketMachineStatus === STATUSES.WARN) {
            return this.checkIfStatusChanged(STATUSES.WARN);
        } else {
            return this.checkIfStatusChanged(STATUSES.OK);
        }
    }

    checkTicketMachinesStatus() {
        let anyWarnings: boolean = false;
        let anyFailures: boolean = false;

        this.ticketMachines.forEach(machine => {
            if (anyFailures) return

            machine.devices.forEach(device => {
                if (device.status === "Failure") {
                    anyFailures = true;
                    return
                } else if (device.status === "Warning") {
                    anyWarnings = true;
                }
            })
        })

        if (anyFailures) {
            return STATUSES.FAIL
        } else if (anyWarnings) {
            return STATUSES.WARN
        } else {
            return STATUSES.OK
        }
    }

    checkIfStatusChanged(machinesStatus: string) {
        if (this.status !== machinesStatus) {
            return { updateNeeded: true, value: machinesStatus }
        } else {
            return { updateNeeded: false, value: '' }
        }
    }

    updateStatus(statusToChange: string) {
        this.status = statusToChange;
    }
}
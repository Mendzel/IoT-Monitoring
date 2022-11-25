import { Device } from "./Device";
import { TicketMachine } from "./TicketMachine";

export interface Vehicle {
    id: number,
    type: string,
    number: string,
    ticketMachines: TicketMachine[],
    onboardComputer: Device,
    status: string
}
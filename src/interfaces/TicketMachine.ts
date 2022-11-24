import { Device } from "./Device";

export interface TicketMachine {
    id: number,
    devices: Device[],
}
import {Appointment} from './Appointment';

export class Queue {
    queueId: number;
    orgId: number;
    adminId: number;
    queueName: string;
    averageAppointmentInMins: number;
    maxAppointments: number;
    startTime: string;
    endTime: string;
    isActive: string;
    appointments: { [key: number]: Appointment}; // key -> appointment id
    scheduleInputList: [];
    scheduleList: [];

    constructor() {
        this.queueName = "";
        // this.maxAppointments = 0;
        // this.maxAppointments = 0;
    }
}

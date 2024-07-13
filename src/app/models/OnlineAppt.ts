export class OnlineAppt{
    queueId : number;
    queueName : number;
    organizationId : number;
    averageAppointmentInMins:String;
    isActive:Boolean;
    admin :{
        adminId :number;
        firstName:String;
        lastName:String;
    }
    queue:{
        queueId : number;
        queueName : number;
        organizationId : number;
        averageAppointmentInMins:String;
        isActive:Boolean;
        admin :{
            adminId :number;
            firstName:String;
            lastName:String;
        }
    }
    timeSlots:[]

    constructor(queueId,queueName,organizationId,averageAppointmentInMins,isActive,
        timeSlots){
            this.queueId = queueId;
            this.queueName = queueName;
            this.organizationId = organizationId;
            this.averageAppointmentInMins = averageAppointmentInMins;
            this.isActive = isActive;
            this.timeSlots = timeSlots;

    }



}
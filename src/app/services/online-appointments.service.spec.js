"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var online_appointments_service_1 = require("./online-appointments.service");
describe('OnlineAppointmentsService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(online_appointments_service_1.OnlineAppointmentsService);
        expect(service).toBeTruthy();
    });
});

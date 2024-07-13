"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineAppointmentsService = void 0;
var core_1 = require("@angular/core");
var constants_1 = require("@app/common/constants");
var OnlineAppointmentsService = /** @class */ (function () {
    function OnlineAppointmentsService(http) {
        this.http = http;
    }
    OnlineAppointmentsService.prototype.getOnlineAppointments = function (postBody) {
        return this.http.post("" + constants_1.Constants.API_ONLINE_APPOINTMENTS, postBody);
    };
    OnlineAppointmentsService.prototype.getallQueues = function (postBody) {
        return this.http.post("" + constants_1.Constants.API_GETALLQUEUES, postBody);
    };
    OnlineAppointmentsService.prototype.getOpenSlotsQueue = function (postBody) {
        return this.http.post("" + constants_1.Constants.API_OPENSLOTS_QUEUE, postBody);
    };
    OnlineAppointmentsService.prototype.addnewAppointment = function (postData) {
        return this.http.post("" + constants_1.Constants.API_ADD_APPOINTMENT, postData);
    };
    OnlineAppointmentsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OnlineAppointmentsService);
    return OnlineAppointmentsService;
}());
exports.OnlineAppointmentsService = OnlineAppointmentsService;

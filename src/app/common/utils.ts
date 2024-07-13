import {NavigationExtras, Router} from '@angular/router';
import {Constants} from '@app/common/constants';
import {FormBuilder} from '@angular/forms';
import {AppointmentService} from '@services/appointment.service';
import {AlertController, ToastController} from '@ionic/angular';
import {QueueServiceService} from '@services/queue-service.service';

export class Utils {
    constructor(private router: Router, public toastController: ToastController) { }

    static convertTo24HrTime(time, isPm): number {
        if (time === 12) {
            if (isPm) {
                return 12;
            } else {
                return 0;
            }
        } else if (isPm && time !== 12) {
            return time + 12;
        } else {
            return time;
        }
    }

    static isScheduleTimesValid(start, end): boolean {
        return start > end;
    }

    static convertTo12HrTime(time): string {
        if (time === 0) {
            return '12,AM';
        } else if (time === 12) {
            return '12,PM';
        } else if (time > 0 && time < 12) {
            return time + ',' + 'AM';
        } else if (time > 12 && time < 23) {
            return (time - 12) + ',' + 'PM';
        } else {
            return '0,PM';
        }
    }

    static async showToast(message, navigationExtras: NavigationExtras, router: Router, toastController: ToastController) {
        router.navigate([Constants.NAV_APPOINTMENTS], navigationExtras);
        const toast = await toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}

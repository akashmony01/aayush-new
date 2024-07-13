import { Injectable } from '@angular/core';
import { ToastOptions, toastController } from '@ionic/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: any;

  constructor(
    public toastController: ToastController
  ) { }

  async showToast(message: string, duration: number) {
    this.toast = this.toastController.create({
      message: message,
      duration: duration
    }).then((toastData) => {
      toastData.present();
    });
  }


}
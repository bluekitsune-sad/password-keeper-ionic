import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.page.html',
  styleUrls: ['./contactpage.page.scss'],
})
export class ContactpagePage implements OnInit {
  userName: string = '';
  userEmail: string = '';
  complaint: string = '';

  constructor(private toastController: ToastController) {}

  ngOnInit() {
  }
  submitForm() {
    // Add your logic to handle the form submission here
    // For now, just display a toast indicating success
    this.presentToast('Complaint submitted successfully!');
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }
}

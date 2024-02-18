import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.page.html',
  styleUrls: ['./userpage.page.scss'],
})
export class UserpagePage implements OnInit {
  username: string;
  savedPasswords: any[];

  // Declare loading as a class property
  loading: any;

  constructor(
    private loadingController: LoadingController,
    private route: ActivatedRoute
  ) {
    const userData = this.route.snapshot.data['userData'];

    // Set the username
    this.username = userData.username;

    // Set the saved passwords
    this.savedPasswords = userData.saved_passwords;
  }

  ngOnInit() {
    // Retrieve the user data from the navigation state
    const userData = this.route.snapshot.data['userData'];

    // Set the username
    this.username = userData.username;

    // Set the saved passwords
    this.savedPasswords = userData.saved_passwords;

    console.log('User Data in UserPage:', userData);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  goToPassGeneratorPage() {
    // Add your navigation logic here
    console.log('Navigating to passgenerator page');
  }
}

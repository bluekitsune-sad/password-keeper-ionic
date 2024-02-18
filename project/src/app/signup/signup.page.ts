import { Component, OnInit } from '@angular/core';
import { IonicRestService } from '..//ionic-rest.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private ionicRestService: IonicRestService,
    private navCtrl: NavController) {}

  ngOnInit() {
    // Initialization logic can be added here if needed
  }

  signup() {
    // Basic form validations
    if (!this.user.username || !this.user.email || !this.user.password || !this.user.confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    // Call the addUser method to add a new user
    this.ionicRestService.addUser(this.user).then((response) => {
      console.log('User added successfully:', response);
      this.navCtrl.navigateForward('/passgenerator')
    }).catch((error) => {
      console.error('Error adding user:', error);
      // Handle the error as needed
    });
  }
}

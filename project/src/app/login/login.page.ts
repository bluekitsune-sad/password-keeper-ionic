import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicRestService } from '..//ionic-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    username: '',
    password: ''
  };

  constructor(
    private ionicRestService: IonicRestService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Initialization logic can be added here if needed
  }

  async login() {
    // Basic form validations
    if (!this.user.username || !this.user.password) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      // Call the getUser method to fetch user data
      const userData = await this.ionicRestService.getUser(this.user.username);
      
      // Implement your login logic here using the user variable
      console.log('User Data:', userData);
      console.log('Username:', this.user.username);
      console.log('Password:', this.user.password);

      // Navigate to the UserPage and pass user data
      // this.navCtrl.navigateForward('/userpage', {
      //   state: {
      //     userData: userData,
      //   },
      // });
      this.navCtrl.navigateForward('/passgenerator')
      

    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle the error as needed
    }
  }
}

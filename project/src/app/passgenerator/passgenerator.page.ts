import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import { Characters } from '../../helpers/global';
import { CheckOptionsValue } from '../../types/generator';
import { LevelValue } from '../components/strength-level/strength-level.component';

@Component({
  selector: 'app-passgenerator',
  templateUrl: './passgenerator.page.html',
  styleUrls: ['./passgenerator.page.scss'],
})
export class PassgeneratorPage implements OnInit {
  passGenerated: string = 'GeneratedPassword';
  passLength: RangeValue = 8;
  hasGenerated: boolean = false;
  passStrenght: LevelValue = 1;
  safepass: boolean = false;
  checkOptions: CheckOptionsValue = {
    lowercase: true,
    uppercase: false,
    numbers: false,
    specials: false,
  };
  constructor(
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.validatePasswordSafety();
  }

  onLengthRangeChange(ev: Event): void {
    this.validatePasswordSafety();
    this.passLength = (ev as RangeCustomEvent).detail.value;
  }

  validatePasswordSafety(): void {
    const { lowercase, uppercase, numbers, specials } = this.checkOptions;
    if (!lowercase && !uppercase) this.checkOptions.lowercase = true;
    if (this.passLength == 6 && !uppercase && !numbers && !specials) {
      this.safepass = false;
    } else {
      this.safepass = true;
    }
  }

  onOptionsChange(): void {
    const { lowercase, uppercase, numbers, specials } = this.checkOptions;
    let score: number = 0;
    // Validations
    this.validatePasswordSafety();

    // Score calculation
    if (
      (this.passLength as number) > 8 ||
      this.checkOptions.lowercase ||
      this.checkOptions.uppercase
    )
      score += 1;
    if (lowercase && uppercase) score += 1;
    if (numbers) score += 1;
    if (specials) score += 1;

    this.safepass = score > 1;
    this.passStrenght = score as LevelValue;
  }

  getCharacters(): string[] {
    let characters: any[] = [];
    if (this.checkOptions.lowercase)
      characters = [...characters, ...Characters.lowercase];
    if (this.checkOptions.uppercase)
      characters = [...characters, ...Characters.uppercase];
    if (this.checkOptions.numbers)
      characters = [...characters, ...Characters.numbers];
    if (this.checkOptions.specials)
      characters = [...characters, ...Characters.specials];
    return characters;
  }

  onGenerate(): void {
    let pass: string = '',
      characters = this.getCharacters().join('');
    const length = this.passLength as number;

    for (let i = 0; i < length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    this.hasGenerated = true;
    this.passGenerated = pass;
  }

  copyToClipboard(content: string): void {
    navigator.clipboard
      .writeText(content)
      .then(async () => {
        const toast = await this.toastController.create({
          message: 'Password Copied',
          duration: 3000,
          color: 'primary',
        });

        await toast.present();
      })
      .catch(async (error) => {
        console.error('Failed to copy to clipboard:', error);
        const toast = await this.toastController.create({
          message: 'Failed to copy to clipboard:',
          duration: 3000,
          color: 'danger',
        });

        await toast.present();
      });
  }

  onCopy(): void {
    this.copyToClipboard(this.passGenerated);
  }

  goToCustomerPage(): void {
    console.log("where am i")
    this.navCtrl.navigateForward('/contactpage');
  }
}

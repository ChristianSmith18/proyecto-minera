import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  constructor(private modalController: ModalController) {}

  public dismissModal() {
    this.modalController.dismiss();
  }
}

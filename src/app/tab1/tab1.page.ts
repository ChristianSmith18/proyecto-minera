import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsComponent } from './../modals/forms/forms.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private modalController: ModalController) {}

  async openFormModal() {
    const modal = await this.modalController.create({
      component: FormsComponent,
    });
    return await modal.present();
  }
}

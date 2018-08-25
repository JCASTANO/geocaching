import { LugaresService } from './../../services/lugares.service';
import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  lugar: any = {};

  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              private lugaresService : LugaresService,
              private toastCtrl: ToastController) {
    this.lugar = {...navParams.get('lugar')};
  }

  guardarLugar() { 
    if(!this.lugar.id) {
      this.lugar.id = Date.now();
    }
    this.lugaresService.createLugar(this.lugar);
    this.mostrarMensaje();
    this.navCtrl.pop();
  }

  mostrarMensaje() {
    const toast = this.toastCtrl.create({
      message: 'Lugar guardado exitosamente',
      duration: 3000
    });
    toast.present();
  }
}

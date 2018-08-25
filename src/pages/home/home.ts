import { LugaresService } from './../../services/lugares.service';
import { LugarPage } from './../lugar/lugar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: any = [];

  constructor(private navCtrl: NavController, 
    private lugaresService: LugaresService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
    this.lugaresService.getLugares().valueChanges().subscribe(resultado => {
      this.lugares = resultado;
    });
  }

  borrarLugar(lugar) {
    this.showConfirm(lugar);
  }

  mostrarMensaje() {
    const toast = this.toastCtrl.create({
      message: 'Lugar borrado exitosamente',
      duration: 3000
    });
    toast.present();
  }

  showConfirm(lugar) {
    const confirm = this.alertCtrl.create({
      title: 'Desea eliminar el registro?',
      message: 'Una vez eliminado no podrá ser recuperado',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.lugaresService.borrarLugar(lugar);
            this.mostrarMensaje();
          }
        }
      ]
    });
    confirm.present();
  }

  navegarALugar(name) {
    this.navCtrl.push(LugarPage, {nombre: name});
  }

  irAVistaDeDetalle() {
    this.navCtrl.push(LugarPage, {lugar: {}});
  }

  irAVistaDeDetalleExistente(lugar) {
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }
}

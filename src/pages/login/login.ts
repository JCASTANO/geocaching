import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private authService: AuthService,
              private toastCtrl: ToastController) {
  }

  loginFacebook() {
     this.authService.loginFacebook().then(response => {
       this.mostrarMensaje();
       this.viewCtrl.dismiss();
       localStorage.setItem('loginData',JSON.stringify(response));
     });
  }

  mostrarMensaje() {
    const toast = this.toastCtrl.create({
      message: 'Login exitoso',
      duration: 3000
    });
    toast.present();
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

}

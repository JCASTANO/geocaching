import { LoginPage } from './../pages/login/login';
import { AboutPage } from './../pages/about/about';
import { TabsPage } from './../pages/tabs/tabs';
import { PerfilPage } from './../pages/perfil/perfil';
import { LugarPage } from './../pages/lugar/lugar';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LugaresService } from '../services/lugares.service';
import { AuthService } from '../services/auth.service';

export const firebaseConfig = {
    apiKey: "AIzaSyBXJZk4E3hgsIpjKFlJ3VFPQYFgfTAXr0I",
    authDomain: "ionicbasicplatzi-a3680.firebaseapp.com",
    databaseURL: "https://ionicbasicplatzi-a3680.firebaseio.com",
    projectId: "ionicbasicplatzi-a3680",
    storageBucket: "ionicbasicplatzi-a3680.appspot.com",
    messagingSenderId: "441734257750"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    AboutPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    AboutPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LugaresService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

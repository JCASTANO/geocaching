import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    
    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

    }

    loginFacebook() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    logout() {
        return this.afAuth.auth.signOut();
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Subject} from 'rxjs/Rx';
declare var firebase: any;

interface UserDetails{
    name?: string,
    email?: string,
    role?: string,
    uid?: string
}

@Injectable()
export class AppService {

  public isLoggedIn: boolean = false;
  public userDetails: UserDetails = <UserDetails>{};//current user details.
  private loginObservable: Subject<boolean> = new Subject<boolean>();

  constructor(public http: Http) {
  }

    public login(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      return firebase.auth().getRedirectResult().then(function(result) {
              }).catch(function(error) {
                return false
              });
    }

}

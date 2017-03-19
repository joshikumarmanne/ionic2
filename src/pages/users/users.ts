import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';
import { AngularFire } from 'angularfire2';


/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  user = {}
  constructor(private service: AppService, private af: AngularFire) {

  }

  submitUser(){
    this.service.postUser(this.user)
  }

}

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
  data = { }
  users:any;
  userSelect: any;
  selectedUsers:any
  constructor(private service: AppService, private af: AngularFire) {
    this.userSelect = 'form';
      this.service.getUsers().subscribe((data)=>{
        this.users = Object.keys(data).map((key) => {
                      let tempTask = data[key]
                      tempTask.id  = key;                        
                      return tempTask
      });
      
    })
  }

  submitUser(){
    this.service.postUser(this.user)
  }

  submitUserAmount(){
    this.data['user'] = this.selectedUsers[0]
    this.service.postUserAmount(this.data);
  }
}

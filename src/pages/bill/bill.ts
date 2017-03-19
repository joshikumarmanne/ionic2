import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage {
  users: any;
  selectedUsers:any
  data = {}
  constructor(public navCtrl: NavController,  private service: AppService, private af: AngularFire) {
    this.service.getUsers().subscribe((data)=>{
      this.users = Object.keys(data).map((key) => {
                    let tempTask = data[key]
                    tempTask.id  = key;                        
                    return tempTask
    });
    
    })
  }

  submitBudget(){
    this.data['users'] = this.selectedUsers 
    this.service.addBudget(this.data)
    //console.log(this.data)
  }

  checkAll(){
    console.log("kkkkkkkkkkkkkk")
  }

}
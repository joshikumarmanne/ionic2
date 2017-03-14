import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppService]
})
export class HomePage {

  constructor(public navCtrl: NavController,   private service: AppService) {

  }
  login(){
    this.service.login().then((data)=>{
      
    })
  }

}

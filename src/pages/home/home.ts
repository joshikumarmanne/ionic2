import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { BillPage } from '../bill/bill';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppService]
})
export class HomePage {
  
  data = {}
  constructor(public navCtrl: NavController,  private service: AppService, private af: AngularFire) {

  }

  submitBudget(){
    this.service.addBudget(this.data)
  }

}

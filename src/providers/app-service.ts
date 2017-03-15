import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Subject, Observable} from 'rxjs/Rx';
import { NavController } from 'ionic-angular';
import { BillPage } from '../pages/bill/bill';
import { AngularFire } from 'angularfire2';
;
import { AlertController } from 'ionic-angular';

@Injectable()
export class AppService {

  constructor(public http: Http, private alertCtrl: AlertController, private af: AngularFire) {

  }

  addBudget(data){
     this.af.database.object('/months/january/'+data.date).set({'total': data.total}).then((data)=>{
          let alert = this.alertCtrl.create({
                title: 'Low battery',
                subTitle: '10% of battery remaining',
                buttons: ['Dismiss']
            });
            alert.present();
      })
  }
}

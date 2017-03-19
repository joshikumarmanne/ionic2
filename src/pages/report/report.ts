import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  users: any;
  selectedUsers:any;
  selectedUser:any;
  data = {};
  reports:any;
  sum:any = 0;
  amount:any

  constructor(private service: AppService, private af: AngularFire, private loadingCtrl: LoadingController) {
    this.service.getUsers().subscribe((data)=>{
      this.users = Object.keys(data).map((key) => {
                    let tempTask = data[key]
                    tempTask.id  = key;                        
                    return tempTask
    });
    
    })
  }

  generateReport(){
    let loading = this.loadingCtrl.create({
      content: 'Generating.....'
    });

    loading.present();
    this.data['users'] = this.selectedUsers[0]
    this.data['user'] = this.selectedUser;
    this.af.database.object('/usage/'+ this.data['users']+ '/'+ this.data['month']).subscribe((res)=>{
      if (res){
        this.amount = res.amount;
        this.reports = Object.keys(res.dates).map((key)=>{
          let usage = res.dates[key]
          usage.date = key
          this.sum += parseFloat(res.dates[key]['dividend'])
          return usage  
        });
        loading.dismiss();
      }else{
        this.reports = [];
        loading.dismiss();
      }
    })
  }
}

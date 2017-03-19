import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AppService {

  
  months = ['January', 'Febraury', 'March', 'April']

  constructor(public http: Http, private alertCtrl: AlertController, private af: AngularFire) {

  }

  addBudget(data){
     this.af.database.object('/months/'+data.month+'/'+data.date).set({'total': data.total, 'users': data.users.length, 'comment': data.comment}).then((object)=>{
          
          let count = data.total/data.users.length;
          for (let user of data.users){
            this.af.database.object('/usage/'+ user +'/'+ data.month +'/dates/'+ data.date).set({'total': data.total, 'dividend': count, 'comment': data.comment}).then((data)=>{

            })
          }

          let alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Successfully Created',
                buttons: ['ok']
            });
            alert.present();
          
      })
  }

  getUsers(){
     return this.af.database.list('/users')
  }

  postUser(user){
    this.af.database.list('/users').push({'name': user.name}).then((data)=>{
      let alert = this.alertCtrl.create({
                title: 'success',
                subTitle: 'Successfully Created',
                buttons: ['Dismiss']
            });
            alert.present();
    })
  }

  postUserAmount(data){
    this.af.database.list('/usage/'+data.user).update(data.month, {'amount': data.amount}).then((data)=>{
      let alert = this.alertCtrl.create({
                title: 'success',
                subTitle: 'Successfully Created',
                buttons: ['Dismiss']
            });
            alert.present();
    })
  }

  generateReport(data){
    return this.af.database.object('/usage/'+ data.user+ '/'+ data.month).subscribe((data)=>{
      return data;
    })

  }
}

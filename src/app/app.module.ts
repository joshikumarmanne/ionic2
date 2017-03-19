import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';
import { UsersPage } from '../pages/users/users';
import { ReportPage } from '../pages/report/report';
import { AppService } from '../providers/app-service';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
      apiKey: "AIzaSyCpnF9Nq20yJrqbtpPfLkmNu-_LDB7QVQo",
    authDomain: "ionic-b5106.firebaseapp.com",
    databaseURL: "https://ionic-b5106.firebaseio.com",
    storageBucket: "ionic-b5106.appspot.com",
    messagingSenderId: "1038947979909"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BillPage,
    UsersPage,
    ReportPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BillPage,
    UsersPage,
    ReportPage
  ],
  providers: [AppService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

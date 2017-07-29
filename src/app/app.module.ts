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
    apiKey: "***",
    authDomain: "***",
    databaseURL: "***",
    storageBucket: "***",
    messagingSenderId: "***"
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

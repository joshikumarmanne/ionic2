import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';
import { AppService } from '../providers/app-service';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
      apiKey: "AIzaSyDrT61-zg-FuonOa4sDbChuRXk8d2mx-p8",
      authDomain: "fir-89d50.firebaseapp.com",
      databaseURL: "https://fir-89d50.firebaseio.com",
      storageBucket: "fir-89d50.appspot.com",
      messagingSenderId: "936509313976"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BillPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BillPage
  ],
  providers: [AppService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

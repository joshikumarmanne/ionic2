import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';
import { UsersPage } from '../pages/users/users';
import { ReportPage } from '../pages/report/report';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  billPage = BillPage;
  usersPage = UsersPage;
  reportPage = ReportPage

  @ViewChild('content') nav ;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page){
    this.nav.push(page)
  }

}

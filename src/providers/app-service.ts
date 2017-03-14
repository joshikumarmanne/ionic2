import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { database } from "firebase";


@Injectable()
export class AppService {

  constructor(public http: Http) {
    console.log('Hello AppService Provider');
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the GlobalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalStorageProvider {

  constructor(public http: Http,private storage: Storage) {
    console.log('Hello GlobalStorageProvider Provider');
  }
  setStorage(key, val) {
    this.storage.set(key, val);
  }

  getStorage(key) {
    return this.storage.get(key);
    //   .then((val) => {
    //   console.log('globalstorage return is ', val);
    // });
  }
}

import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class MystoragecapService {

  constructor() {  }

async setdata(key:string, data:any){
  Preferences.set({
    key:key,
    value:data
  });
}

  getdata(key:string){
  return Preferences.get({key:key});
}

}



//Pasos

// 1 npm install @capacitor/preferencesp
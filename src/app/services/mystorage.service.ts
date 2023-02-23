import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class MystorageService {
   _storage:Storage | null = null;
   constructor(private storage:Storage) { 
    this.init;
   }

   async init(){
    const st  =  await this.storage.create();
    this._storage = st;
   }

  getdat(key: string){ 
    return this._storage?.get(key);
   
   }

  setdata(key:string, datos:any){
    this._storage?.set(key,datos);
  }

 }



//pasos storage
// 1.  npm install @ionic/storage-angular
// 2.   importar en app.module.ts  IonicStorageModule.forRoot()  .forRoot() es para que cargue inmediatamente
// 3.  Crear el servicio ionic g service services/mystorage
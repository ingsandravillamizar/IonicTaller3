import { Injectable, Input, OnInit } from '@angular/core';
import { promises } from 'dns';
import { Usuario } from '../models/usuario';
import { RegistroPageRoutingModule } from '../pages/registro/registro-routing.module';
import { MystorageService } from './mystorage.service';
import { MystoragecapService } from './mystoragecap.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
  newUser: Usuario   ;
  listaUsers:Array<Usuario>=[];
 
  logeado:boolean = false
  constructor(private storage: MystorageService,
    private mystoragecap: MystoragecapService) {
    this.newUser=new Usuario; 
   //setTimeout(() => {
    this.storage.getdat('info')?.then((data:Array<Usuario>)=>{
      
      if (data){
        this.listaUsers = data;
        this.newUser = data[data.length-1];
        console.log(this.listaUsers);
        this.logeado = true;
      }
      this.mystoragecap.getdata('info').then((data:any)=>{
        console.log("capacitor storage");
        console.log(data.value);
      });
     

    });
   //}, 20);
 }

//Para guardar un uusario
// export class UsuarioService implements OnInit {
//   newUser: Usuario   ;
//   listaUsers:Array<Usuario>=[];
 
//   logeado:boolean = false
//   constructor(private storage: MystorageService) {
//     this.newUser=new Usuario; 
//    //setTimeout(() => {
//     this.storage.getdat('info')?.then((data:Usuario)=>{
//       this.newUser = data;
//       console.log("aqui..............");

//     });
//    //}, 20);
//  }



  ngOnInit(): void {
 
  }

  logear(U:string, P:string){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(U==this.newUser.user && P == this.newUser.password){
        this.logeado  = true;
        console.log("quedo logeado")
        resolve(true);
      } else{
        this.logeado = false;
        reject(false);
      }
    },5000);
   });
  }


  registro(user:Usuario){
    this.newUser = user;   //ultimo usuario
    this.listaUsers.push(user); //lista de usuarios
    //this.storage.setdata('info',user);
    this.storage.setdata('info', this.listaUsers); //voy a guardar la lista de usuarios
    this.mystoragecap.setdata('info', JSON.stringify( this.listaUsers));  //7con capacitor
    
  }

}




 
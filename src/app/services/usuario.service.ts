import { Injectable, Input } from '@angular/core';
import { promises } from 'dns';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  @Input() newUser: Usuario   ;
  
 
  logeado:boolean = false
  constructor() {this.newUser=new(Usuario);  }

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
}



 
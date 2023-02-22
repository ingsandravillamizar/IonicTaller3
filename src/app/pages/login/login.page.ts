import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
  logeado:boolean = false;

  loginn:Usuario;

  constructor(private mUserService:UsuarioService, private router:Router) 
  {    this.loginn = new Usuario; }

  ngOnInit() {
  }
   

   onSubmit(){ 
     this.mUserService.logear(this.loginn.user, this.loginn.password).then((val)=>{
       this.router.navigateByUrl('/tabs/tabs/tab1');
     }).catch((err)=>{
       console.log("Error en el login");
     })
    }



   





  
}

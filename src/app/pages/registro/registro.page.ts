import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  ngNombre:string = "";
  ngUser:string = "";
  ngPassword:string = "";
  ngEmail:string = "";

  registro:Usuario;
  constructor(private mUserService:UsuarioService, private router:Router              ) 
  {
    this.registro = new Usuario;
  }

  ngOnInit() {
  }



  onSubmit( ){
 
    console.log(this.registro);
    //this.mUserService.newUser = ( this.registro );  asignacio directa
    this.mUserService.registro (this.registro); //aprovechando el servicio   de usuario   opcion registro
    //console.log( "guardo", this.mUserService.newUser)
    this.router.navigateByUrl('/login')

  }

}

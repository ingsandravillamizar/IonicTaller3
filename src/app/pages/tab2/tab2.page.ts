import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Serviceorigentab } from 'src/app/services/serviceorigentab.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  registro:Usuario;
  constructor(private mservice:Serviceorigentab, public mUserService:UsuarioService) {
    this.registro = new Usuario;
  }

  ngOnInit():void{
  
  }

  ionViewWillLeave(){    this.mservice.origentab = "tab2";  }
  ionViewWillEnter(){ console.log("Viene de " + this.mservice.origentab);
   
  this.registro =    this.mUserService.newUser;
  }

   

  onSubmit(){
    this.mUserService.newUser = ( this.registro ); 

  };

}


 
import { Component , OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Serviceorigentab } from 'src/app/services/serviceorigentab.service';
import { UsuarioService } from 'src/app/services/usuario.service';
 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  // user:string = "";
  // password:string = "";
 
  User1 :Array<Usuario> = [];

  constructor(private mservice:Serviceorigentab, public mUserService:UsuarioService) {

    
  }


   

  ngOnInit():void{
   
  }
 

  ionViewWillLeave(){    this.mservice.origentab = "tab1";  }
  ionViewWillEnter(){ 
    console.log("Viene de " + this.mservice.origentab);
    console.log ( this.mUserService);
    //console.log ( "...", this.mUserService.newUser); 
    this.User1.length = 0;
    console.log(this.User1.length  );
    this.User1.push (this.mUserService.newUser) ;
 
  
  }

 
}

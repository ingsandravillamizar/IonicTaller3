import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
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

  constructor(private mUserService:UsuarioService, private router:Router,
    private loadingController: LoadingController,
    private toastController: ToastController) 
  {    this.loginn = new Usuario; }

  ngOnInit() {
   setTimeout(() => {
    console.log("hola");
    if (this.mUserService.logeado){
      this.router.navigateByUrl('/tabs/tabs/tab1')
    }
   }, 100);
  }
   
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Error en login',
    duration: 2000,
    color: "danger"
  });
  toast.present();
}

 
  async presentLoading() {
    
    
  }

   async onSubmit(){ 
    const loading = await this.loadingController.create({
      message: 'Logeando',
      // duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
     this.mUserService.logear(this.loginn.user, this.loginn.password).then((val)=>{
       this.router.navigateByUrl('/tabs/tabs/tab1');
       loading.dismiss();
     }).catch((err)=>{
       //console.log("Error en el login");
       this.presentToast();
       loading.dismiss();
     })
    }



   





  
}

import { Component, OnInit} from '@angular/core';
import { perfilService } from 'src/app/servicios/perfil.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-usuarios',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor (private sperfil: perfilService, private spedidos:PedidosService) {}


  usuario:any;
  localidad:any;
  pedidos:any;
  idusuario:any;
  nombre:any;
  clave:any;
  minfo=false;
  venta=false;
  vboton=false;
  user={
   Nombre:"",
   Correo:"",
   Telefono:"",
   Direccion:"",
   fo_localidad:0
  

  };

  // Para validar
validNombre=true;
validCorreo=true;
validclave=true;
validTelefono=true;
validDireccion=true;
validfo_rol=true;
validfo_localidad=true;



  ngOnInit():void{

    this.idusuario = sessionStorage.getItem('id'); 
    console.log("ID de usuario:", this.idusuario);
  

    this.consultalocali();



    


  }


  //valiar formulario

 validar (){
  if(this.user.Nombre== "" ){
    this.validNombre=false; 
  }else {this.validNombre=true
    
    }
  if(this.user.Correo== "" ){
        this.validCorreo=false; 
  }else {this.validCorreo=true
        
  }
  if(this.user.Direccion== "" ){
          this.validDireccion=false; 
  }else {this.validDireccion=true
          
  
            
  }
  if(this.user.Telefono== "" ){
    this.validTelefono=false; 
  }else {this.validTelefono=true
              
  }  
  
            
  
  if(this.user.fo_localidad== 0 ){
    this.validfo_localidad=false; 
  }else {this.validfo_localidad=true
              
  }    
  

  }


  consulta (){
    this.sperfil.consultar(this.nombre).subscribe((result:any)=>{
     this.usuario=result;
     console.log(this.usuario);

     if(this.usuario [0].validar=="valida") {
      console.log ("ver perfil");
      this.minfo=true;

      console.log('id', this.usuario.id_usuario);
      console.log('nombre', this.usuario.Nombre);
      console.log('correo', this.usuario.Correo);
      console.log('rol', this.usuario.fo_rol);
      console.log('Direccion', this.usuario.Direccion);
      console.log('Telefono', this.usuario.Telefono);
      console.log('Telefono', this.usuario.fo_localidad);
      
  
      sessionStorage.setItem('id', this.usuario.id_usuario);
      sessionStorage.setItem('Nombre', this.usuario.Nombre);
      sessionStorage.setItem('Correo', this.usuario.Correo);
      sessionStorage.setItem('rol', this.usuario.fo_rol);
      console.log(sessionStorage);
          
      }else {
        console.log (" sin información del perfil");
       
  
       } 
     })

    }


 //consulta localidad
 
 consultalocali (){
  this.sperfil.consultalocalidad().subscribe((result:any)=>{
   this.localidad=result;
   //console.log(this.usuario);
    
  })

}



//historial pedidos

hpedidos() {

this.spedidos.inforperfil(this.idusuario).subscribe((result:any)=>{
  this.pedidos=result;
  console.log(this.pedidos);
  this.venta=true;

   
 })


}






 
 

}      
  
  


  
  

  





  



 


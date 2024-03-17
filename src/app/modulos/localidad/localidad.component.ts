import { Component } from '@angular/core';
import { LocalidadService } from "src/app/servicios/localidad.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.scss']
})
export class LocalidadComponent {

  constructor (private slocalidad: LocalidadService) {}  


  ngOnInit():void{
  
    this.consulta ();
    this.limpiar();


  }


//variables globales 

verf=false;
localidad:any;
idlocalidad:any;

localidades = {
id_localidad:0,
nombre:"",
numero:0,

}

// Para validar
validid_localidad=true;
validnombre=true;
validnumero=true;
//boton editar
beditar=false;



//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  this.beditar=false;
  this.idlocalidad="";
  break;
  case 1:
  this.verf=true;
  break
    }
  }

//limpiar formulario
limpiar () {
  this.localidades.id_localidad=0;
  this.localidades.nombre="";
  this.localidades.numero=0;
  

}
//consultar formulario
consulta (){
  this.slocalidad.consultar().subscribe((result:any)=>{
   this.localidad=result;
   console.log(this.localidad);
    
  })
}

//valiar formulario
validar (){
  if(this.localidades.id_localidad==0 ){
    this.validid_localidad=false; 
  }else {this.validid_localidad=true
    
    }

    if(this.localidades.nombre=="" ){
      this.validnombre=false; 
    }else {this.validnombre=true  

}

if(this.localidades.nombre=="" ){
  this.validnombre=false; 
}else {this.validnombre=true 


}

if(this.localidades.numero==0 ){
  this.validnumero=false; 
}else {this.validnumero=true 


}
}

//ingresar datos al formulario
ingresar(){
  this.validar();
  
  console.log (this.localidades);
  
  if(this.validnombre==true && this.validnumero==true) {
  this.slocalidad.insertar(this.localidades).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
    
  this.consulta();  
  
 
  
  }
  
  });
  
  this.mostrar(0);
  this.limpiar();
  
  
  
  } else  this.alertaerror();
  }
  
  alertaerror(){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La información no esta completa!",
    });
    
  }


 // editar información
edita() {
  this.validar();
  if (this.validnombre == true && this.validnumero == true) {
    this.slocalidad.edit(this.localidades, this.idlocalidad).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        this.consulta();
      }
    });
    this.mostrar(0);
  }
}

  //borrar localidad

  borrarlocalidad(id:any){
    this.slocalidad.eliminar(id).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
      
      this.consulta();  
      }
  
  
  
  })
  
  }  


  preguntar (id:any, nombre:any) {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar esta localidad " + nombre + "?",
      text: "¡No podrá revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarlocalidad (id)
  
        Swal.fire({
          title: "¡Eliminado!",
          text: "Usuario eliminado.",
          icon: "success"
        });
      }
    });
  
  
  
  
  }


cargardatos(datos:any, id:number){

    console.log (datos);
    this.localidades.nombre=datos.nombre;
    this.localidades.numero=datos.numero;
    this.mostrar(1);
    this.beditar=true;
    this.idlocalidad=id;
    
    
    }  
  
}










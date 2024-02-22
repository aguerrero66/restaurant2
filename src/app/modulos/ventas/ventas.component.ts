import { Component } from '@angular/core';
import { ventasService } from "src/app/servicios/ventas.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent {


  constructor (private sventas: ventasService) {}  

  ngOnInit():void{
  this.consulta();
  this.consultap();
 this.limpiar();  
  
  }


 //variables globales 

verf=false;
venta:any;
idventa:any
Productos:any;

ventas= {

id_ventas:0,
fecha_venta: new Date (),
productos_vendidos:0,
total_ventas:0,
fo_productos:0,

}

// Para validar
validid_ventas=true;
validnombre=true;
validfecha_venta=true;
validproductosvendidos=true;
validtotal_ventas=true;
validfo_productos=true;
//boton editar
beditar=false;


//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  this.beditar=false;
  this.idventa="";
  break;
  case 1:
  this.verf=true;
  break
    }
  }


 //limpiar formulario
limpiar () {
  this.ventas.id_ventas=0;
  this.ventas.fecha_venta=new Date();
  this.ventas.productos_vendidos=0;
  this.ventas.total_ventas=0;
  this.ventas.fo_productos=0; 



}





//consultar formulario
consulta (){
  this.sventas.consultar().subscribe((result:any)=>{
   this.venta=result;
   console.log(this.venta);
    
  })

}

consultap (){
  this.sventas.consultarp().subscribe((result:any)=>{
   this.Productos=result;
   console.log(this.Productos);
    
  })

}

//valiar formulario
validar (){
  if(this.ventas.id_ventas==0 ){
    this.validid_ventas=false; 
  }else {this.validid_ventas=true
    
    }
  if(this.ventas.fecha_venta==new Date() ){
        this.validfecha_venta=false; 
  }else {this.validfecha_venta=true
        
  }
  if(this.ventas.productos_vendidos== 0 ){
          this.validproductosvendidos=false; 
  }else {this.validproductosvendidos=true
          
  }
  if(this.ventas.total_ventas== 0 ){
      this.validtotal_ventas=false; 
  }else {this.validtotal_ventas=true
            
  }
  if(this.ventas.fo_productos== 0 ){
    this.validfo_productos=false; 
  }else {this.validfo_productos=true
              
  }  

}

//ingresar datos al formulario
ingresar(){
  this.validar();
  
  console.log (this.Productos);
  console.log (this.ventas);
  
  
  if(this.validfecha_venta==true && this.validproductosvendidos==true && this.validtotal_ventas==true && this.validfo_productos) {
  this.sventas.insertar(this.ventas).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
    
  this.consulta();  
  this.consultap();
 
  
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


  edita(){
    this.validar();
    if(this.validfecha_venta==true && this.validproductosvendidos==true && this.validtotal_ventas==true && this.validfo_productos) {
      this.sventas.insertar(this.ventas).subscribe((datos:any) => {
      if(datos['resultado']=='OK') {
  if(datos['resultado']=='OK'){
  
  this.consulta();  
  }
  }
  });
  this.mostrar(0);
  
  
  
  }
  }

  borraruser(id:any){
    this.sventas.eliminar(id).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
      
      this.consulta();  
      }
  
  
  
  })
  
  }  


  preguntar (id:any, nombreProducto:any) {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar el producto  " + nombreProducto + "?",
      text: "¡No podrá revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borraruser (id)
  
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
    this.ventas.fecha_venta=datos.fecha_venta;
    this.ventas.productos_vendidos=datos.productos_vendidos;
    this.ventas.total_ventas=datos.total_ventas;
    this.ventas.fo_productos=datos.fo_productos;
    this.mostrar(1);
    this.beditar=true;
    this.idventa=id;
    
    
    }  
  
}


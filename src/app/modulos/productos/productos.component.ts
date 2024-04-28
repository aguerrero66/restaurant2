import { Component } from '@angular/core';
import { productosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

//variables globales
  verf=false;
  producto:any;
  idproduct:any;
  product ={
  nombre:"",
  fecha_productos:new Date (),
  precio_venta:0,
  precio_neto:0,
  cantidad:0,
  
  }
  
  // Para validar
  validnombre=true;
  validprecio_venta=true;
  validfecha_productos=true;
  validcprecio_neto=true;
  validcantidad=true;

  
  //boton editar
  beditar=false;
  
  
  
  
    constructor (private sproductos: productosService) {}
  
    ngOnInit():void{
      this.consultap();
      this.limpiar();
      
    }

    //limpiar formulario
limpiar () {
  this.product.nombre="";
  this.product.fecha_productos=new Date();
  this.product.precio_venta=0;
  this.product.precio_neto=0;
  this.product.cantidad=0;
}
  
  
    //mostrar formulario
   mostrar (dato:any) {
      switch(dato){
      case 0:
      this.verf=false;
      this.beditar=false;
      this.idproduct="";
      break;
      case 1:
      this.verf=true;
      break
    }
  
  
    }
    
 //consultar formulario
 consultap (){
  this.sproductos.consultar().subscribe((result:any)=>{
   this.producto=result;
   console.log(this.producto);
    
  })

}
//validar productos

validar (){
  if(this.product.nombre== "" ){
    this.validnombre=false; 
  }else {this.validnombre=true
    
    }
    if(this.product.fecha_productos== new Date () ){
      this.validfecha_productos== false; 
    }else {this.validfecha_productos=true
      
      }

  if(this.product.precio_venta==0 ){
        this.validprecio_venta=false; 
  }else {this.validprecio_venta=true
        
  }
  if(this.product.precio_neto==0 ){
          this.validcprecio_neto=false; 
  }else {this.validcprecio_neto=true
          
  }
  if(this.product.cantidad==0 ){
      this.validcantidad=false; 
  }else {this.validcantidad=true
            
  }

  
  }

// ingresar productos

ingresar(){
  this.validar();
  

  
  if(this.validnombre==true && this.validfecha_productos==true && this.validprecio_venta==true && this.validcprecio_neto==true ) {
  this.sproductos.insertar(this.product).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
  this.consultap();  
  
  }
  
  });
  
  this.mostrar(0);
  this.limpiar();
  
  
  
  } else "información incompleta";
  }


  //editar productos
edita(){
this.validar();
if(this.validnombre==true && this.validfecha_productos==true && this.validprecio_venta==true && this.validcprecio_neto==true && this.validcantidad ) {
this.sproductos.edit (this.product, this.idproduct).subscribe((datos:any) => {
if(datos['resultado']=='OK'){
  
  this.consultap();  
  }
  
  });
  this.mostrar(0);
  
  
  
  }
  }

  //preguntar 
  preguntar (id:any, Nombre:any) {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar el producto  " + Nombre + "?",
      text: "¡No podrá revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarproduct (id)
  
        Swal.fire({
          title: "¡Eliminado!",
          text: "Usuario eliminado.",
          icon: "success"
        });
      }
    });
  



 
  

  }



  borrarproduct(id:any){
    this.sproductos.eliminar(id).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
      
      this.consultap();  
      }
  
  
  
  })
  
  } 



//cargar datos 
 cargardatos(datos:any, id:number){

    //console.log (datos);
    this.product.nombre=datos.nombre;
    this.product.fecha_productos=datos.fecha_productos;
    this.product.precio_venta=datos.precio_venta;
    this.product.precio_neto=datos.precio_neto;
    this.product.cantidad=datos.cantidad;
    this.mostrar(1);
    this.beditar=true;
    this.idproduct=id;
    
    
    }
    
  
                        
}

  
 


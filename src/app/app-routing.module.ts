import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { LoginComponent } from './modulos/login/login.component';
import { ValidacionUserGuard } from './guards/validacionuser.guard';
import { InicioComponent } from './modulos/inicio/inicio.component';

import { ComprasComponent } from './modulos/compras/compras.component';
import { VentasComponent } from './modulos/ventas/ventas.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { PedidosComponent } from './modulos/pedidos/pedidos.component';
import { NotificacionesComponent } from './modulos/notificaciones/notificaciones.component';
import { LocalidadComponent } from './modulos/localidad/localidad.component';
import { RolComponent } from './modulos/rol/rol.component';



const routes: Routes = [
{path:'', component:PrincipalComponent,
  canActivate:[ValidacionUserGuard],
  children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'Usuarios', component:UsuariosComponent},
   {path:'Productos', component:ProductosComponent},
    {path:'Inicio', component:InicioComponent},
    {path:'Compras', component:ComprasComponent},
    {path:'ventas', component:VentasComponent},
    {path:'Notificaciones', component:NotificacionesComponent},
  {path:'Pedidos', component:PedidosComponent},
  {path:'Localidad', component:LocalidadComponent}, 
  {path:'Rol', component:RolComponent},
  
  
  

  ]


},
{path: 'login', component:LoginComponent },


];





//cost router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

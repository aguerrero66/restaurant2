import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modulos/login/login.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { VentasComponent } from './modulos/ventas/ventas.component';
import { ComprasComponent } from './modulos/compras/compras.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { PedidosComponent } from './modulos/pedidos/pedidos.component';
import { NotificacionesComponent } from './modulos/notificaciones/notificaciones.component';
import { LocalidadComponent } from './modulos/localidad/localidad.component';
import { RolComponent } from './modulos/rol/rol.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    UsuariosComponent,
    LoginComponent,
    ProductosComponent,
    VentasComponent,
    ComprasComponent,
    InicioComponent,
    PedidosComponent,
    NotificacionesComponent,
    LocalidadComponent,
    RolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

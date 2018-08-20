import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MostrarCompuComponent } from './mostrar-compu/mostrar-compu.component';
import { IngresarCompuComponent } from './ingresar-compu/ingresar-compu.component';
import { IngresarMonitorComponent } from './ingresar-monitor/ingresar-monitor.component';

import {AppRoute} from "./app.route";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TablaComponent } from './tabla/tabla.component';
import { MostrarMonitorComponent } from './mostrar-monitor/mostrar-monitor.component';
import { IngresarImpresoraComponent } from './ingresar-impresora/ingresar-impresora.component';
import { IngresarTecladoComponent } from './ingresar-teclado/ingresar-teclado.component';
import { IngresarSoftwareComponent } from './ingresar-software/ingresar-software.component';
import { MostrarSoftwareComponent } from './mostrar-software/mostrar-software.component';
import { MostrarTecladoComponent } from './mostrar-teclado/mostrar-teclado.component';
import { MostrarImpresoraComponent } from './mostrar-impresora/mostrar-impresora.component';
import {RouterModule} from "@angular/router";
import {UsuarioServicio} from "./servicios/usuario.servicio";
import {ItemServicio} from "./servicios/item.servicio";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MostrarCompuComponent,
    IngresarCompuComponent,
    IngresarMonitorComponent,
    NavBarComponent,
    TablaComponent,
    MostrarMonitorComponent,
    IngresarImpresoraComponent,
    IngresarTecladoComponent,
    IngresarSoftwareComponent,
    MostrarSoftwareComponent,
    MostrarTecladoComponent,
    MostrarImpresoraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      AppRoute,{
        useHash: true
      }
    )
  ],
  providers: [HomeComponent, UsuarioServicio, ItemServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }

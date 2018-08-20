import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {IngresarCompuComponent} from "./ingresar-compu/ingresar-compu.component";
import {MostrarCompuComponent} from "./mostrar-compu/mostrar-compu.component";
import {IngresarMonitorComponent} from "./ingresar-monitor/ingresar-monitor.component";
import {MostrarMonitorComponent} from "./mostrar-monitor/mostrar-monitor.component";
import {IngresarTecladoComponent} from "./ingresar-teclado/ingresar-teclado.component";
import {MostrarTecladoComponent} from "./mostrar-teclado/mostrar-teclado.component";
import {IngresarImpresoraComponent} from "./ingresar-impresora/ingresar-impresora.component";
import {MostrarImpresoraComponent} from "./mostrar-impresora/mostrar-impresora.component";
import {IngresarSoftwareComponent} from "./ingresar-software/ingresar-software.component";
import {MostrarSoftwareComponent} from "./mostrar-software/mostrar-software.component";
import {ModuleWithProviders} from "@angular/core";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

export const AppRoute: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavBarComponent},
  { path: 'ingresar-computadora', component: IngresarCompuComponent},
  { path: 'mostrar-computadora', component: MostrarCompuComponent},
  { path: 'ingresar-monitor', component: IngresarMonitorComponent},
  { path: 'mostrar-monitor', component: MostrarMonitorComponent},
  { path: 'ingresar-teclado', component: IngresarTecladoComponent},
  { path: 'mostrar-teclado', component: MostrarTecladoComponent},
  { path: 'ingresar-impresora', component: IngresarImpresoraComponent},
  { path: 'mostrar-impresora', component: MostrarImpresoraComponent},
  { path: 'ingresar-software', component: IngresarSoftwareComponent},
  { path: 'mostrar-software', component: MostrarSoftwareComponent},
];

export const routing:ModuleWithProviders = RouterModule.forRoot(AppRoute);

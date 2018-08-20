import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioServicio} from "../servicios/usuario.servicio";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioServicio]
})
export class LoginComponent implements OnInit {

  usuario = "";
  password = "";
  resultado;
  estadoUsu = false;
  estadoPass = false;
  estadoLogin = false;
  usuLog:string;

  constructor(private _usuarioService: UsuarioServicio,
              private _router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.usuario === "" && this.password === "") {
      this.estadoUsu = true;
      this.estadoPass = true;
      console.log("Error campos vacios");
    }
    else {
      this._usuarioService.getUsuarioLogin(this.usuario, this.password).subscribe(
        (result: any) => {
          this.resultado = result;
          if(this.resultado) {
            this._router.navigate(['/home']);
            console.log("home");
          }
          else {
            this.estadoLogin = true;
            console.log("Error");
          }
        }
      )
    }
  }
}

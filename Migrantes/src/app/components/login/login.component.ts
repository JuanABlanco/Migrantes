import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  nombre = new FormControl('', [Validators.required]);
  apellido = new FormControl('', [Validators.required]);
  rEmail = new FormControl('', [Validators.required, Validators.email]);
  rPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  hide = true;
  constructor() { }

  ngOnInit() {
  }
  login(){

  }
  Registro(){

  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'debe ingresar un valor' :
        this.email.hasError('email') ? 'este correo no es valido' :
        '';
  }
  getErrorPassword(){
    return this.password.hasError('required') ? 'debe ingresar un valor':
    this.password.hasError('minlength') ? 'Debe tener al menos 8 caracteres' :
    '';
    
  }
  getErrorNombre(){
    return this.password.hasError('required') ? 'debe ingresar un valor':
    '';
    
  }
  getErrorApellido(){
    return this.password.hasError('required') ? 'debe ingresar un valor':
    '';
    
  }
  getErrorConfirm(){
    return this.password.hasError('required') ? 'debe ingresar un valor':
    this.password.hasError('minlength') ? 'Debe tener al menos 8 caracteres' :
    '';
    
  }
}

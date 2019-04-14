import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service'
import { AngularFirestore } from "@angular/fire/firestore";
import { Router} from "@angular/router";

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

  constructor(public afs: AngularFirestore, public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  Login(){
    this.authService.emailAndPassword(this.email.value, this.password.value).then(credentials => {
      // SweetAlert success -- > 
      alert("login exitoso");
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      alert(err.message);
    })
  }

  Registro() {
    if(this.rPassword.value == this.confirmPassword.value){
      this.authService.signUp(this.rEmail.value, this.rPassword.value).then((userCredentials) => {
        const FireUser = userCredentials.user;
  
        const data = {
          uid: FireUser.uid,
          email: this.rEmail.value,
          name: this.nombre.value,
          lastname: this.apellido.value,
  
        };
      
        this.afs.collection('users').doc(FireUser.uid).set(data)
        .then(()=> {
          this.authService.emailAndPassword(this.rEmail, this.rPassword).then(() => {
          alert('registro exitoso')
          this.router.navigate(['/login]']);
          }).catch(err => {
            alert(err.message);
          })
        }).catch(err => {
          alert(err.message);
        })
      }).catch(err => {
        alert(err.message);
      })
    }else{

      alert("Los passwords no coinciden");
      this.nombre.setValue('');
      this.apellido.setValue('');
      this.rEmail.setValue('');
      this.rPassword.setValue('');
      this.confirmPassword.setValue('');
    }
    
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FireErrorService {

  constructor() { }

  codeError(code: string) {
    console.log(code)
    switch (code) {
      //correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      
       //contraseña debil
      case 'auth/weak-password':
        return 'La contraseña es muy débil';
      
        //correo invalido
      case 'auth/invalid-email':
        return 'El correo electrónico es inválido';
      
        //contraseña incorrecta      
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      
        //usuario no existe
      case 'auth/user-not-found':
        return 'El usuario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
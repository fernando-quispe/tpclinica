import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireErrorService {

  constructor() { }

  codeError(code: string) {
    console.log(code)
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña es muy débil';
      case 'auth/invalid-email':
        return 'El correo electrónico es inválido';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      case 'auth/user-not-found':
        return 'El usuario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
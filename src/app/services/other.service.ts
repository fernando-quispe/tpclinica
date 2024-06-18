import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ClinicaService } from './clinica.service';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OtherService {

  constructor(private authService: AuthService, private usuarioService: ClinicaService) { }
  
  getDocumentSnapshotDeUsuario(): Observable<any> {
    return this.authService.getUserID().pipe(
      switchMap(
          uid => this.usuarioService.getUserByID(uid)
      )
    );
  }

  getDataDeUsuario(): Observable<any> {
    return this.getDocumentSnapshotDeUsuario().pipe(
      map(
        ds => ds.data()
      )
    );
  }

  getRolActual() {
    return this.getDataDeUsuario().pipe(
      map(
        usuario => usuario.rol
      )
    );
  }
}
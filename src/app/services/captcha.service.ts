import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CaptchaService {

  private apiUrl = 'URL_DE_TU_SERVICIO_DE_VALIDACION';
  
  constructor(private http: HttpClient) {}

  validarCaptcha(token: string): Observable<any> {
    const data = { token };
    return this.http.post<any>(this.apiUrl, data);
  }
  
  getTokenClientModule(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
      return this.http.post<any>( 'http://0.0.0.0:5000/api/v1/verificar/' + token +'/', httpOptions)
        .pipe(
          map((response) => response),
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicaptchaService {

  constructor() { }

  arrayPalabras:string[] = ["ABHT1","AS68H","ASVRW","ADND23","ASBG2","ASGB3","GBH52","1A2ASD"];

  public pickearPalabraRandom(){
    //trae un numero de 0 a 99
    let numeroRandom = Math.floor(Math.random()*(6-0+1))+1;
    let palabraRandom = this.arrayPalabras[numeroRandom];
    return palabraRandom;
  }
}
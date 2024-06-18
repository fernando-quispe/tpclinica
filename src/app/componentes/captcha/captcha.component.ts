import { Component } from '@angular/core';
import { ReCaptchaV3Service, RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { CaptchaService } from '../../services/captcha.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [NgIf, RecaptchaV3Module, RecaptchaModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})

export class CaptchaComponent {
  public robot: boolean;
  public presionado: boolean;
 
  constructor( private httpService: CaptchaService,  private recaptchaV3Service: ReCaptchaV3Service) {
    this.robot = true;
    this.presionado = false;
  }
 
  ngOnInit(): void {
    this.robot = true;
    this.presionado = false;
  }
 
  getInfoRecaptcha() {
    this.robot = true;
    this.presionado = true;
    this.recaptchaV3Service.execute('')
      .subscribe((token) => {
          const auxiliar = this.httpService.getTokenClientModule(token)
          auxiliar.subscribe( {
            complete: () => {
              this.presionado = false;
            },
            error: () => {
              this.presionado = false;
              this.robot = true;
              alert('Tenemos un problema, recarga la página para solucionarlo o contacta con fernandoquispe.utn@gmail.com');
            },
            next: (resultado: Boolean) => {
              if (resultado === true) {
                this.presionado = false;
                this.robot = false;
              } else {
                alert('Error en el captcha. Eres un robot')
                this.presionado = false;
                this.robot = true;
              }
            }
          });
        }
      );
  }
}
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favbutton',
  standalone: true,
  imports: [NgFor],
  templateUrl: './favbutton.component.html',
  styleUrl: './favbutton.component.css',
  animations: [
    trigger('listAnimation', [state('hidden', style({ opacity: 0, height: '0px', })),
                              state('visible',style({ opacity: 1, height: 'auto',})),
                              transition('hidden => visible', animate('0.5s ease-in-out')),
                              transition('visible => hidden', animate('0.5s ease-in-out')),
    ]),
  ],
})

export class FavbuttonComponent {
  @Input() imageUrl: string = '';
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<{email: string; password: string;}>();

  dataArray: { img: string; mail: string; contrasena: string }[] = [
    { img: '../../../assets/admin1.jpeg',
      mail: 'fernandoquispe.utn@gmail.com',
      contrasena: '123456',
    },
    { img: '../../../assets/especialista02.jpg',
      mail: 'lourdesriveramartinez1954@gmail.com',
      contrasena: '123456',
    },
    { img: '../../../assets/paciente111.jpg',
      mail: 'santosquispe1950@gmail.com',
      contrasena: '123456',
    }
  ];

  handleLinkClick(email: string, password: string) {
    this.buttonClick.emit({ email, password });
  }
}
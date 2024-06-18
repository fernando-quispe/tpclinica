import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClinicaService } from '../../../services/clinica.service';
import { AuthService } from '../../../services/auth.service';
import { getDownloadURL, uploadBytes, ref, Storage } from '@angular/fire/storage';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { CaptchaComponent } from '../../captcha/captcha.component';

@Component({
  selector: 'app-alta-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, SpinnerComponent, RecaptchaV3Module, CaptchaComponent],
  templateUrl: './alta-admin.component.html',
  styleUrl: './alta-admin.component.css'
})

export class AltaAdminComponent implements OnInit {

  admin: FormGroup;
  file: any;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clinicaFire: ClinicaService,
    private storage: Storage,
    private auth: AuthService
  ) {
    this.admin = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99), this.validarNumber ]],
      dni: ['', [Validators.required, this.validarNumber]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      imagen: [''],
      rol:['Administrador']
    });
  }

  ngOnInit(): void {}

  validarNumber(control: AbstractControl): object | null {
    const data = control.value;
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(data)) {
      return { soloNumeros: true };
    }
    return null;
  }

  uploadImage($even: any) {
    this.file = $even.target.files[0];
  }

  async addAdministrador() {
    try {
      this.loading = true;
      if(this.file) {
        const Url = await this.uploadFile(this.file);
        this.admin.patchValue({ imagen: Url });
      }
      const email = this.admin.value.mail;
      const password = this.admin.value.password;
      const respuesta = await this.auth.registerUser(email, password);
      
      if(respuesta){
        console.log('Se creo un nuevo registro')
        const id = respuesta.user.uid;
        console.log(id);
        this.admin.patchValue({password: '' });
        const admin = this.admin.value;
        await this.clinicaFire.addAdministrador(admin,id)
      }
      this.admin.reset()
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      this.loading = false;
    }
  }

  //subiendo imagenes
  async uploadFile(file: any) {
    const imgRef = ref(this.storage, `images/${this.file.name}`);
    const snapshot = await uploadBytes(imgRef, file);
    return await getDownloadURL(imgRef);
  }
}
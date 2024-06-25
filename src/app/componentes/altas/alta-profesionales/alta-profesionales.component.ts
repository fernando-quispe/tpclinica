import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClinicaService } from '../../../services/clinica.service';
import { AuthService } from '../../../services/auth.service';
import { Profesional } from '../../../interfaces/profesional';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import Especialidad from '../../../interfaces/especialidad';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { CaptchaComponent } from '../../captcha/captcha.component';
import { TablaEspecialidadComponent } from '../../tabla-especialidad/tabla-especialidad.component';
import { MicaptchaService } from '../../../services/micaptcha.service';
import { FireErrorService } from '../../../services/fire-error.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-alta-profesionales',
  standalone: true,
  imports: [NgFor, NgIf, SpinnerComponent, RecaptchaV3Module, CaptchaComponent, RecaptchaFormsModule, 
            RecaptchaModule, ReactiveFormsModule, TablaEspecialidadComponent, ToastrModule],
  templateUrl: './alta-profesionales.component.html',
  styleUrl: './alta-profesionales.component.css'
})

export class AltaProfesionalesComponent {
  profesional: FormGroup;
  file: any;
  loading: boolean = false;
  especialidades: string[] = [];
  //siteKey: string;
  recaptcha: boolean = false;
  captchaGenerado: string;
  
 
  constructor(
    private fb: FormBuilder,
    private clinicaFire: ClinicaService,
    private storage: Storage,
    private auth: AuthService,
    private _captcha: MicaptchaService,
    private _fireError: FireErrorService,
    private toastr: ToastrService,
    //private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.captchaGenerado = this._captcha.pickearPalabraRandom();
    console.log(this.captchaGenerado);
    this.profesional = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99), this.validarNumber]],
      dni: ['', [Validators.required, this.validarNumber]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      imagen: [''],
      especialidades: this.fb.array([]),
      estado: ['Pendiente'],
      rol:['Profesional']
    });
    //this.siteKey = '6Lck3yApAAAAAD67G7-iTRntXQfLlcXcUHWiYdhh';
  }

  ngOnInit(): void { }

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
  


//funciona sin verificacion
  async addprofesional() {

    try {
      this.loading = true;
      if(this.file) {
        const Url = await this.uploadFile(this.file);
        this.profesional.patchValue({ imagen: Url });
      }
      const email = this.profesional.value.mail;
      const password = this.profesional.value.password;
      const respuesta = await this.auth.registerUser(email, password);
      
      if(respuesta){
        const id = respuesta.user.uid;
        this.profesional.patchValue({ password: '' });
        const profesional = this.profesional.value as Profesional;
        profesional.especialidades = this.especialidades;
        await this.clinicaFire.addProfesional(profesional, id);
        this.profesional.reset();        
      }  

    } catch (error) {
      //Identifico que el correo ya ha sido utilizado.
      console.log('Error: ', error);
      /*Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: ''
      });*/
    
    
    } finally {
      this.loading = false;
    }
  }



  async uploadFile(file: any) {
    const imgRef = ref(this.storage, `images/${this.file.name}`);
    const snapshot = await uploadBytes(imgRef, file);
    return await getDownloadURL(imgRef);
  }

  seleccionarEspecialidad(especialidad: Especialidad) {
    const existe = this.especialidades.find((a) => a === especialidad.nombre);
    if (!existe) {
      this.especialidades.push(especialidad.nombre);
    }
  }

  eliminarElemento(name: string ) {
    this.especialidades = this.especialidades.filter(especialidad => especialidad !== name);
  }

  handleSuccess($even:any):void {
    if($even){
      this.recaptcha = true;
    }
  }
}
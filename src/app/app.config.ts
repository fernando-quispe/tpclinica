import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { provideToastr } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
              provideRouter(routes), 
              provideToastr({timeOut: 3000, preventDuplicates: true}),
              importProvidersFrom(HttpClientModule),

              provideFirebaseApp(() => initializeApp({
                "projectId":"clinicaonline-cdb52",
                "appId":"1:588740852376:web:21f79ec97d0962e8596eed",
                "storageBucket":"clinicaonline-cdb52.appspot.com",
                "apiKey":"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",
                "authDomain":"clinicaonline-cdb52.firebaseapp.com",
                "messagingSenderId":"588740852376"})), 
                provideAuth(() => getAuth()), 
                provideFirebaseApp(() => initializeApp({
                "projectId":"clinicaonline-cdb52",
                "appId":"1:588740852376:web:21f79ec97d0962e8596eed",
                "storageBucket":"clinicaonline-cdb52.appspot.com",
                "apiKey":"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",
                "authDomain":"clinicaonline-cdb52.firebaseapp.com",
                "messagingSenderId":"588740852376"})), 
                provideFirestore(() => getFirestore()), 
                provideFirebaseApp(() => initializeApp({
                  "projectId":"clinicaonline-cdb52",
                  "appId":"1:588740852376:web:21f79ec97d0962e8596eed",
                  "storageBucket":"clinicaonline-cdb52.appspot.com",                  
                  "apiKey":"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",
                  "authDomain":"clinicaonline-cdb52.firebaseapp.com",
                  "messagingSenderId":"588740852376"})), 
                  provideStorage(() => getStorage()), provideAnimationsAsync(),
                  //{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Ld-oBgpAAAAAIqtf5385weDlA9hsPopf7BDqZQ0' }, para que no figure en todas las pag
                  ]
};
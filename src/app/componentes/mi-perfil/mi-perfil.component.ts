import { Component, OnInit } from '@angular/core';
//import pdfMake from 'pdfmake/build/pdfMake'; ultimo
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Turno } from '../../interfaces/turno';
import { OtherService } from '../../services/other.service';
import { TurnoService } from '../../services/turno.service';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

//pdfMake.vfs = pdfFonts.pdfMake.vfs; ultimo

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})

export class MiPerfilComponent implements OnInit {

  usuario: any;
  verHistoriaClinica: boolean = false;
  verMisAtenciones: boolean = false;
  turnos: Turno[] = [];
  miUID: string = '';
  idTipo: string = '';
  miRol: string = '';

  constructor(
    private otroService: OtherService,
    private turnoService: TurnoService
  ) {}

  ngOnInit(): void {
    this.otroService.getDataDeUsuario().subscribe((data) => {
      this.usuario = data;
    });
    this.otroService.getDocumentSnapshotDeUsuario().subscribe((ds) => {
      this.miRol = ds.data().rol;
      if (this.miRol === 'Administrador') {
        this.turnoService.getTurnos().subscribe((data) => (this.turnos = data));
      } else {
        this.miUID = ds.id;
        if (this.miRol === 'Paciente') {
          this.idTipo = 'idPac';
        } else if (this.miRol === 'Profesional') {
          this.idTipo = 'idEsp';
        }
        this.obtenerTurnos(this.idTipo, this.miUID);
      }
    });
  }
  
  obtenerTurnos(idTipo: string, miUID: string) {
    this.turnoService
      .getTurnoPorid(idTipo, miUID)
      .subscribe((data) => (this.turnos = data));
  }

  verMisAtencionesHandler() {}
  verMisHorariosHandler() {
    console.log('horarios');
  }
  verMiHistoriaClinicaHandler() {}

  async crearPdf() {
    const bodyData = [];
    bodyData.push(['Especialidad', 'Doctor', 'Historial', 'Fecha', 'Hora']);
  
    this.turnos.forEach((turno) => {
      const rowData = [
        turno.especialidad,
        this.miRol === 'Paciente' || this.miRol === 'Administrador'
          ? `${turno.especialista.nombre} ${turno.especialista.apellido}`
          : '',
        turno.historial
          ? `Altura: ${turno.historial.altura} - Peso: ${turno.historial.peso} - Temperatura: ${turno.historial.temperatura} \n Presion: ${turno.historial.presion} - Clave: ${turno.historial.clave1} - Valor: ${turno.historial.valor1}`
          : 'Sin Historial',
        turno.fecha,
        turno.hora,
      ];
  
      bodyData.push(rowData);
    });
  
    const docDefinition = {
      content: [
        {
          layout: 'noBorders',
          table: {
            widths: ['*', 'auto', '*'],
            body: [
              [
                {
                  image: await this.getBase64ImageFromURL(
                    "../../../assets/icono-clinica.png"
                  ),
                  width: 60, // Ajusta el ancho según tus necesidades
                  alignment: 'left',
                },
                {
                  text: 'Clínica Online', // Nombre de tu clínica
                  style: 'subheader',
                  alignment: 'center',
                },
                {
                  text: `${new Date().toLocaleDateString()}`, // Fecha de emisión
                  alignment: 'right',
                },
              ],
            ],
          },
        },
        { text: '\n' }, // Espacio entre el encabezado y la tabla
        {
          style: 'tableExample',
          table: {
            body: bodyData,
          },
        },
      ],
      /*probar cambios*/
      /*styles: {
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
      },*/
    };
  
    //pdfMake.createPdf(docDefinition).download('historial.pdf'); ultimo

    /*const pdf = await pdfMake.createPdf(docDefinition);
    pdf.download('historial.pdf');lo agregue*/
  }

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");    
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;    
        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);    
        var dataURL = canvas.toDataURL("image/png");    
        resolve(dataURL);
      };    
      img.onerror = error => {
        reject(error);
      };    
      img.src = url;
    });
  }  
  
  
 /*async getBase64ImageFromURL(imageUrl: string): Promise<string> {
  const response = await this.http.get(imageUrl, { responseType: 'blob' }).toPromise();
  const blob = response.body as Blob;
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString().split(',')[1]); // Extract base64 data
      } else {
        reject('Error converting image to base64');
      }
    };

    reader.readAsDataURL(blob);
  });
 }*/
}
import HistoriaClinica from "./historia-clinica";
import { Paciente } from "./paciente";
import { Profesional } from "./profesional";

export interface Turno {
    id?:string;
    idEsp: string;
    idPac: string;
    especialista: Profesional;
    paciente: Paciente;
    historial?: HistoriaClinica;
    fecha: string;
    hora:string;
    especialidad: string;
    estado: string;
    reviewEsp: string;
    reviewPac: string;
    razon?: string;
}
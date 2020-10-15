import { Injectable } from '@angular/core';
import { Paciente } from '../modelo/Paciente';
import { Sesion } from '../modelo/Sesion';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Array <Paciente> =[{
    "id":"1",
    "edad": 20,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "nombre": "Andrea",
    "apellido":"Oiene",
    "peso":80,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Femenino",
    "fechaIngreso":"11/12/2020",
    "numeroSesionesRealizadas":2,
  },
  {
    "id":"2",
    "nombre": "Juan",
    "edad": 27,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Flores",
    "peso":70,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Masculino",
    "fechaIngreso":"15/10/2020",
    "numeroSesionesRealizadas":2,
  },
  {
    "id":"3",
    "nombre": "Guido",
    "edad": 70,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Rossi",
    "peso":50,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Masculino",
    "fechaIngreso":"11/02/2020",
    "numeroSesionesRealizadas":2,
},
{
    "id":"4",
    "nombre": "Helena",
    "edad": 47,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Diaz",
    "peso":80,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Femenino",
    "fechaIngreso":"05/08/2020",
    "numeroSesionesRealizadas":0,
}]

private sesiones: Array <Sesion> =[{
  "id":"1",
  "fecha":"11/08/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"1",
  "fecha":"15/08/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"2",
  "fecha":"11/09/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"2",
  "fecha":"01/09/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"3",
  "fecha":"18/10/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"3",
  "fecha":"18/10/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"4",
  "fecha":"22/05/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"4",
  "fecha":"22/07/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},]

  constructor(private httpClien:HttpClient) { }
  public obtenerTodos(){
    return this.pacientes;
    //return this.httpClien.get<Paciente[]>("http://localhost:3000/pacientes");
  }
 
  public obtenerPorid(id:string){
    for(let paciente of this.pacientes){
      if(paciente.id == id){
        return paciente;
      }
    }
    //return this.httpClien.get<Paciente>("http://localhost:3000/pacientes/"+id);
  }
  public obtenerSesionPorfecha(fecha:string, id:string ){
    for(let sesion of this.sesiones){
      if(sesion.id == id){
        if(sesion.fecha == fecha){
        return sesion;
        }
      }
    }
    //return this.httpClien.get<Sesion>("http://localhost:3000/sesiones/id/"+fecha);
  }
  public obtenerSesionesPorid(id:string){
    let arreglo: Array<Sesion>=[];
    for (let sesion of this.sesiones) {
      if(sesion.id == id){
      arreglo.push(sesion);
      }
    }
    return arreglo;
    //return this.httpClien.get<Sesion[]>("http://localhost:3000/sesiones/"+id);
  }

  public agregar(paciente: Paciente) {
    // this.paciente.post(paciente);
   
   }
   public eliminar(id:string){
    alert("Se Borrará paciente   ");
    // this.httpClien.delete<paciente>("http://localhost:3000/paciente/"+id);
  }
}

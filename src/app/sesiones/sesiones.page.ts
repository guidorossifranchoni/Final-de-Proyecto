import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sesion } from '../modelo/Sesion';
import { PacienteService } from '../servicios/paciente.service';


@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.page.html',
  styleUrls: ['./sesiones.page.scss'],
})
export class SesionesPage implements OnInit {
  private sesiones: Array <Sesion>;

  constructor(private activateRoute:ActivatedRoute,private pacServ: PacienteService ) {}
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.sesiones = this.pacServ.obtenerSesionesPorid(paramMap.get("id"));
    });
    
  }
  /*this.activateRoute.paramMap.subscribe(paramMap => {
        this.pacServ.obtenerSesionesPorid(paramMap.get("id")).subscribe(datos => {
            this.sesiones = datos;
          });
    });*/

  public eliminar(id:string){
    
      // this.httpClien.delete<Sesion>("http://localhost:3000/sesiones/"+id);
    }
  public agregar(){
      
      // this.httpClien.push<Sesion>("http://localhost:3000/sesiones/");
    }
}

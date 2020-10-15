import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sesion } from '../modelo/Sesion';
import { PacienteService } from '../servicios/paciente.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
  private sesion = new Sesion();
  constructor(private activateRoute:ActivatedRoute,private pacServ: PacienteService ) { }
  
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.sesion = this.pacServ.obtenerSesionPorfecha(paramMap.get("fecha"), paramMap.get("id"));
    });
    /*this.activateRoute.paramMap.subscribe(paramMap => {
        this.pacServ.obtenerSesionPorfecha(paramMap.get("id"),paramMap.get("fecha")).subscribe(datos => {
            this.sesion = datos;
          });
    });*/
  }
}

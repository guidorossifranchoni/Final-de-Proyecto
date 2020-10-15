import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { Paciente } from '../modelo/Paciente';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {
  private paciente = new Paciente();
  constructor(private activateRoute:ActivatedRoute,private pacServ: PacienteService ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.paciente = this.pacServ.obtenerPorid(paramMap.get("id"));
    });
    /*this.activateRoute.paramMap.subscribe(paramMap => {
        this.pacServ.obtenerPorId(paramMap.get("id")).subscribe(datos => {
            this.paciente = datos;
          });
    });*/
  }
  
}

import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { Paciente } from '../modelo/Paciente';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    public paciente = new Paciente();
    
  
  constructor(private pacServ: PacienteService, private activateRoute:ActivatedRoute) { }
  public guardar() {
    alert("Se ha guardado exitosamente al paciente " + this.paciente.nombre +" "+ this.paciente.apellido + '\n' + "Con id : "+ this.paciente.id);
    this.pacServ.agregar(this.paciente);
   }
}

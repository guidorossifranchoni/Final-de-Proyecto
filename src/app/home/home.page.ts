import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { Paciente } from '../modelo/Paciente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private pacientes: Array <Paciente>;
 
  public idBorrar = '0';
  constructor(private pacServ: PacienteService, private activateRoute:ActivatedRoute) {
    this.pacientes = this.pacServ.obtenerTodos();
    /*PaSrv.obtenerTodos().subscribe(datos => {
       this.pacientes = datos
     });*/
  }
  public borrar(id:string) {
    if(id!='0'){
    alert("Se Borrará paciente con ID: "+ id);
    this.pacServ.eliminar(id);}
    else{
    alert("ingrese el ID del paciente que desea borras antes de continuar"); 
    }
   }
}

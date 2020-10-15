import { NumericValueAccessor } from '@ionic/angular';

export class Sesion{
    public id:string;
    public fecha:string;
    public tiempo:number;
    public cadenciaPromedio:number;
    public fuerzapd = Array<number>();
    public fuerzapi = Array<number>();
    public fases = Array<number>();
    public asistencia: number;
    public fuerzaPromMotor: number;
    public fuerzaPromPaciente: number;
}
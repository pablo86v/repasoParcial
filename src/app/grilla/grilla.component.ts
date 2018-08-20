import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { PersonaService } from '../persona.service';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  private source: LocalDataSource;
  private personas: Array<any> = [];
  public listaPersonas;


  constructor(public servicio: PersonaService) {
    this.source = new LocalDataSource();
    this.getDatosSmartTable();
    this.getDatosGrillaDiv();

  }//constructor 


  //************************************************/
  //        MIS FUNCIONES
  //************************************************/

  getDatosSmartTable() {
    this.servicio.getData()
      .subscribe(
      data => this.personas = data,
      error => console.error("Error: " + error),
      () => this.source.load(this.personas)
      );
  }

  getDatosGrillaDiv() {

    this.servicio.getData()
      .subscribe(
      data => this.listaPersonas = data,
      error => console.error("Error: " + error),
      () => this.source.load(this.personas)
      );
  }


  getColorBySex(sexo): string {
    if (sexo == "F") {
      return "#FE2EF7";
    } else {
      return "#0000FF";
    }
  }

  eliminarPersona(id) {
    this.servicio.deletePersona(id)
      .subscribe(
      data => console.log(data),
      error => console.error("Error: " + error),
      () => this.getDatosGrillaDiv()
      );
  }



  ngOnInit() {
  }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nombre: {
        title: 'NOMBRE'
      },
      apellido: {
        title: 'APELLIDO'
      },
      dni: {
        title: 'DNI'
      },
      foto: {
        title: 'FOTO'
      },
      sexo: {
        title: 'SEXO'
      }

    } //columns
  }; //settings



}

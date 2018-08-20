import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class PersonaService {

  constructor(public http: Http) { }



  getData() {
    return this.http.get('http://pablovalenzuela.esy.es/index.php/ge?t=persona')
      .map(response => response.json());
  }


  deletePersona(id) {
    return this.http.delete('http://pablovalenzuela.esy.es/index.php/de/' + id + '?t=persona')
      .map(response => response.json());
  }


}//class



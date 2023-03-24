import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{ /*angular utiliza observable para hacer todas las peticioens asincronicas*/
      return this.http.get<persona>(this.URL+'traer/perfil');
  }
}

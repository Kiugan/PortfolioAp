import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerda-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit{
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService){

  }

  ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data}) //el subscribe conecta el observer con los elementos obvserables 
  }

}

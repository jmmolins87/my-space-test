import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public description: string = 'Si desea ponerse en contacto conmigo, por favor, rellene el siguiente formulario e intentaré responderle con la mayor brevedad prosible:'

  constructor( ) { }

}

import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';

import { typeSkeleton } from '../../shared/components/skeleton/skeleton.config';
import { alertStatus } from './../../components/alert/alert.config';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public description: string = 'Si desea ponerse en contacto conmigo, por favor, rellene el siguiente formulario e intentaré responderle con la mayor brevedad prosible:';
  public showSkeleton: boolean = false;
  public contactSkeleton = typeSkeleton.CONTACT;
  public alertStatus = alertStatus;
  public formContact: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
  });
  
  constructor( private fb: FormBuilder ) {
    setTimeout(() => {
      this.showSkeleton = true;
    }, 2000);
  }

  get name() {
    return this.formContact.get('name');
  }

  get company() {
    return this.formContact.get('company');
  }

  get email() {
    return this.formContact.get('email');
  }

  get subject() {
    return this.formContact.get('subject');
  }

  get message() {
    return this.formContact.get('message');
  }

  onSubmit() {
    if (this.formContact.valid) {
      console.log('Form Submitted!', this.formContact.value);
    } else {
      console.log('Form not valid');
    }
  }

}

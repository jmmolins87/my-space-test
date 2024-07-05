import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { MessageService } from 'primeng/api';

import { typeSkeleton } from '../../shared/components/skeleton/skeleton.config';
import { alertStatus } from './../../components/alert/alert.config';
import { EmailService } from './../../services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent {

  public title: string = 'Contacto';

  public showSkeleton: boolean = false;
  public contactSkeleton = typeSkeleton.CONTACT;

  public alertStatus = alertStatus;

  public messageCharactres: string = '';
  public characterCount: number = 0;
  public maxCharacters: number = 1000;

  public formContact: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: [''],
    company: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxCharacters)]]
  });
  
  constructor ( 
    private fb: FormBuilder, 
    private messageService: MessageService,
    private emailService: EmailService ) {
    setTimeout(() => {
      this.showSkeleton = true;
    }, 2000);
  }

  // Los gets sirven para poder acceder a los campos del formulario de una forma más sencilla y rápida.
  get name() {
    return this.formContact.get('name');
  }

  get surname() {
    return this.formContact.get('surname');
  }

  get company() {
    return this.formContact.get('company');
  }

  get email() {
    return this.formContact.get('email');
  }

  get phone() {
    return this.formContact.get('phone');
  }

  get subject() {
    return this.formContact.get('subject');
  }

  get message() {
    return this.formContact.get('message');
  }

  sendEmail() {
    if( this.formContact.valid ) {
      this.emailService.sendEmail( this.formContact.value ).subscribe(
        response => {
          this.showSuccessToast();
          this.formContact.reset();
          console.log(response);
        },
        error => {
          console.log(error);
          this.showErrorToast(JSON.stringify(error));
        }
      );
    } 
  }

  resetFormError() {
    this.formContact.reset();
    this.showErrorToast();
  }

  resetForm() {
    this.showInfoToast();
  }

  showSuccessToast() {
    this.messageService.add({ severity: 'success', summary: '¡¡Genial!!', detail: 'Su mensaje se envió correctamente' });
  }

  showErrorToast(error?: string) {
    this.messageService.add({ severity: 'error', summary: '¡¡Ups!!', detail: error });
  }

  showInfoToast() {
    this.messageService.add({ severity: 'info', summary: '¡¡Ojo!! Ha reseteado el correo', detail: 'Volvamos a empezar' });
  }

  updateCounter() {
    this.characterCount = this.messageCharactres.length;
  }

}

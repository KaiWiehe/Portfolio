import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('contact') contactSectionID!: ElementRef;

  @ViewChild('name') name!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  public mailSent: boolean = false;

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  public contactForm: FormGroup =  new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
    mail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ], []),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
  })

  async sendMail(){
    //https://kai-wiehe.developerakademie.net/send_mail/send_mail.php
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;

    name.disabled = true;
    mail.disabled = true;
    message.disabled = true;

    //animation

    let messageSummary = `Name: ${name.value}, Message: ${message.value}`;

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('message', messageSummary);

    await fetch('https://kai-wiehe.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )

    name.value = '';
    mail.value = '';
    message.value = '';

    name.disabled = false;
    mail.disabled = false;
    message.disabled = false;

    this.mailSent = true;
  }

  constructor(){
    //this.contactForm.valueChanges.subscribe(console.log);
  }
}

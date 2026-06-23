import { Component, ElementRef,  ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(public translate: TranslateService){
  }

  openAndCloseMenu(){
    this.mobileMenuButton.nativeElement.classList.toggle('active');
    this.mobileMenu.nativeElement.classList.toggle('show');
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  setLanguage(language: 'de' | 'en', closeMenu = false) {
    this.translate.use(language);

    const name = document.getElementById('name') as HTMLInputElement | null;
    const mail = document.getElementById('mail') as HTMLInputElement | null;
    const message = document.getElementById('message') as HTMLInputElement | null;

    if (language === 'en') {
      if (name) name.placeholder = 'Your name';
      if (mail) mail.placeholder = 'Your email';
      if (message) message.placeholder = 'Your message';
    } else {
      if (name) name.placeholder = 'Ihr Name';
      if (mail) mail.placeholder = 'Ihre E-Mail-Adresse';
      if (message) message.placeholder = 'Ihre Nachricht';
    }

    if (closeMenu) {
      this.openAndCloseMenu();
    }
  }

}

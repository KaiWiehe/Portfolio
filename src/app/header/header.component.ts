import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(){}

  openAndCloseMenu(){
    this.mobileMenuButton.nativeElement.classList.toggle('active');
    this.mobileMenu.nativeElement.classList.toggle('show');
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('menu') menu!: ElementRef;

  constructor(){}

  openMenu(){
    this.menu.nativeElement.classList.toggle('active')
  }

}

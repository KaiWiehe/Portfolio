import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'kaiWiehePortfolio';

  ngOnInit(){
    AOS.init({
      offset: 200,
    });
  }

  @ViewChild(ContactComponent) contact!: ContactComponent;
  contactSection: any;

  ngAfterViewInit(){
      setTimeout(() => {
        this.contactSection = this.contact.contactSectionID;
      }, 0);
  }


}

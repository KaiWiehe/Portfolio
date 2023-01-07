import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'kaiWiehePortfolio';


  @ViewChild(ContactComponent) contact!: ContactComponent;
  contactSection: any;

  ngAfterViewInit(){
      setTimeout(() => {
        this.contactSection = this.contact.contactSectionID;
      }, 0);
  }


}

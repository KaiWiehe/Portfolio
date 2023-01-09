import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import * as AOS from 'aos';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'kaiWiehePortfolio';

  ngOnInit(){
  }

  @ViewChild(ContactComponent) contact!: ContactComponent;
  contactSection: any;

  ngAfterViewInit(){
      setTimeout(() => {
        this.contactSection = this.contact.contactSectionID;
      }, 0);
      AOS.init({
        offset: 200,
      });
      window.addEventListener('load', function() {
        AOS.refresh();
      });
  }

  constructor(public translate: TranslateService) {
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    /* translate.use('en'); */
}

}

import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(){
      AOS.init({
        offset: 200,
      });
      window.addEventListener('load', function() {
        AOS.refresh();
      });
  }

  constructor(public translate: TranslateService) {
}
}

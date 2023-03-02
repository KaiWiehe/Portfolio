import { Component } from '@angular/core';
import { ScrollToTopService } from '../../services/scroll-to-top.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ScrollToTopService]
})
export class FooterComponent {
  constructor(public ScrollToTopService: ScrollToTopService){}
}

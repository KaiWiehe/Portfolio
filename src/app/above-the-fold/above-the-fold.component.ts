import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent implements OnInit {
  @Input() contactSection:any;

  scollToContact(){
    this.contactSection.nativeElement.scrollIntoView();
  }


  // scroll(id)
  // scroll(el: HTMLElement) {
  //   el.scrollIntoView();
  // }

  ngOnInit(): void {
  }
}

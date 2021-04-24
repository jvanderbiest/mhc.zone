import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)])
      ]
    )]
})
export class MainPageComponent implements OnInit {

  constructor() { }
  isBusy = false;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 1) {
      var element: any = document.getElementById('navbar');
      element?.classList.add('sticky');
    } else {
      var element: any = document.getElementById('navbar');
      if (!this.isBusy) {
        setTimeout(() => {
          element.classList.remove('sticky');
          this.isBusy = false;
        }, 150);
        this.isBusy = true;
      }
    }
  }
}
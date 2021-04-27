import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

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
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngAfterViewInit(): void {
  }
  isBusy = false;
  faAngleUp = faAngleUp;
  showScrollUp = false;

  ngOnInit(): void {
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 1) {
      var element: any = document.getElementById('navbar');
      element?.classList.add('sticky');
      this.showScrollUp = true;
    } else {
      var element: any = document.getElementById('navbar');
      if (!this.isBusy) {
        setTimeout(() => {
          element.classList.remove('sticky');
          this.showScrollUp = false;
          this.isBusy = false;
        }, 150);
        this.isBusy = true;
      }
    }
  }
}
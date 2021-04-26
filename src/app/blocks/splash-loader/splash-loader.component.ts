import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-loader',
  templateUrl: './splash-loader.component.html',
  styleUrls: ['./splash-loader.component.less']
})
export class SplashLoaderComponent implements OnInit {
  showSplash = true;
  opacityChange = 1;
  splashTransition: string | undefined;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideSplashAnimation();
    }, 1000);
  }

  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity 1s`;
    this.opacityChange = 0;
    setTimeout(() => {
      // After the transition is ended the showSplash will be hided
      this.showSplash = !this.showSplash;
    }, 2000);
  }

}

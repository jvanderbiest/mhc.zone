import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.less']
})

export class CanvasMenuComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faTelegramPlane = faTelegramPlane;
  faTwitter = faTwitter;
  faGithub = faGithub;

  constructor(private navigationService : NavigationService) { }

  ngOnInit(): void {
  }
  
  toggleCanvasMenu() {
    this.navigationService.setShowNav(false);
  }
}

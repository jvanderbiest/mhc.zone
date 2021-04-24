import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faBars = faBars;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleCanvasMenu() {
      this.navigationService.setShowNav(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { faDoorOpen, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent implements OnInit {
  faDoorOpen = faDoorOpen;
  faBars = faBars;
  openMobileMenu: boolean = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.openMobileMenu = !this.openMobileMenu;
  }

  toggleCanvasMenu() {
      this.navigationService.setShowNav(true);
  }
}

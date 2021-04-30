import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
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
  currentLanguage : any = undefined;

  languages : any = [
    { code: 'nl', label: 'Dutch' },
    { code: 'en', label: 'English' },
    { code: 'ge', label: 'Georgian' },
    { code: 'es', label: 'Spanish' },
    { code: 'tr', label: 'Turkish' },
  ];

  constructor(private navigationService: NavigationService, @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit(): void {
    this.currentLanguage = this.languages.find((x : any) => x.code == this.localeId);
    if (!this.currentLanguage) {
      this.currentLanguage = this.languages.find((x : any) => x.code == 'en');
    }
  }

  toggleMobileMenu() {
    this.openMobileMenu = !this.openMobileMenu;
  }

  toggleCanvasMenu() {
      this.navigationService.setShowNav(true);
  }
}

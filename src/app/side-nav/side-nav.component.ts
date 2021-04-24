import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from './side-nav-direction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  showSideNav: Observable<boolean> | undefined;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Right;
  
  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }
}
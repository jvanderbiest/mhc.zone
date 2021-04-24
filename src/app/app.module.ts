import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SplashRightComponent } from './splash-container/splash-right/splash-right.component';
import { SplashLeftComponent } from './splash-container/splash-left/splash-left.component';
import { CanvasMenuComponent } from './canvas-menu/canvas-menu.component';
import { SplashComponent } from './splash-container/splash/splash.component';
import { FooterComponent } from './footer/footer.component';
import { MetahashWhyComponent } from './metahash-why/metahash-why.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderMainComponent } from './header-main/header-main.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SplashLoaderComponent } from './splash-loader/splash-loader.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MetahashBuyComponent } from './metahash-buy/metahash-buy.component';
import { MetahashWalletComponent } from './metahash-wallet/metahash-wallet.component';
import { MetahashForgingComponent } from './metahash-forging/metahash-forging.component';
import { MetahashFaqComponent } from './metahash-faq/metahash-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SplashComponent,
    SplashRightComponent,
    SplashLeftComponent,
    CanvasMenuComponent,
    FooterComponent,
    MetahashWhyComponent,
    HeaderMainComponent,
    ModalPopupComponent,
    SideNavComponent,
    SplashLoaderComponent,
    MainPageComponent,
    MetahashBuyComponent,
    MetahashWalletComponent,
    MetahashForgingComponent,
    MetahashFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

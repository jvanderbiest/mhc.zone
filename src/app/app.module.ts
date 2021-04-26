import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './blocks/header-menu/header-menu.component';
import { SplashRightComponent } from './blocks/splash-container/splash-right/splash-right.component';
import { SplashLeftComponent } from './blocks/splash-container/splash-left/splash-left.component';
import { CanvasMenuComponent } from './blocks/canvas-menu/canvas-menu.component';
import { SplashComponent } from './blocks/splash-container/splash/splash.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { MetahashWhyComponent } from './blocks/metahash-why/metahash-why.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderMainComponent } from './blocks/header-main/header-main.component';
import { ModalPopupComponent } from './blocks/modal-popup/modal-popup.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SideNavComponent } from './blocks/side-nav/side-nav.component';
import { SplashLoaderComponent } from './blocks/splash-loader/splash-loader.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MetahashBuyComponent } from './blocks/metahash-buy/metahash-buy.component';
import { MetahashWalletComponent } from './blocks/metahash-wallet/metahash-wallet.component';
import { MetahashForgingComponent } from './blocks/metahash-forging/metahash-forging.component';
import { MetahashFaqComponent } from './blocks/metahash-faq/metahash-faq.component';

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
 {
    path: '',
    component: MainPageComponent
 },
 {
   path: 'exchanges',
   loadChildren: () => import('./pages/exchanges/exchanges.module')
   .then(x => x.ExchangesModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

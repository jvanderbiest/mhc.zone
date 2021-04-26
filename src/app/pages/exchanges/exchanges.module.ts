import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeViewComponent } from './exchange-view/exchange-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExchangeViewComponent }
];

@NgModule({
  declarations: [
    ExchangeViewComponent
  ],
  imports: [
    CommonModule,
  RouterModule.forChild(routes)
  ]
})
export class ExchangesModule { }

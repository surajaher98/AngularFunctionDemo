import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent, LayoutComponent} from './components';
import { LayoutRoutes } from './layout.routes';
import { SharedModule } from '@app/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutes
  ],
  declarations: [HeaderComponent, LayoutComponent],
  providers: []
})
export class LayoutModule { }


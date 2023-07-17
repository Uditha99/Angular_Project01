import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './starter-main-slider/starter-main-slider.component';
import { StarterMainServiceComponent } from './starter-main-service/starter-main-service.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServiceComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }

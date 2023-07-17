import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './components/starter-main-slider/starter-main-slider.component';
import { StarterMainServiceComponent } from './components/starter-main-service/starter-main-service.component';
import { StarterPricingComponent } from './components/starter-pricing/starter-pricing.component';
import { StarterHomeContextComponent } from './components/starter-home-context/starter-home-context.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServiceComponent,
    StarterPricingComponent,
    StarterHomeContextComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }

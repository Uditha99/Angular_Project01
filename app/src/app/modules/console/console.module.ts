import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleHeaderComponent } from './components/console-header/console-header.component';
import { ConsoleFooterComponent } from './components/console-footer/console-footer.component';
import { ConsoleContainerComponent } from './components/console-container/console-container.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleHeaderComponent,
    ConsoleFooterComponent,
    ConsoleContainerComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }

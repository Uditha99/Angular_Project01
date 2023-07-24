import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';

import {ConsoleContainerComponent} from "./components/console-container/console-container.component";

const routes: Routes = [
  { path: '', component: ConsoleComponent , children:[
      {path:'',redirectTo:'/console/contain',pathMatch:'full'},
      {path:'contain',component:ConsoleContainerComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }

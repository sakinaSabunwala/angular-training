import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Temp1Component } from './components/temp1/temp1.component';
import { RoutingmoduleRoutingModule } from './routingmodule-routing.module';

@NgModule({
  declarations: [Temp1Component],
  imports: [
    CommonModule,
    RoutingmoduleRoutingModule
  ]
})
export class RoutingModule { }

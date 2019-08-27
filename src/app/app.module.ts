import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComp1Component } from './test-comp1/test-comp1.component';
import { TestComp2Component } from './test-comp2/test-comp2.component';
import { Temp1Component } from './routing/components/temp1/temp1.component';
import {RoutingModule} from  './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComp1Component,
    TestComp2Component,
    Temp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

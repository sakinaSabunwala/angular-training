import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComp1Component } from './test-comp1/test-comp1.component';
import { AuthServiceService } from './auth-service.service';
import { TestComp2Component } from './test-comp2/test-comp2.component';


const routes: Routes = [
  {
    path :'',
    component:TestComp1Component,
    canActivate:[AuthServiceService],
    children:[
      {
        path : 'c2',
        pathMatch : 'full',
        redirectTo : 'component2'
      }
      ,
      {
      path:'component2',
      component:TestComp2Component,
      children:[{
        path:'',
        pathMatch:'full',
        component:TestComp2Component
      }]
    }
    ]
},
{
  path : 'second',
  loadChildren : './routing/routing.module#RoutingModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

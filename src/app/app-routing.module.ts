import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestServiceComponent } from './test-service-component/test-service-component.component';
import { AnnanceComponent } from './annance/annance.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'test-service', 
    pathMatch:'full',
    component:TestServiceComponent
  },
  {
    path:'annance', 
    pathMatch:'full',
    component:AnnanceComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

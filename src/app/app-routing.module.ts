import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {TodosComponent} from './to-do/to-do.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'to-do',
    component:TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

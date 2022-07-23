import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'userdetail/:id',
    component:UserdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

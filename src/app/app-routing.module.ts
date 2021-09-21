import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDvrComponent } from './components/views/dvr/add-edit-dvr/add-edit-dvr.component';
import { ListDvrComponent } from './components/views/dvr/list-dvr/list-dvr.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
   //categoria
   { path: 'dvr', component: ListDvrComponent },
   { path: 'dvr/create', component: AddEditDvrComponent },
   { path: 'dvr/update/:catid', component:AddEditDvrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

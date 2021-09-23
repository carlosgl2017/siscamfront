import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDiscoComponent } from './components/views/disco/add-edit-disco/add-edit-disco.component';
import { ListDiscoComponent } from './components/views/disco/list-disco/list-disco.component';
import { AddEditDvrComponent } from './components/views/dvr/add-edit-dvr/add-edit-dvr.component';
import { ListDvrComponent } from './components/views/dvr/list-dvr/list-dvr.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { AddEditOficinaComponent } from './components/views/oficina/add-edit-oficina/add-edit-oficina.component';
import { ListOficinaComponent } from './components/views/oficina/list-oficina/list-oficina.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
   //Dvr
   { path: 'dvr', component: ListDvrComponent },
   { path: 'dvr/create', component: AddEditDvrComponent },
   { path: 'dvr/update/:iddvr', component:AddEditDvrComponent},
   //Disco
   { path: 'discos', component: ListDiscoComponent},
   { path: 'discos/create', component: AddEditDiscoComponent },
   { path: 'discos/update/:iddisco', component:AddEditDiscoComponent},

    //Oficina
   { path: 'oficinas', component: ListOficinaComponent},
   { path: 'oficinas/create', component: AddEditOficinaComponent },
   { path: 'oficinas/update/:idoficina', component:AddEditOficinaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

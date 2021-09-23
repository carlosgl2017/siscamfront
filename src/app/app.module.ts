import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { AddEditDvrComponent } from './components/views/dvr/add-edit-dvr/add-edit-dvr.component';
import { ListDvrComponent } from './components/views/dvr/list-dvr/list-dvr.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AddEditDiscoComponent } from './components/views/disco/add-edit-disco/add-edit-disco.component';
import { ListDiscoComponent } from './components/views/disco/list-disco/list-disco.component';
import { AddEditRotacionComponent } from './components/views/rotacion/add-edit-rotacion/add-edit-rotacion.component';
import { ListRotacionComponent } from './components/views/rotacion/list-rotacion/list-rotacion.component';
import { AddEditOficinaComponent } from './components/views/oficina/add-edit-oficina/add-edit-oficina.component';
import { ListOficinaComponent } from './components/views/oficina/list-oficina/list-oficina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AddEditDvrComponent,
    ListDvrComponent,
    MensajeConfirmacionComponent,
    AddEditDiscoComponent,
    ListDiscoComponent,
    AddEditRotacionComponent,
    ListRotacionComponent,
    AddEditOficinaComponent,
    ListOficinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

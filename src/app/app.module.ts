import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './user.service';
import { CandidatComponent } from './candidat/candidat.component';
import {CandidatService} from './candidat.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormComponent } from './form/form.component';
import { CandFormComponent } from './cand-form/cand-form.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CandidatComponent,
    FirstPageComponent,
    FormComponent,
    CandFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [UserService, CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

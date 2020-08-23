import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {CandidatComponent} from './candidat/candidat.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {CandFormComponent} from './cand-form/cand-form.component';


const routes: Routes = [{path: 'auth', component: AuthComponent},
  {path: 'cand', component: CandidatComponent},
  {path: '', component: AuthComponent}, {path: 'candf', component: CandFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

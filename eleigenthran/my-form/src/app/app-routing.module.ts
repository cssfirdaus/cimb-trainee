import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ WelcomeComponent } from './welcome/welcome.component';
import{ FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo:'/welcome', pathMatch:'full'},
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

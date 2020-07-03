import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'homepage', component: HomeComponent},
  {path:'formpage', component: FormComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}, //if non match the declare path, auto go to homepage
  {path: '**', component: HomeComponent}  // if try to access non exist page, open the homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

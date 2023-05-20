import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ContributeComponent } from './contribute/contribute.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "locations", component: LocationComponent,
    children: [
      {path: "running", component: WorkoutsComponent},
      {path: "static", component: WorkoutsComponent}
    ]
  },
  {path: "workouts", component: WorkoutsComponent},
  {path: "contribute", component: ContributeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},

  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

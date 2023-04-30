import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { LocationsComponent } from './locations/locations.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "locations", component: LocationsComponent,
    children: [
      {path: "running", component: WorkoutsComponent},
      {path: "static", component: WorkoutsComponent}
    ]
  },
  {path: "workouts", component: WorkoutsComponent},
  {path: "contribute", component: ContributeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},

  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

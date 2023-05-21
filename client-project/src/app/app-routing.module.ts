import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationsComponent } from './schedule/locations/locations.component';
import { WorkoutsComponent } from './schedule/workouts/workouts.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "schedule", component: ScheduleComponent,
    children: [
      {path: "locations", component: LocationsComponent},
      {path: "workouts", component: WorkoutsComponent}
    ]
  },
  {path: "statistics", component: StatisticsComponent},
  {path: "contribute", component: ContributeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},

  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, 
    onSameUrlNavigation: 'reload'
  })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

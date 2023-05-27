import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { PlannerComponent } from './planner/planner.component';
import { LocationsComponent } from './planner/locations/locations.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SettingsComponent } from './users/settings/settings.component';
import { ScheduleComponent } from './planner/schedule/schedule.component';
import { SelectWorkoutComponent } from './planner/select-workout/select-workout.component';
import { ConfirmComponent } from './planner/confirm/confirm.component';
import { SavedLocationComponent } from './planner/saved-location/saved-location.component';

const routes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "planner", component: PlannerComponent,
    children: [
      {path: "", component: LocationsComponent},
      {path: "select", component: SelectWorkoutComponent},
      {path: "schedule", component: ScheduleComponent},
      {path: "confirm", component: ConfirmComponent},
    ]
  },
  {path: "workouts", component: WorkoutsComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "contribute", component: ContributeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "user/profile", component: ProfileComponent},
  {path: "user/settings", component: SettingsComponent},
  {path: "saved-locations", component: SavedLocationComponent},
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

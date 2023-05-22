import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ContributeComponent } from './contribute/contribute.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatisticsComponent } from './statistics/statistics.component';
import { LocationsComponent } from './planner/locations/locations.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './users/profile/profile.component';
import { SettingsComponent } from './users/settings/settings.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PlannerComponent } from './planner/planner.component';
import { ScheduleComponent } from './planner/schedule/schedule.component';
import { SelectWorkoutComponent } from './planner/select-workout/select-workout.component';
import { ConfirmComponent } from './planner/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContributeComponent,
    FooterComponent,
    PlannerComponent,
    StatisticsComponent,
    LocationsComponent,
    WorkoutsComponent,
    ProfileComponent,
    SettingsComponent,
    ScheduleComponent,
    SelectWorkoutComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    GoogleMapsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

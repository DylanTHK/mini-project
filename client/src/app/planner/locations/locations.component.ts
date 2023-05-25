import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Marker, UserInfo } from 'src/app/models/model';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { PlannerService } from 'src/app/services/planner.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {
  pristine = true;
  markers: Marker[] = [];
  distances: number[] = [];
  locationSub$!: Subscription;
  distanceSub$!: Subscription;

  constructor(private googleMapsSvc: GoogleMapsService,
    private router: Router,
    private plannerSvc: PlannerService,
    private repoSvc: RepoService) { };

  ngOnInit(): void {
      this.pristine = true;
      this.locationSub$ = this.googleMapsSvc.locationSubject.subscribe(
        (data: Marker[]) => {
          this.markers = data;
          this.pristine = false;
        }
      );
      this.distanceSub$ = this.googleMapsSvc.distanceSubject.subscribe(
        distanceData => {
          this.distances = distanceData;
        }
      )

  }

  ngOnDestroy(): void {
      this.locationSub$.unsubscribe();
  }

  selectWorkout(index: number) {
    // one route w/o location
    if (index < 0) {
      sessionStorage.setItem("locationSelected", "false");
      this.router.navigate(['/planner', 'select']);
    } else {
      // one route w location
      sessionStorage.setItem("location", JSON.stringify(this.markers[index]));
      this.router.navigate(['/planner', 'select']);
    }
    this.increaseProgressBar(33);
    this.repoSvc.getStandardWorkout();
    
  }

  // save location to Mongo
  saveLocation(index: number) {
    console.info("saving" + this.markers[index]);
    const user: UserInfo = JSON.parse(sessionStorage.getItem("user") || "{}");
    const email = user.info.email;
    this.repoSvc.addSavedLocationByEmail(this.markers[index], email);
  }

  increaseProgressBar(value: number) {
    console.info("increasing")
    this.plannerSvc.updateProgress(value);
  }
  
}

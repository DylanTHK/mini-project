import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Marker } from 'src/app/models/model';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {
  pristine = true;
  markers: Marker[] = [];
  locationSub$!: Subscription;

  constructor(private googleMapsSvc: GoogleMapsService,
    private router: Router,
    private plannerSvc: PlannerService) { };

  ngOnInit(): void {
      this.pristine = true;
      this.locationSub$ = this.googleMapsSvc.locationSubject.subscribe(
        (data: Marker[]) => {
          this.markers = data;
          this.pristine = false;
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
    this.increaseProgressBar();
    
  }

  saveLocation(index: number) {
    console.info("saving" + this.markers[index]);
  }

  increaseProgressBar() {
    console.info("increasing")
    this.plannerSvc.increaseProgress();
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Marker, UserInfo } from 'src/app/models/model';
import { PlannerService } from 'src/app/services/planner.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-saved-location',
  templateUrl: './saved-location.component.html',
  styleUrls: ['./saved-location.component.css']
})
export class SavedLocationComponent {
  pristine = true;
  savedLocations: Marker[] = [];
  savedLocationSub$!: Subscription;

  home: Marker = {
    name: "Home",
    position: {
      lat: 0.00,
      lng: 0.00
    }
  }

  constructor(
    private router: Router,
    private repoSvc: RepoService,
    private plannerSvc: PlannerService) { };

  ngOnInit(): void {
    console.info("saved-location initialised")
    this.savedLocationSub$ = this.repoSvc.savedLocationsSub
      .subscribe((data: Marker[]) => {
        this.savedLocations = data;
        console.info(this.savedLocations);
      });
    if (this.savedLocations.length <= 0) {
      const user: UserInfo = JSON.parse(sessionStorage.getItem("user") || "{}");
      const email = user.info.email;
      this.repoSvc.getSavedLocationByEmail(email);
    }
  }

  ngOnDestroy(): void {
    this.savedLocationSub$.unsubscribe();
  }

  selectWorkout(index: number) {
    // one route w/o location
    
    if (index < 0) {
      sessionStorage.setItem("location", JSON.stringify(this.home));
      this.router.navigate(['/planner', 'select']);

    } else {
      // one route w location
      sessionStorage.setItem("location", JSON.stringify(this.savedLocations[index]));
      this.router.navigate(['/planner', 'select']);
    }
    // this.repoSvc.getStandardWorkout();
  }

  // save location to Mongo
  saveLocation(index: number) {
    console.info("saving" + this.savedLocations[index]);
    const user: UserInfo = JSON.parse(sessionStorage.getItem("user") || "{}");
    const email = user.info.email;
    this.repoSvc.addSavedLocationByEmail(this.savedLocations[index], email);
  }

  increaseProgressBar() {
    console.info("increasing");
    this.plannerSvc.updateProgress(33);
  }


}

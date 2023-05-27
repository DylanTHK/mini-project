import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Workout } from 'src/app/models/model';
import { PlannerService } from 'src/app/services/planner.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-select-workout',
  templateUrl: './select-workout.component.html',
  styleUrls: ['./select-workout.component.css']
})
export class SelectWorkoutComponent implements OnInit, OnDestroy {

  // simpleWorkout = ["Jump Squat", "Push Ups", "Sit Ups", "Pull Ups"];

  workouts: Workout[] = [ 
    { 
      label: "jump-squat",
      name: "Jump Squat",
      url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Exercises_for_Beginners_Squat_Jumps.gif",
      desc: [
        "Stand with your body facing forward and your feet parallel, directly underneath your shoulders",
        "Move your feet a few inches apart with your toes pointed slightly outward.",
        "Lower yourself into the squat, lowering your hips back and down while bending your knees.",
        "Keep your chest upright, with your head and face forward.",
        "Get into as deep a squat as possible, and then explode forcefully upward into a jump."
      ]
    },
    { 
      label: "push-ups",
      name: "Push Ups",
      url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Pushups.gif",
      desc: [
        "Get on your knees and place your hands underneath, but slightly outside, your shoulders",
        "Extend your legs while holding your body up with your arms, getting into plank position",
        "Lower your body by bending your elbows close to your body until your chest almost touches the floor",
        "Your upper arms should form a 45-degree angle when the top part of your body is in the lower pushup position",
        "Keep your abdomen, or core, flexed during the entire movement"
      ]
    },
    { 
      label: "sit-ups",
      name: "Sit Ups",
      url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400_400_8_Calisthenics_Exercises_for_Beginners_Crunches.gif",
      desc: [
        "Lay on the ground with your back flat.",
        "Place your feet flat on the ground, bending your knees up at a 90-degree angle to your body.",
        "Cross your hands on top of your chest and keep your head about a fist's distance from your chest.",
        "Keeping your core tight, sit up until your elbows or chest touch your knees.",
        "Focus on using your core muscles to pull you up, breathing out as you sit up and breathing in as you lie down."
      ]
    },
    { 
      label: "pull-ups",
      name: "Pull Ups",
      url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Exercises_for_Beginners_Pullup.gif",
      desc: [
        "Stand facing an exercise bar.",
        "Grasp the bar from the top with your arms slightly more than shoulder-width apart.",
        "Use your shoulder muscles to pull you up, bringing your head up over the bar."
      ]
    }
  ]

  workoutForm!: FormGroup;

  constructor(private plannerSvc: PlannerService,
    private router: Router,
    private fb: FormBuilder,
    private modalSvc: NgbModal,
    private repoSvc: RepoService) { }

  ngOnInit(): void {
    this.plannerSvc.updateProgress(33);
    this.workoutForm = this.fb.group({
      workouts: this.fb.array([]),
      sets: this.fb.control(3, Validators.required)
    });

    this.addWorkoutsToForm();
  }

  ngOnDestroy(): void {
  }

  addWorkoutsToForm() {
    const workoutArray = this.workoutForm.get('workouts') as FormArray;

    this.workouts.forEach(workout => {
      const workoutGroup = this.fb.group({
        name: [workout.name],
        selected: [true],
        quantity: [5]
      });

      workoutArray.push(workoutGroup);
    });
  }

  openModal(content: any) {
    this.modalSvc.open(content);
  }

  submitForm() {
    const selectedWorkouts = this.workoutForm.value.workouts
        .filter((workout: any) => workout.selected);
    const selectedSets = this.workoutForm.value.sets;
    sessionStorage.setItem("currentWorkouts", JSON.stringify(selectedWorkouts));
    sessionStorage.setItem("currentSets", JSON.stringify(selectedSets));
    this.router.navigate(['/planner', 'schedule']);
    this.increaseProgressBar();
  }

  get workoutControls() {
    return (this.workoutForm.get('workouts') as FormArray).controls;
  }

  increaseProgressBar() {
    console.info("increasing")
    this.plannerSvc.updateProgress(66);
  }

}

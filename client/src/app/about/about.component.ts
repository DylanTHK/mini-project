import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('obstaclesModal') obstaclesModal: any;
  
  obstacles: string[] = ["No time",
    "No money",
    "Don't know WHERE to exercise",
    "Don't know WHEN to exercise",
    "Don't know WHAT to exercise",
    "Don't know HOW to exercise"
  ]

  constructor(private modalSvc: NgbModal) { }

  openModal() {
    this.modalSvc.open(this.obstaclesModal, { ariaLabelledBy: 'obstaclesModalLabel' });
  }
}

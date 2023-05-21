import { Component } from '@angular/core';
import { faInstagramSquare, faSquareFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faSquareFacebook;
  faTwitter = faTwitterSquare;
  faInstagram = faInstagramSquare

}

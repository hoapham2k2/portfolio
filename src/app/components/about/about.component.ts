import { Component } from '@angular/core';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-about',
  imports: [CountComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-content.component.html',
  styleUrl: './my-content.component.css'
})
export class MyContentComponent {

}

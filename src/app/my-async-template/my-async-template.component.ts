import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-my-async-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-async-template.component.html',
  styleUrl: './my-async-template.component.css'
})
export class MyAsyncTemplateComponent {
  isLoading = signal(true);

  constructor() {
    setTimeout(() => this.isLoading.set(false), 2000);
  }
}

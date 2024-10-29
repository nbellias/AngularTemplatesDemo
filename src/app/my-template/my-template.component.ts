import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-my-template',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './my-template.component.html',
  styleUrl: './my-template.component.css'
})
export class MyTemplateComponent {
  condition = true;

  toggleCondition() {
    this.condition = !this.condition;
  }
}

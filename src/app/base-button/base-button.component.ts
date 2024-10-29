import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css'
})
export class BaseButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' | 'cancel' | 'delete' | 'deleteAll' | 'add' = 'button';
  @Input() disabled: boolean = false;
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-my-defer',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './my-defer.component.html',
  styleUrl: './my-defer.component.css'
})
export class MyDeferComponent {
  items = signal(['Item 1', 'Item 2']);
  isComing = signal(false);

  constructor() {
    setTimeout(() => this.isComing.set(true), 3000);
  }

  addItem() {
    this.items.update(items => {
      items.push(`Item ${items.length + 1}`);
      return items;
    });
  }
}

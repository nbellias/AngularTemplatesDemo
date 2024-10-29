import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseButtonComponent } from './base-button/base-button.component';
import { MyContentComponent } from './my-content/my-content.component';
import { MyTemplateComponent } from './my-template/my-template.component';
import { MyAsyncTemplateComponent } from './my-async-template/my-async-template.component';
import { MyDeferComponent } from './my-defer/my-defer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseButtonComponent, MyContentComponent, MyTemplateComponent, MyAsyncTemplateComponent, MyDeferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTemplatesDemo';
  baseButton = new BaseButtonComponent();
}

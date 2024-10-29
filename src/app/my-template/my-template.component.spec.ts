import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTemplateComponent } from './my-template.component';

describe('MyTemplateComponent', () => {
  let component: MyTemplateComponent;
  let fixture: ComponentFixture<MyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

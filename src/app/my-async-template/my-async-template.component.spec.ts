import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAsyncTemplateComponent } from './my-async-template.component';

describe('MyAsyncTemplateComponent', () => {
  let component: MyAsyncTemplateComponent;
  let fixture: ComponentFixture<MyAsyncTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAsyncTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAsyncTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeferComponent } from './my-defer.component';

describe('MyDeferComponent', () => {
  let component: MyDeferComponent;
  let fixture: ComponentFixture<MyDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

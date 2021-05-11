import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindLibComponent } from './tailwind-lib.component';

describe('TailwindLibComponent', () => {
  let component: TailwindLibComponent;
  let fixture: ComponentFixture<TailwindLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

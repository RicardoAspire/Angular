import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildComponent } from './hero-child-data.component';

describe('HeroChildDataComponent', () => {
  let component: HeroChildComponent;
  let fixture: ComponentFixture<HeroChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

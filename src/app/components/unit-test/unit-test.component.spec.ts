import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UnitTestComponent } from './unit-test.component';

//Describe = name of the unit test
describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  //Imports and configurations that I will need in the unit test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        UnitTestComponent
      ],
    }).compileComponents();
  });

  //Code that executes for each unit test
  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Its like each question of an exam
  //Expect in this case means that I wait that component exists
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Invalid form because password is missing', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const unit = fixture.componentInstance
    fixture.detectChanges()

    const email = unit.form.controls['email']
    email.setValue('rixflores@gmail.com');
    expect(unit.form.invalid).toBeTrue();
  });

  it('Valid form because email and password are correct', ()=>{
    const fixture = TestBed.createComponent(UnitTestComponent);
    const unit = fixture.componentInstance
    fixture.detectChanges()

    const email = unit.form.controls['email']    
    const password = unit.form.controls['password']
    email.setValue('rixflores@gmail.com');
    password.setValue('123456');
    expect(unit.form.invalid).toBeFalse();
  });

});



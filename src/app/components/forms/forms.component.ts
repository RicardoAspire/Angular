import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Hero } from './hero';
import { forbiddenValidator } from './username-validator';

@Component({
  selector: 'app-forms', 
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), forbiddenValidator(/name/)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  name = new FormControl('');

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submittedHero = false;

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Nancy');
  }
  
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmitHero() { 
    this.submittedHero = true; 
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}

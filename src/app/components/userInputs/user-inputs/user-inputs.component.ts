import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements OnInit {
  clickMessage = '';
  values = '';
  valuesBox = '';
  valuesEnter = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  onKeyValue(value: string) {
    this.valuesBox += value + ' | ';
  }

  onEnter(value: string) { this.valuesEnter = value; }


}

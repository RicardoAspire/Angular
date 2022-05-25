import { Component } from '@angular/core';
import { HEROES } from '../../../models/mock-heroes';

@Component({
  selector: 'app-hero-parent',
  template: `
  <div class="container">
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
      <hr>
    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  </div>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
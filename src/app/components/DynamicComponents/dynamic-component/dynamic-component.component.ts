import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { BannerOneComponent } from '../banner-one/banner-one.component';
import { BannerTwoComponent } from '../banner-two/banner-two.component';
import { DynamicComponentDirective } from '../Directives/dynamic-component.directive';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements AfterViewInit {
  id = 0;
  @ViewChild(DynamicComponentDirective) dynamic!: DynamicComponentDirective;

  constructor() { }

  ngAfterViewInit(): void {
    this.generateComponent();
    interval(2000).subscribe((): void => this.generateComponent());
  }

  generateComponent(): void{
    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(BANNERS[this.id].component);
    this.id = this.id === 0 ? 1 : 0;
  }
}

const BANNERS = [
  {
    data:{
      text: 'Component 1'
    },
    component: BannerOneComponent
  },
  {
    data:{
      text: 'Component 2'
    },
    component: BannerTwoComponent
  }
]

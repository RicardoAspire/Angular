import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from '../uppercase.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [UppercasePipe]
})
export class PipesComponent implements OnInit {
  lista = [
    {id: 1, name: 'Avengers age of ultron', price: 9.99},
    {id: 2, name: 'Avengers infinity war', price: 10.99},
    {id: 3, name: 'Avengers endgame', price: 12.99},
    {id: 4, name: 'Dr strange', price: 8.99},
    {id: 5, name: 'Deadpool', price: 5.99},
    {id: 6, name: 'X-men days of the future past', price: 15.99},
    {id: 7, name: 'Logan', price: 14.99},
    {id: 8, name: 'Spiderman no way home', price: 20.99},
  ]
  constructor(
    private uppercasePipe: UppercasePipe
  ) { }

  ngOnInit(): void {
    alert(this.uppercasePipe.transform(this.lista[0].name));
  }

}

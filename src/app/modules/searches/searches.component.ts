import { Component, OnInit } from '@angular/core';
import { SearchBy } from './searches.interfaces';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
})
export class SearchesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  eventSearchBy($event: SearchBy) {
    console.log('$event:', $event);
  }
}

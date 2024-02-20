import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results-found',
  templateUrl: './no-results-found.component.html',
  styleUrls: ['./no-results-found.component.scss'],
})
export class NoResultsFoundComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}

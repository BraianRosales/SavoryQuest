import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() panelClass: string = 'primary';
  @Input() icon: string = '';
  @Input() width: string = '';

  constructor() {}

  ngOnInit(): void {}
}

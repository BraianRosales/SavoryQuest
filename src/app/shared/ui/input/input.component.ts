import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder?: string = 'Recipe or ingredient...';
  @Input() panelClass:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'search'
    | 'forCard' = 'primary';
  @Input() controlName!: string;
  @Input() group?: FormGroup;
  @Input() width: string = '270px';
  @Input() marginBottom: string = '';
  @Input() icon?: string;

  isFocused: boolean = false;

  getHintStyle() {
    return {
      color:
        !this.group?.get(this.controlName)?.valid &&
        this.group?.get(this.controlName)?.touched
          ? '#D43434'
          : 'inherit',
    };
  }
}

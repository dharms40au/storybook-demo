import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-demo-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  @Input() content = 'default';
}

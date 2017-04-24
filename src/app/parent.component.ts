import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: '<child></child>'
})
export class ParentComponent {
  title = 'This is a test';
}

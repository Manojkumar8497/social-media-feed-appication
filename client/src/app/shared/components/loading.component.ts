import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<progress class="progress is-small is-info" max="100">15%</progress>',
  styles: [
    `
    .progress.is-small {
      height: .5rem;
    }
    .progress{
      border-radius:0px;
    }
    `
  ]
})
export class LoadingComponent {

}

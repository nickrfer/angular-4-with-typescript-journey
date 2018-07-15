import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>Hello, I'm a dashboard!</p>
    <p>I'm currently: {{ loadState }}</p>
    <input type="text" [(ngModel)]="loadState" value="Type here to change the loading state" />
    <button (click)="onButtonClick()">Click here to finish loading</button>
  `
})
export class DashboardComponent {
  loadState = 'loading';

  onButtonClick() {
    this.loadState = 'Finished';
  }

  onUserInput(event) {
    this.loadState = event.target.value;
  }
}

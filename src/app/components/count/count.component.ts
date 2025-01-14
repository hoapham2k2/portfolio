import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  // templateUrl: './count.component.html',
  // styleUrl: './count.component.css'
  //

  template: `
    <button (click)="decrement()">-</button>
    <span>{{ count() }}</span>
    <button (click)="increment()">+</button>
    <button (click)="reset()">Reset</button>
  `,
  styles: [`
    button {
      font-size: 1.5em;
      padding: 0.5em 1em;
    }
    span {
      font-size: 2em;
      margin: 0 1em;
    }
  `]

})
export class CountComponent {
  count = signal(0);

  increment() {
    this.count.update(n => n + 1);
  }

  decrement() {
    this.count.update(n => n - 1);
  }

  reset() {
    this.count.set(0);
  }
}

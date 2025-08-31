import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="card">
      <h2>About</h2>
      <p>Expense Tracker built with Angular 17 and LocalStorage. Shows charts via Chart.js.</p>
      <p>Use it to track expenses by category and view simple analytics.</p>
    </div>
  `
})
export class AboutComponent {}
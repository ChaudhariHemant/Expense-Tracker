import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <div><strong>Expense Tracker</strong></div>
      <div>
        <a routerLink="/">Dashboard</a>
        <a routerLink="/add">Add Expense</a>
        <a routerLink="/list">Expense List</a>
        <a routerLink="/about">About</a>
      </div>
    </div>
  `
})
export class NavbarComponent {}
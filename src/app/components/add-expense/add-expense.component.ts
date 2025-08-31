import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  template: `
    <div class="card">
      <h2>Add Expense</h2>
      <div class="form-row">
        <input [(ngModel)]="model.amount" type="number" placeholder="Amount" />
        <select [(ngModel)]="model.category">
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-row">
        <input [(ngModel)]="model.date" type="date" />
        <input [(ngModel)]="model.note" placeholder="Note" />
      </div>
      <button class="btn btn-primary" (click)="add()">Add Expense</button>
    </div>
  `
})
export class AddExpenseComponent {
  model: any = { amount: null, category: 'Food', date: '', note: '' };
  constructor(private svc: ExpenseService, private router: Router){}

  add(){
    if(!this.model.amount || !this.model.date){ alert('Enter amount and date'); return; }
    this.svc.addExpense({ ...this.model, amount: +this.model.amount });
    this.router.navigate(['/']);
  }
}
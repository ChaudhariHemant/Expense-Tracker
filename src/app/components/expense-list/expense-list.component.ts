import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  template: `
    <div class="card">
      <h2>Expense List</h2>
      <table class="table">
        <thead><tr><th>Date</th><th>Category</th><th>Note</th><th>Amount</th><th>Action</th></tr></thead>
        <tbody>
          <tr *ngFor="let e of expenses; let i = index">
            <td>{{ e.date }}</td>
            <td>{{ e.category }}</td>
            <td>{{ e.note }}</td>
            <td>{{ e.amount | currency }}</td>
            <td><button class="btn" (click)="remove(i)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class ExpenseListComponent implements OnInit {
  expenses: any[] = [];
  constructor(private svc: ExpenseService){}
  ngOnInit(){ this.load(); }
  load(){ this.expenses = this.svc.getExpenses(); }
  remove(i:number){ if(confirm('Delete this expense?')){ this.svc.removeExpense(i); this.load(); } }
}
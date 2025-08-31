import { Injectable } from '@angular/core';

const STORAGE_KEY = 'expense-tracker-data';

@Injectable()
export class ExpenseService {
  private expenses: any[] = [];

  constructor(){
    this.load();
  }

  private save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.expenses));
  }

  private load(){
    const raw = localStorage.getItem(STORAGE_KEY);
    this.expenses = raw ? JSON.parse(raw) : [
      { date: new Date().toISOString().slice(0,10), category: 'Food', note: 'Lunch', amount: 120 },
      { date: new Date().toISOString().slice(0,10), category: 'Transport', note: 'Taxi', amount: 60 }
    ];
    this.save();
  }

  getExpenses(){ return [...this.expenses].sort((a,b)=> b.date.localeCompare(a.date)); }
  addExpense(e:any){ this.expenses.push(e); this.save(); }
  removeExpense(index:number){ this.expenses.splice(index,1); this.save(); }
  getTotalExpenses(){ return this.expenses.reduce((s,t)=> s + (+t.amount || 0), 0); }
  getTotalByCategory(){
    const map:any = {};
    for(const e of this.expenses){
      map[e.category] = (map[e.category] || 0) + (+e.amount || 0);
    }
    return map;
  }
}
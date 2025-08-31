import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  template: `
   <div class="card">
  <h2>Dashboard</h2>
  <p>Total expenses: <strong>{{ total | currency }}</strong></p>
  <div style="max-width:600px">
    <canvas baseChart 
      [data]="chartData" 
      [options]="chartOptions"
      type="bar">
    </canvas>
  </div>
</div>

  `
})
export class DashboardComponent implements OnInit {
  total = 0;
  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };

  constructor(private svc: ExpenseService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    const byCat = this.svc.getTotalByCategory();
    this.chartData = {
      labels: Object.keys(byCat),
      datasets: [
        { data: Object.values(byCat), label: 'Amount' }
      ]
    };
    this.total = this.svc.getTotalExpenses();
  }
}
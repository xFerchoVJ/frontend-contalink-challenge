import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Invoice } from './invoice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  startDate: string = '';
  endDate: string = '';
  sales: Invoice[] | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.startDate && this.endDate) {
      this.sales = null;
      const url = `http://localhost:3000/invoices?start_date=${this.startDate}&end_date=${this.endDate}`;
      this.http.get(url).subscribe({
        next: (data: any) => {
          this.sales = data;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
    }
  }
}

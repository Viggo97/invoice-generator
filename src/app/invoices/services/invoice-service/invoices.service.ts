import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/invoices/models/invoice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  private invoices: Invoice[] = [];

  constructor() {}

  getInvoices(): Observable<Invoice[]> {
    return of(this.invoices);
  }

  addInvoice(invoices: Invoice[]): Observable<null> {
    this.invoices.push(...invoices);
    return of(null);
  }
}

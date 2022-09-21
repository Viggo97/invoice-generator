import { CompaniesService } from '../../services/companies-service/companies.service';
import { Company } from '../../models/company';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoicesService } from '../../services/invoice-service/invoices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
})
export class PreviewInvoiceComponent implements OnInit {
  companies$: Observable<Company[]>;
  invoices: Invoice[] = [];
  amount: number = 0;

  constructor(
    private companiesService: CompaniesService,
    private invoicesService: InvoicesService
  ) {}

  ngOnInit(): void {
    this.companies$ = this.companiesService.getCompanies();
    this.invoicesService.getInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
        this.amount = this.invoices.reduce(
          (acc, curr) => acc + curr.count * curr.price,
          0
        );
      },
      error: (err) => console.log(err),
    });
  }
}

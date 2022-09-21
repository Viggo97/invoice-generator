import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoicesService } from '../../services/invoice-service/invoices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent implements OnInit {
  form: FormGroup;
  hasItems: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private invoiceService: InvoicesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      invoices: this.fb.array([this.createInvoiceForm()]),
    });
  }

  private createInvoiceForm(): FormGroup {
    return this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      count: [1, [Validators.min(1), Validators.max(100)]],
      price: [0, [Validators.min(1), Validators.max(1000000)]],
    });
  }

  get invoices(): FormArray {
    return this.form.get('invoices') as FormArray;
  }

  addInvoice(): void {
    const invoiceForm = this.createInvoiceForm();
    this.invoices.push(invoiceForm);
    this.hasItems = true;
  }

  deleteInvoice(i: number): void {
    this.invoices.removeAt(i);
    if (this.form.get('invoices')?.value.length === 0) {
      this.hasItems = false;
    }
  }

  onSubmit() {
    const invoices = this.form.get('invoices')?.value;
    if (invoices.length === 0 || !this.form.valid) {
      this.hasItems = false;
      return;
    }
    this.invoiceService.addInvoice(invoices).subscribe({
      next: () => {},
      error: (err) => console.log(err),
      complete: () => this.router.navigate(['/preview']),
    });
  }
}

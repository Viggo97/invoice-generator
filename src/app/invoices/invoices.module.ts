import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { PreviewInvoiceComponent } from './components/preview-invoice/preview-invoice.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [NewInvoiceComponent, PreviewInvoiceComponent],
  exports: [],
})
export class InvoicesModule {}

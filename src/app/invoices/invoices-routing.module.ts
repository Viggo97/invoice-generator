import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { PreviewInvoiceComponent } from './components/preview-invoice/preview-invoice.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
  { path: '', component: NewInvoiceComponent },
  { path: 'preview', component: PreviewInvoiceComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}

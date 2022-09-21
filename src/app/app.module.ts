import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InvoicesModule } from './invoices/invoices.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, LayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 1000 }),
    InvoicesModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

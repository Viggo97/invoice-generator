import { Company } from 'src/app/invoices/models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private companiesUrl = 'api/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }
}

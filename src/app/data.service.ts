import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      companies: [
        {
          name: 'KLG test task',
          address: 'Poland',
          phones: ['123 456 789', '789-456-123'],
        },
      ],
    };
  }
}

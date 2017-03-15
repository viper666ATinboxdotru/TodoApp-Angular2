/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoAppApiService } from './todo-app-api.service';

describe('TodoAppApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoAppApiService]
    });
  });

  it('should ...', inject([TodoAppApiService], (service: TodoAppApiService) => {
    expect(service).toBeTruthy();
  }));
});

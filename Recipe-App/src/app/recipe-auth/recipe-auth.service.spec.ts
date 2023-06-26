import { TestBed } from '@angular/core/testing';

import { RecipeAuthService } from './recipe-auth.service';

describe('RecipeAuthService', () => {
  let service: RecipeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

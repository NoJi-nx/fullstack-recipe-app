import { TestBed } from '@angular/core/testing';

import { RecipeListsService } from './recipe-lists.service';

describe('RecipeListsService', () => {
  let service: RecipeListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeListsService);
  });

  it('generate', () => {
    expect(service).toBeTruthy();
  });
});
